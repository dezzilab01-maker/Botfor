const { ApplicationCommandType, EmbedBuilder, WebhookClient } = require('discord.js');
const config = require('../config.js');

module.exports = {
    name: 'opinia',
    description: "Dodaj opinię o usłudze",
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: 'czas_oczekiwania',
            description: 'Oceń czas oczekiwania (1-5)',
            type: 4,
            choices: [
                { name: '⭐', value: 1 },
                { name: '⭐⭐', value: 2 },
                { name: '⭐⭐⭐', value: 3 },
                { name: '⭐⭐⭐⭐', value: 4 },
                { name: '⭐⭐⭐⭐⭐', value: 5 },
            ],
            required: true,
        },
        {
            name: 'jakosc_produktu',
            description: 'Oceń jakosc_produktu (1-5)',
            type: 4,
            choices: [
                { name: '⭐', value: 1 },
                { name: '⭐⭐', value: 2 },
                { name: '⭐⭐⭐', value: 3 },
                { name: '⭐⭐⭐⭐', value: 4 },
                { name: '⭐⭐⭐⭐⭐', value: 5 },
            ],
            required: true,
        },
        {
            name: 'wykonanie_zamowienia',
            description: 'Oceń wykonanie zamowienia (1-5)',
            type: 4,
            choices: [
                { name: '⭐', value: 1 },
                { name: '⭐⭐', value: 2 },
                { name: '⭐⭐⭐', value: 3 },
                { name: '⭐⭐⭐⭐', value: 4 },
                { name: '⭐⭐⭐⭐⭐', value: 5 },
            ],
            required: true,
        },
        {
            name: 'opinia',
            description: 'Dodaj swoją opinię',
            type: 3,
            required: true,
        },
    ],
    run: async (client, interaction) => {
        const czasRealizacji = interaction.options.getInteger('czas_oczekiwania');
        const przebiegWymiany = interaction.options.getInteger('jakosc_produktu');
        const realizacja = interaction.options.getInteger('wykonanie_zamowienia');
        const opinia = interaction.options.getString('opinia');

        const requiredRoleID = config["opinie"].dostęp;

        if (interaction.member.roles.cache.some(role => role.id === requiredRoleID)) {
            const webhookURL = config["opinie"].webhook;
            const webhookClient = new WebhookClient({ url: webhookURL });

            if (!webhookClient) {
                return interaction.reply({
                    content: 'Nie można połączyć się z webhookiem! Sprawdź konfigurację.',
                    ephemeral: true,
                });
            }

            const gwiazdki = (ocena) => `\`\`${'⭐'.repeat(ocena)}\`\``;
            const embed = new EmbedBuilder()
                .setTitle(config["opinie"].title)
                .setDescription(
                    config["opinie"].description
                        .replace("{member}", interaction.user)
                        .replace("{treść}", opinia)
                        .replace("{gwiazdki_czas}", gwiazdki(czasRealizacji))
                        .replace("{gwiazdki_transakcja}", gwiazdki(przebiegWymiany))
                        .replace("{gwiazdki_realizacja}", gwiazdki(realizacja))
                )
                .setThumbnail(interaction.user.displayAvatarURL())
                .setColor(config["Ogólne"].kolor)
                .setImage(config["opinie"].image)
                .setFooter({
                    text: config["opinie"].footer.replace("{member}", interaction.user.username),
                    iconURL: interaction.user.displayAvatarURL(),
                })
                .setTimestamp();

            try {
                await webhookClient.send({
                    username: config["opinie"].username || interaction.user.username,
                    avatarURL: config["opinie"].avatarURL || interaction.user.displayAvatarURL(),
                    embeds: [embed],
                });

                await interaction.reply({
                    content: 'Dziękujemy za przesłanie opinii! Twoja opinia została opublikowana przez webhook.',
                    ephemeral: true,
                });
            } catch (error) {
                console.error('Błąd przy wysyłaniu opinii przez webhook:', error);
                interaction.reply({
                    content: 'Wystąpił błąd przy wysyłaniu opinii. Proszę spróbować ponownie później.',
                    ephemeral: true,
                });
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
