const {
    ApplicationCommandType,
    ModalBuilder,
    ActionRowBuilder,
    EmbedBuilder,
    TextInputBuilder,
    TextInputStyle
} = require('discord.js');
const client = require('../main.js');
const config = require('../config.js'); // Upewnij się, że plik config.js istnieje i zawiera odpowiednie dane

module.exports = {
    name: 'restock-gry',
    description: "Wyślij wiadomość restock-gry",
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: 'gra',
            description: 'Wybierz grę, dla której chcesz wysłać restock',
            type: 3, // Typ: String
            required: true,
            choices: [
                { name: 'Steam', value: 'STEAM' },
                { name: 'Fortnite', value: 'FORTNITE' },
                { name: 'Valorant', value: 'VALORANT' },
                { name: 'Brawl Stars', value: 'BRAWL_STARS' },
            ],
        },
    ],

    run: async (client, interaction) => {
        const requiredRoleID = config["permisje"].dostęp;

        if (!interaction.member.roles.cache.some(role => role.id === requiredRoleID)) {
            const embed = new EmbedBuilder()
                .setTitle(config["permisje"].title)
                .setDescription(config["permisje"].description)
                .setFooter({ text: config["permisje"].footer })
                .setColor(config["Ogólne"].kolor);

            return interaction.reply({ embeds: [embed], ephemeral: true });
        }

        const selectedGame = interaction.options.getString('gra');

        const modal = new ModalBuilder()
            .setCustomId(`RESTOCK-GRY-${selectedGame}`)
            .setTitle(`Wyślij wiadomość restock: ${selectedGame}`);

        const informacjeInput = new TextInputBuilder()
            .setCustomId('informacje')
            .setLabel('INFORMACJE:')
            .setPlaceholder('Wpisz informacje')
            .setStyle(TextInputStyle.Short)
            .setRequired(true);

        const cenaInput = new TextInputBuilder()
            .setCustomId('cena')
            .setLabel('CENA:')
            .setPlaceholder('Wpisz cene')
            .setStyle(TextInputStyle.Short)
            .setRequired(true);

        const obrazInput = new TextInputBuilder()
            .setCustomId('obraz')
            .setLabel('LINK DO OBRAZU (opcjonalne):')
            .setPlaceholder('Wprowadź URL obrazu (jeśli dotyczy)')
            .setStyle(TextInputStyle.Short)
            .setRequired(false);

        modal.addComponents(
            new ActionRowBuilder().addComponents(informacjeInput),
            new ActionRowBuilder().addComponents(cenaInput),
            new ActionRowBuilder().addComponents(obrazInput),
        );

        interaction.showModal(modal);
    },
};

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isModalSubmit()) return;

    const customIdParts = interaction.customId.split('-');
    if (customIdParts[0] !== 'RESTOCK' || customIdParts[1] !== 'GRY' || !customIdParts[2]) return;

    const game = customIdParts[2]; // Prawidłowo przypisujemy grę jako trzeci element

    const cena = interaction.fields.getTextInputValue('cena');
    const informacje = interaction.fields.getTextInputValue('informacje');
    const obraz = interaction.fields.getTextInputValue('obraz'); // Pobierz wartość linku do obrazu

    let embed;

    switch (game) {
        case 'STEAM':
            embed = new EmbedBuilder()
                .setTitle(' ')
                .setDescription("**```🪐 DreamShop™ × RESTOCK STEAM!```**\n### [ <:STEAM:1320094638387892325> ] KONTO STEAM\n**<a:ALERT:1317539270466076783> Informacje o koncie:**\n > **`" + informacje + "`**\n\n> **<a:CENA:1320079753109311518> Cena: `" + cena + " PLN`**")
                .setColor(config["Ogólne"].kolor);
            break;
        case 'FORTNITE':
            embed = new EmbedBuilder()
                .setTitle(' ')
                .setDescription("**```🪐 DreamShop™ × RESTOCK FORTNITE!```**\n### [ <:FORTNITE:1317554396879519854> ] KONTO FORTNITE\n**<a:ALERT:1317539270466076783> Informacje o koncie:**\n > **`" + informacje + "`**\n\n> **<a:CENA:1320079753109311518> Cena: `" + cena + " PLN`**")
                .setColor(config["Ogólne"].kolor);
            break;
        case 'VALORANT':
            embed = new EmbedBuilder()
                .setTitle(' ')
                .setDescription("**```🪐 DreamShop™ × RESTOCK VALORANT!```**\n### [ <:VALORANT:1317569498232127619> ] KONTO VALORANT\n**<a:ALERT:1317539270466076783> Informacje o koncie:**\n > **`" + informacje + "`**\n\n> **<a:CENA:1320079753109311518> Cena: `" + cena + " PLN`**")
                .setColor(config["Ogólne"].kolor);
            break;
        case 'BRAWL_STARS':
            embed = new EmbedBuilder()
                .setTitle(' ')
                .setDescription("**```🪐 DreamShop™ × RESTOCK BRAWL STARS!```**\n### [ <:BRAWLSTARS:1317539290208665710> ] KONTO BRAWL STARS\n**<a:ALERT:1317539270466076783> Informacje o koncie:**\n > **`" + informacje + "`**\n\n> **<a:CENA:1320079753109311518> Cena: `" + cena + " PLN`**")
                .setColor(config["Ogólne"].kolor);
            break;
        default:
            return interaction.reply({ content: 'Nieznana gra.', ephemeral: true });
    }

    if (obraz) {
        embed.setImage(obraz); // Ustawienie obrazu, jeśli dostarczono link
    }

    interaction.channel.send({ embeds: [embed] });
    interaction.reply({ content: `Wysłałeś wiadomość restock dla gry ${game} na kanał ${interaction.channel}`, ephemeral: true });
});
