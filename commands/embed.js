const { ApplicationCommandType, ModalBuilder, ActionRowBuilder, EmbedBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
const client = require('../main.js');

module.exports = {
    name: 'embed',
    description: "Wyślij wiadomość embed",
    type: ApplicationCommandType.ChatInput,
    run: async (client, interaction) => {
        const requiredRoleID = config["permisje"].dostęp;

        if (interaction.member.roles.cache.some(role => role.id === requiredRoleID)) {
            const modal = new ModalBuilder()
                .setCustomId('EMBED')
                .setTitle('Wyślij wiadomość embed');

            const titleInput = new TextInputBuilder()
                .setCustomId('title')
                .setLabel('Title')
                .setPlaceholder('Wpisz tytuł')
                .setStyle(TextInputStyle.Short)
                .setRequired(false);

            const descriptionInput = new TextInputBuilder()
                .setCustomId('description')
                .setLabel('Description')
                .setPlaceholder('Wpisz opis')
                .setStyle(TextInputStyle.Paragraph)
                .setRequired(true);

            const colorInput = new TextInputBuilder()
                .setCustomId('color')
                .setLabel('Color')
                .setPlaceholder('Wpisz kolor (np. #ffffff)')
                .setValue(config["Ogólne"].kolor || '#FFFFFF')
                .setStyle(TextInputStyle.Short)
                .setRequired(true);

            const footerInput = new TextInputBuilder()
                .setCustomId('footer')
                .setLabel('Footer')
                .setPlaceholder('Wpisz stopkę')
                .setStyle(TextInputStyle.Short)
                .setRequired(false);

            const imageInput = new TextInputBuilder()
                .setCustomId('image')
                .setLabel('Image')
                .setPlaceholder('Wpisz adres URL obrazka')
                .setStyle(TextInputStyle.Short)
                .setRequired(false);

            modal.addComponents(
                new ActionRowBuilder().addComponents(titleInput),
                new ActionRowBuilder().addComponents(descriptionInput),
                new ActionRowBuilder().addComponents(colorInput),
                new ActionRowBuilder().addComponents(footerInput),
                new ActionRowBuilder().addComponents(imageInput),
            );

            interaction.showModal(modal);
        } else {
            const embed = new EmbedBuilder()
                .setTitle(config["permisje"].title || 'Brak tytułu')
                .setDescription(config["permisje"].description || 'Brak opisu')
                .setFooter({ text: config["permisje"].footer || '' })
                .setColor(config["Ogólne"].kolor || '#FFFFFF');

            interaction.reply({ embeds: [embed], ephemeral: true });
        }
    }
};

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isModalSubmit()) return;

    if (interaction.customId === 'EMBED') {
        const title = interaction.fields.getTextInputValue('title') || null;
        const description = interaction.fields.getTextInputValue('description') || 'Brak opisu';
        const color = interaction.fields.getTextInputValue('color') || '#FFFFFF'; // Domyślny kolor
        const footer = interaction.fields.getTextInputValue('footer') || null;
        const image = interaction.fields.getTextInputValue('image') || null;

        const embed = new EmbedBuilder()
            .setDescription(description)
            .setColor(color);

        if (title && title.trim().length > 0) {
            embed.setTitle(title);
        }

        if (footer && footer.trim().length > 0) {
            embed.setFooter({ text: footer });
        }

        if (image && image.trim().length > 0) {
            embed.setImage(image);
        }

        interaction.channel.send({ embeds: [embed] });
        interaction.reply({ content: `Wysłałeś wiadomość embed na kanał ${interaction.channel}`, ephemeral: true });
    }
});
