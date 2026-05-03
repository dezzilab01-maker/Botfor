const { ApplicationCommandType } = require('discord.js');

module.exports = {
    name: 'emit-event',
    description: "Wywołuje event",
    category: "admin",
    options: [
        {
            name: "event",
            description: "Nazwa eventu",
            type: 3,
            choices: [
                {
                    name: "guildMemberUpdate",
                    value: "boost"
                },
                {
                    name: "guildMemberAdd",
                    value: "join"
                }
            ],
            required: true,
        },
    ],

    run: async (client, interaction) => {
        if(!interaction.member.permissions.has("Administrator")) return interaction.reply({ content: "Nie masz permisji do użycia tej komendy", ephemeral: true })
        const event = interaction.options.getString("event")

        switch(event) {
            case "boost":
                client.emit("guildMemberUpdate", interaction.member, interaction.member)
                interaction.reply({ content: "Wysłano event!", ephemeral: true })
                break;
            case "join":
                client.emit("guildMemberAdd", interaction.member)
                interaction.reply({ content: "Wysłano event!", ephemeral: true })
                break;
            default:
                interaction.reply({ content: "Nie znaleziono eventu!", ephemeral: true })
                break;
        }
    }
};