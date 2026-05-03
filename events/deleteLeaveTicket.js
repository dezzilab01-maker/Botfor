const { EmbedBuilder } = require('discord.js');
const discord_transcripts = require('discord-html-transcripts');
const config = require('../config.js');
const client = require('../main');
const { connectToDatabase_claimTicket } = require('../events/mongodbSystem.js');


client.on('guildMemberRemove', async (member) => {
    const guild = member.guild;

    guild.channels.cache.forEach(async (channel) => {
        if (channel.isTextBased() && channel.topic?.includes(member.id)) {
            try {
                const transcriptAttachment = await discord_transcripts.createTranscript(channel);

                const transcriptChannel = guild.channels.cache.get(config["ticket"].transcript_channel);
                if (!transcriptChannel) {
                    console.warn(`Kanał transkryptów nie znaleziony: ${config["ticket"].transcript_channel}`);
                    return;
                }

                const channelTopic = channel.topic;
                const lines = channelTopic.split('\n');
                const collection = await connectToDatabase_claimTicket();

                const ticketData = await collection.findOne({ channelId: channel.id });

                if (!ticketData) {
                    console.log(`Nie znaleziono ticketu dla kanału ${channel.id}`);
                }

                const claimedId = ticketData && ticketData.claimerId
                    ? `<@${ticketData.claimerId}>`
                    : "BRAK";

                let id, usrnm, idd;

                const ticketUser = guild.members.cache.get(lines[0]?.trim());

                let ticketUsername = "Nieznany";
                let ticketUserId = lines[0]?.trim();

                if (ticketUserId) {
                    try {
                        const ticketUser = guild.members.cache.get(ticketUserId) || await guild.members.fetch(ticketUserId).catch(() => null);

                        if (ticketUser) {
                            ticketUsername = ticketUser.user.username;
                        } else {
                            const fetchedUser = await client.users.fetch(ticketUserId).catch(() => null);
                            if (fetchedUser) {
                                ticketUsername = fetchedUser.username;
                            }
                        }
                    } catch (error) {
                        console.error(`Nie udało się pobrać użytkownika o ID ${ticketUserId}:`, error);
                    }
                }

                if (ticketUser) {
                    id = `<@${ticketUser.id}>`;
                    idd = ticketUser.id;
                    usrnm = ticketUsername;
                } else if (lines[0]?.trim()) {
                    id = `<@${lines[0]?.trim()}>`;
                    idd = lines[0]?.trim();
                    usrnm = "Nieznany";
                } else {
                    id = "BRAK";
                    idd = "BRAK";
                    usrnm = "Nieznany";
                }

                await transcriptChannel.send({
                    embeds: [
                        new EmbedBuilder()
                            .setTitle(config["ticket_close1"].title)
                            .setDescription(config["ticket_close1"].description
                                .replace("{ping}", id)
                                .replace("{nick}", usrnm)
                                .replace("{id}", idd)
                                .replace("{claimed}", claimedId)
                                .replace("{closed}", "SYSTEM"))
                            .setColor(config["Ogólne"].kolor)
                    ],
                    files: [transcriptAttachment],
                });

                if (ticketUser) {
                    const directEmbed = new EmbedBuilder()
                        .setTitle(config["ticket_close2"].title)
                        .setDescription(
                            config["ticket_close2"].description.replace("{user}", "SYSTEM")
                        )
                        .setColor(config["Ogólne"].kolor)
                        .setFooter({
                            text: config["ticket_close2"].footer,
                            iconURL: client.user.displayAvatarURL(),
                        })
                        .setTimestamp()
                        .setThumbnail(client.user.displayAvatarURL());

                    await ticketUser.send({ embeds: [directEmbed] }).catch(() => {
                        console.warn("Nie można wysłać DM do użytkownika.");
                    });
                }

                await channel.delete();
            } catch (error) {
                console.error(`Nie udało się usunąć kanału ${channel.name}:`, error);
            }
        }
    });
});
