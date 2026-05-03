const { ApplicationCommandType, EmbedBuilder } = require('discord.js');
const { connectToDatabase_methods } = require('../events/mongodbSystem.js');

module.exports = {
    name: 'dodaj-platnosci',
    description: 'Dodaje metodę płatności dla użytkownika.',
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: 'metoda',
            description: 'Wybierz metodę płatności, którą chcesz dodać',
            type: 3,
            required: true,
            choices: [
                { name: 'Blik', value: 'blik' },
                { name: 'PayPal', value: 'paypal' },
                { name: 'Litecoin (LTC)', value: 'ltc' },
                { name: 'Skrill', value: 'skrill' },
                { name: 'ZEN', value: 'zen' },
            ],
        },
        {
            name: 'dane',
            description: 'Podaj dane związane z wybraną metodą płatności (np. numer telefonu, adres e-mail, itp.)',
            type: 3,
            required: true,
        },
    ],
    run: async (client, interaction) => {
        const requiredRoleIDs = [config["permisje"].dostęp, config["permisje"].realizator];

        if (interaction.member.roles.cache.some(role => requiredRoleIDs.includes(role.id))) {
            const metoda = interaction.options.getString('metoda');
            const dane = interaction.options.getString('dane');
            const userId = interaction.user.id;

            try {
                const collection = await connectToDatabase_methods();

                const userData = await collection.findOne({ userId: userId });

                if (userData) {
                    const updatedMethods = { ...userData.methods, [metoda]: dane };
                    await collection.updateOne(
                        { userId: userId },
                        { $set: { methods: updatedMethods } }
                    );
                } else {
                    await collection.insertOne({
                        userId: userId,
                        methods: { [metoda]: dane },
                    });
                }

                await interaction.reply({
                    content: `Pomyślnie dodano metodę płatności **${metoda}** z danymi: **${dane}**.`,
                    ephemeral: true,
                });
            } catch (error) {
                console.error('Błąd przy dodawaniu metody płatności:', error);
                await interaction.reply({
                    content: 'Wystąpił błąd podczas dodawania metody płatności. Spróbuj ponownie później.',
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
