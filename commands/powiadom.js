const { ApplicationCommandType, EmbedBuilder } = require('discord.js');
const config = require('../config.js');

module.exports = {
    name: 'powiadom',
    description: "Wysyła powiadomienie do użytkownika z ID w temacie kanału",
    type: ApplicationCommandType.ChatInput,
    run: async (client, interaction) => {
        const requiredRoleIDs = [config["permisje"].dostęp, config["permisje"].seller];

        if (interaction.member.roles.cache.some(role => requiredRoleIDs.includes(role.id))) {
            const channel = interaction.channel;
            const channelTopic = channel.topic;

            if (!channelTopic) {
                return interaction.reply({ content: "Kanał nie ma opisanego tematu.", ephemeral: true });
            }

            const userId = channelTopic.split('\n')[0].trim();
            const userIdMatch = userId.match(/\d+/);

            if (!userIdMatch) {
                return interaction.reply({ content: "Nie znaleziono ID użytkownika w opisie kanału.", ephemeral: true });
            }

            const userIdFound = userIdMatch[0];

            try {
                const user = await client.users.fetch(userIdFound);

                if (user) {
                    const embed = new EmbedBuilder()
                        .setColor(config["Ogólne"].kolor)
                        .setTitle(' ')
                        .setDescription("\`\`\`📌 DreamShop™ × JESTEŚ WZYWANY\`\`\`\n- \`❗\` <@" + user.id + "> **jesteś wzywany na swojego ticketa!**\n- \`⏰\` **Czas na odpowiedź to __4 godziny__ w przeciwnym razie ticket zostanie usunięty!**\n## - \`📌\` **KANAŁ:** <#" + interaction.channel.id + ">",);

                    await user.send({ embeds: [embed] });
                    await interaction.reply({ content: "Wysłano powiadomienie do użytkownika.", ephemeral: true });
                } else {
                    await interaction.reply({ content: "Nie udało się znaleźć użytkownika o tym ID.", ephemeral: true });
                }
            } catch (error) {
                console.error("Błąd przy wysyłaniu wiadomości do użytkownika:", error);
                await interaction.reply({ content: "Wystąpił błąd przy wysyłaniu wiadomości do użytkownika.", ephemeral: true });
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
