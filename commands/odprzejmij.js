const { ApplicationCommandType, EmbedBuilder, PermissionsBitField } = require('discord.js');
const config = require('../config.js');
const { connectToDatabase_claimTicket } = require('../events/mongodbSystem.js');
const moment = require('moment-timezone');

module.exports = {
    name: 'odprzejmij',
    description: "Zwolnij ticket przypisany do kanału.",
    type: ApplicationCommandType.ChatInput,
    run: async (client, interaction) => {
        const requiredRoleIDs = [config["permisje"].dostęp, config["permisje"].realizator];

        if (interaction.member.roles.cache.some(role => requiredRoleIDs.includes(role.id))) {
            const channel = interaction.channel;
            const allowedCategories = config.allowedCategories.ticketCategories;

            if (!allowedCategories.includes(channel.parentId)) {
                return interaction.reply({ content: "Ten kanał nie jest w dozwolonej kategorii.", ephemeral: true });
            }

            const channelTopic = channel.topic;

            if (!channelTopic) {
                return interaction.reply({ content: "Kanał nie ma opisanego tematu.", ephemeral: true });
            }

            try {
                const collection = await connectToDatabase_claimTicket();

                const ticketData = await collection.findOne({ channelId: channel.id });

                if (!ticketData) {
                    return interaction.reply({
                        content: "Ten ticket nie został jeszcze przejęty.",
                        ephemeral: true
                    });
                }

                const claimerId = ticketData.claimerId || null;

                if (claimerId !== interaction.user.id) {
                    return interaction.reply({
                        content: `Ten ticket został już przejęty przez <@${claimerId}>. Tylko ta osoba może go zwolnić.`,
                        ephemeral: true
                    });
                }

                const timestamp = moment().tz("Europe/Warsaw").unix();
                const lastClaimTimestamp = ticketData.timestamp;

                const timeDifference = timestamp - lastClaimTimestamp;
                if (timeDifference < 300) {
                    const remainingTime = 300 - timeDifference;

                    const toEnd = timestamp + remainingTime;

                    return interaction.reply({
                        content: `Możesz zwolnić ticket tylko po upływie 5 minut od przejęcia. Spróbuj ponownie <t:${toEnd}:R>.`,
                        ephemeral: true
                    });
                }

                await collection.deleteOne({ channelId: channel.id });

                const requiredRole = config.ticket.ranga2;
                const overwrites = [
                    {
                        id: requiredRole,
                        allow: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages],
                    },
                    {
                        id: claimerId,
                        deny: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages],
                    },
                ];

                await channel.edit({
                    parent: "1331200049958621205",
                    permissionOverwrites: overwrites
                })

                const embed = new EmbedBuilder()
                    .setColor(config["Ogólne"].kolor)
                    .setTitle(' ')
                    .setDescription(`> To zgłoszenie zostało zwolnione przez **${interaction.user.username}**`);
                await channel.send({ embeds: [embed] });

                await interaction.reply({ content: "Ticket został zwolniony.", ephemeral: true });

            } catch (error) {
                console.error("Błąd przy zwalnianiu ticketu:", error);
                await interaction.reply({ content: "Wystąpił błąd przy zwalnianiu ticketu.", ephemeral: true });
            }
        } else {
            const embed = new EmbedBuilder()
                .setTitle(config["permisje"].title)
                .setDescription(config["permisje"].description)
                .setFooter({ text: config["permisje"].footer })
                .setColor(config["Ogólne"].kolor);
            interaction.reply({ embeds: [embed], ephemeral: true });
        }
    },
};