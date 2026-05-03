const { EmbedBuilder, ChannelType } = require('discord.js');
const config = require('../config.js');
const chalk = require("chalk-v2");
const client = require('../main.js');
const { connectToDatabase_legitcheck, connectToDatabase_claimTicket } = require('./mongodbSystem.js');
const discord_transcripts = require('discord-html-transcripts');

client.on('messageCreate', async (message) => {

    const targetChannelIdLegitcheck = config["legitcheck"].channel;

    if (message.channel.id === targetChannelIdLegitcheck && !message.author.bot) {
        if (message.content.startsWith('+rep')) {
            const mentionedUser = message.mentions.users.first();

            if (!mentionedUser || !message.content.includes('', message.content.indexOf(mentionedUser?.id))) {
                const reminderMessage = await message.channel.send({
                    content: `<@${message.author.id}>`,
                    embeds: [new EmbedBuilder()
                        .setDescription(config["legitcheck"].error_description)
                        .setColor(0x181818)
                    ],
                });

                setTimeout(() => {
                    reminderMessage.delete().catch(() => { });
                }, 5000);

                return message.delete().catch(() => { });
            }

            const embed = new EmbedBuilder()
                .setTitle(config["legitcheck"].title)
                .setDescription(config["legitcheck"].description)
                .setColor(config["Ogólne"].kolor)
                .setImage(config["legitcheck"].image)
                .setFooter({ text: config["legitcheck"].footer });

            try {
                const collection = await connectToDatabase_legitcheck();
                const existingMessage = await collection.findOne({ channelId: message.channel.id });

                if (existingMessage) {
                    const oldMessage = await message.channel.messages.fetch(existingMessage.messageId).catch(() => null);
                    if (oldMessage) {
                        await oldMessage.delete();
                    }
                }

                const sentMessage = await message.channel.send({ embeds: [embed] });

                await collection.updateOne(
                    { channelId: message.channel.id },
                    { $set: { messageId: sentMessage.id } },
                    { upsert: true }
                );

                const channelIds = [config["legitcheck"].ping_channel1, config["legitcheck"].ping_channel2];

                for (const channelId of channelIds) {
                    const channel = message.guild.channels.cache.get(channelId);

                    if (channel && channel.isTextBased()) {
                        const befMessage = await channel.send({
                            content: `<@${message.author.id}>`,
                        });

                        setTimeout(() => {
                            befMessage.delete().catch(console.error);
                        }, 3000);
                    }
                }

                const directEmbed = new EmbedBuilder()
                    .setColor(config["Ogólne"].kolor)
                    .setDescription(config["legitcheck_success"].description.replace("{user}", message.author.id))

                message.author.send({
                    embeds: [directEmbed],
                }).catch(() => { });

                const categoryChannels = message.guild.channels.cache.filter(
                    (channel) =>
                        channel.parentId === (config["realized"].category) &&
                        channel.type === ChannelType.GuildText
                );

                for (const channel of categoryChannels.values()) {
                    const topic = channel.topic || "";

                    const topicFirstLine = topic.split("\n")[0];
                    if (topicFirstLine.includes(message.author.id)) {
                        const channelId = channel.id;

                        const channelTopic = channel.topic;

                        if (!channelTopic) {
                            await message.channel.send({ content: "Kanał nie ma opisanego tematu." });
                            return;
                        }

                        const lines = channelTopic.split('\n');

                        try {
                            const collection = await connectToDatabase_claimTicket();

                            await collection.deleteOne({ channelId });

                            const transcriptAttachment = await discord_transcripts.createTranscript(channel);

                            const transcriptChannel = message.guild.channels.cache.get(config["ticket"].transcript_channel);

                            let id, usrnm, idd, claimedid;

                            const ticketUser = message.guild.members.cache.get(lines[0]?.trim());

                            if (ticketUser) {
                                id = `<@${ticketUser.id}>`;
                                idd = ticketUser.id;
                                usrnm = ticketUser.user.username;
                            } else {
                                id = `<@${lines[0]?.trim()}>`;
                                idd = lines[0]?.trim();
                                usrnm = "Nieznany";
                            }

                            if (lines[5]?.trim()) {
                                claimedid = `<@${lines[5].trim()}>`;
                            } else {
                                claimedid = "BRAK";
                            }

                            const closedBy = `<@${message.author.id}>`;

                            await transcriptChannel.send({
                                embeds: [
                                    new EmbedBuilder()
                                        .setTitle(config["ticket_close1"].title)
                                        .setDescription(config["ticket_close1"].description
                                            .replace("{ping}", id)
                                            .replace("{nick}", usrnm)
                                            .replace("{id}", idd)
                                            .replace("{claimed}", claimedid)
                                            .replace("{closed}", closedBy))
                                        .setColor(config["Ogólne"].kolor)
                                ],
                                files: [transcriptAttachment],
                            });

                            if (ticketUser) {
                                const directEmbed = new EmbedBuilder()
                                    .setTitle(config["ticket_close2"].title)
                                    .setDescription(config["ticket_close2"].description.replace("{user}", message.author.id))
                                    .setColor(config["Ogólne"].kolor)
                                    .setFooter({ text: config["ticket_close2"].footer, iconURL: client.user.displayAvatarURL() })
                                    .setTimestamp(new Date())
                                    .setThumbnail(client.user.displayAvatarURL());

                                await ticketUser.send({ embeds: [directEmbed] }).catch(() => {
                                    console.warn("Nie można wysłać DM do użytkownika.");
                                });
                            }

                            setTimeout(() => {
                                channel.delete().catch(console.error);
                            }, 5000);

                        } catch (error) {
                            console.error("Błąd przy usuwaniu ticketu:", error);
                            await message.channel.send({ content: "Wystąpił błąd przy usuwaniu ticketu." });
                        }
                    }
                }

            } catch (error) {
                console.error(chalk.redBright('[BOT ERROR]'), error);
            }
        } else {
            const reminderMessage = await message.channel.send({
                content: `<@${message.author.id}>`,
                embeds: [new EmbedBuilder()
                    .setDescription(config["legitcheck"].error_description)
                    .setColor(0x181818)
                ],
            });

            setTimeout(() => {
                reminderMessage.delete().catch(() => { });
            }, 5000);

            message.delete().catch(() => { });
        }
    }
});
