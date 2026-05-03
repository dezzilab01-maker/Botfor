const { ApplicationCommandType, ModalBuilder, ActionRowBuilder, EmbedBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
const client = require('../main.js');

module.exports = {
    name: 'restock',
    description: "Wyślij wiadomość restock",
    type: ApplicationCommandType.ChatInput,
    run: async (client, interaction) => {
        const requiredRoleID = (config["permisje"].dostęp);

        if (interaction.member.roles.cache.some(role => role.id === requiredRoleID)) {

            const modal = new ModalBuilder()
                .setCustomId('RESTOCK')
                .setTitle('Wyślij wiadomość restock');

            const titleInput1 = new TextInputBuilder()
                .setCustomId('emotka_nazwa')
                .setLabel('EMOTKA I NAZWA:')
                .setValue('[ Emoji ] PRODUKT')
                .setPlaceholder('Wpisz odpowiedź')
                .setStyle(TextInputStyle.Short)
                .setRequired(true);
            const titleInput = new TextInputBuilder()
                .setCustomId('ilość')
                .setLabel('ILOŚĆ:')
                .setPlaceholder('Wpisz odpowiedź')
                .setStyle(TextInputStyle.Short)
                .setRequired(true);

            const descriptionInput = new TextInputBuilder()
                .setCustomId('czas')
                .setLabel('CZAS:')
                .setPlaceholder('Wpisz odpowiedź')
                .setStyle(TextInputStyle.Short)
                .setRequired(true);

            const footerInput = new TextInputBuilder()
                .setCustomId('cena')
                .setLabel('CENA:')
                .setPlaceholder('Wpisz stopkę')
                .setStyle(TextInputStyle.Short)
                .setRequired(true);

            const imageInput = new TextInputBuilder()
                .setCustomId('dodatkowe')
                .setLabel('DODATKOWE:')
                .setPlaceholder('Wpisz odpowiedź')
                .setStyle(TextInputStyle.Short)
                .setRequired(true);

            modal.addComponents(
                new ActionRowBuilder().addComponents(titleInput),
                new ActionRowBuilder().addComponents(titleInput1),
                new ActionRowBuilder().addComponents(descriptionInput),
                new ActionRowBuilder().addComponents(footerInput),
                new ActionRowBuilder().addComponents(imageInput),
            );

            interaction.showModal(modal);
        } else {
            const embed = new EmbedBuilder()
                .setTitle(config["permisje"].title)
                .setDescription(config["permisje"].description)
                .setFooter({ text: (config["permisje"].footer) })
                .setColor(config["Ogólne"].kolor)
            interaction.reply({ embeds: [embed], ephemeral: true });
        }
    }
};

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isModalSubmit()) return;

    if (interaction.customId === 'RESTOCK') {
        const ilość = interaction.fields.getTextInputValue('ilość');
        const emotka_nazwa = interaction.fields.getTextInputValue('emotka_nazwa');
        const czas = interaction.fields.getTextInputValue('czas');
        const cena = interaction.fields.getTextInputValue('cena');
        const dodatkowe = interaction.fields.getTextInputValue('dodatkowe');

        const embed = new EmbedBuilder()
            .setTitle(' ')
            .setDescription("**```🪐 DreamShop™ × RESTOCK!```**\n### " + emotka_nazwa + "\n> **<a:STOCK:1317569472562991255> Ilość: __" + ilość + "__**\n> **<:CALENDAR:1320079728559915162> Czas trwania: __" + czas + "__**\n> **<a:CENA:1320079753109311518> Cena: `" + cena + "`**\n\n- **<a:ALERT:1317539270466076783>  Dodatkowe informacje:**\n> **`" + dodatkowe + "`**")
            .setColor((config["Ogólne"].kolor))
            .setFooter({ text: ' ' })

        interaction.channel.send({ embeds: [embed] });
        interaction.reply({ content: `Wysłałeś wiadomość restock na kanał ${interaction.channel}`, ephemeral: true });
    }
});