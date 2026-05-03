const { ApplicationCommandType, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const config = require('../config.js');

module.exports = {
    name: 'zamknij',
    description: "Wysyła przyciski do użytkownika",
    type: ApplicationCommandType.ChatInput,
    run: async (client, interaction) => {

        const requiredRoleIDs = [config["permisje"].dostęp, config["permisje"].seller];

        if (interaction.member.roles.cache.some(role => requiredRoleIDs.includes(role.id))) {

            const buttons = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setLabel(config["ustawienia_zamowienie_close"].label1)
                        .setEmoji(config["ustawienia_zamowienie_close"].emoji1)
                        .setStyle("Secondary")
                        .setCustomId("USTAWIENIA_ZAMOWIENIE_CLOSE_YES")
                )
                .addComponents(
                    new ButtonBuilder()
                        .setLabel(config["ustawienia_zamowienie_close"].label2)
                        .setEmoji(config["ustawienia_zamowienie_close"].emoji2)
                        .setStyle("Secondary")
                        .setCustomId("USTAWIENIA_ZAMOWIENIE_CLOSE_NO")
                );

            return interaction.reply({
                components: [buttons],
                ephemeral: true
            });
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
