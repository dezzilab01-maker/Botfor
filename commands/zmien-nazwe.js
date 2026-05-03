const { ApplicationCommandType, ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
const client = require('../main.js');

module.exports = {
    name: 'zmien-nazwe',
    description: "Zmienia nazwę kanału",
    type: ApplicationCommandType.ChatInput,
    run: async (client, interaction) => {
       const requiredRoleIDs = [config["permisje"].dostęp, config["permisje"].realizator];

        if (interaction.member.roles.cache.some(role => requiredRoleIDs.includes(role.id))) {

            const modal = new ModalBuilder()
                .setCustomId('ZMIEN_NAZWE')
                .setTitle('Zmiana nazwy kanału');

            const nameInput = new TextInputBuilder()
                .setCustomId('newName')
                .setLabel('Nowa nazwa kanału')
                .setPlaceholder('Wpisz nową nazwę kanału')
                .setStyle(TextInputStyle.Short)
                .setRequired(true);

            modal.addComponents(
                new ActionRowBuilder().addComponents(nameInput)
            );

            interaction.showModal(modal);
        } else {
            const embed = new EmbedBuilder()
                .setTitle(config["permisje"].title)
                .setDescription(config["permisje"].description)
                .setFooter({ text: (config["permisje"].footer) })
                .setColor(config["Ogólne"].kolor);
            interaction.reply({ embeds: [embed], ephemeral: true });
        }
    }
};

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isModalSubmit()) return;

    if (interaction.customId === 'ZMIEN_NAZWE') {
        const newName = interaction.fields.getTextInputValue('newName');

        try {
            await interaction.channel.setName(newName);
            interaction.reply({ content: `Nazwa kanału została zmieniona na: ${newName}`, ephemeral: true });
        } catch (error) {
            console.error('Błąd przy zmianie nazwy kanału:', error);
            interaction.reply({ content: 'Nie udało się zmienić nazwy kanału. Proszę spróbować ponownie później.', ephemeral: true });
        }
    }
});
