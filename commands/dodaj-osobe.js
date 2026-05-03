const { ApplicationCommandType } = require('discord.js');

module.exports = {
    name: 'dodaj-osobe',
    description: "Dodaje użytkownika z uprawnieniami do widzenia i pisania na kanale",
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: 'użytkownik',
            description: 'Wybierz użytkownika, którego chcesz dodać',
            type: 6,
            required: true,
        },
    ],
    run: async (client, interaction) => {
        const requiredRoleIDs = [config["permisje"].dostęp, config["permisje"].realizator];

        if (interaction.member.roles.cache.some(role => requiredRoleIDs.includes(role.id))) {
            const user = interaction.options.getUser('użytkownik');
            const channel = interaction.channel;

            try {
                await channel.permissionOverwrites.create(user.id, {
                    ViewChannel: true,
                    SendMessages: true,
                });

                await interaction.reply({
                    content: `Pomyślnie dodano użytkownika <@${user.id}> z uprawnieniami do widzenia i pisania na kanale.`,
                    ephemeral: true,
                });
            } catch (error) {
                console.error('Błąd przy dodawaniu uprawnień:', error);
                interaction.reply({
                    content: 'Wystąpił błąd przy próbie nadania uprawnień. Proszę spróbować ponownie później.',
                    ephemeral: true,
                });
            }
        } else {
            const embed = new EmbedBuilder()
                .setTitle(config["permisje"].title)
                .setDescription(config["permisje"].description)
                .setFooter({ text: (config["permisje"].footer) })
                .setColor(config["Ogólne"].kolor);
            interaction.reply({ embeds: [embed], ephemeral: true });
        }
    },
};
