const { ApplicationCommandType, ActionRowBuilder, ButtonBuilder, EmbedBuilder, StringSelectMenuBuilder, ButtonStyle } = require('discord.js');
const cenniki = require('../cenniki.js');

module.exports = {
    name: 'cenniki',
    description: "Wysyłanie wiadomości związanych z panelem",
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: 'type',
            description: 'Wprowadz id wiadomości która chcesz wysłać.',
            type: 3,
            required: true,
            autocomplete: true
        }
    ],
    autocomplete: (interaction, choices) => {
        const data = ['n1tr0', 'm3mbers', 'konta_discord', 'gry', 'konta', 'social-b00st', 'inne_uslugi', 'szkola', 'metody_dostawcy'];
        data.forEach(type => {
            choices.push({
                name: `${type}`,
                value: `${type}`
            });
        });
        interaction.respond(choices).catch(console.error);
    },
    run: async (client, interaction) => {
        const requiredRoleID = (config["permisje"].dostęp);

        if (interaction.member.roles.cache.some(role => role.id === requiredRoleID)) {

            const type = interaction.options.get('type').value;
            if (type === "n1tr0") {

                const embed = new EmbedBuilder()
                    .setColor(config["Ogólne"].kolor)
                    .setTitle(cenniki["cennik1"].title)
                    .setThumbnail(interaction.guild.iconURL())
                    .setDescription(cenniki["cennik1"].description)
                    .setImage(cenniki["cennik1"].image)
                    .setFooter({ text: (cenniki["cennik1"].footer) })


                const row = new ActionRowBuilder()
                    .addComponents(
                        new StringSelectMenuBuilder()
                            .setCustomId("CENNIK1_SELECTED")
                            .setPlaceholder(cenniki["cennik1"].placeholder)
                            .addOptions([
                                {
                                    label: (cenniki["cennik1"].label1),
                                    description: (cenniki["cennik1"].description1),
                                    emoji: (cenniki["cennik1"].emoji1),
                                    value: '1',
                                },
                                {
                                    label: (cenniki["cennik1"].label2),
                                    description: (cenniki["cennik1"].description2),
                                    emoji: (cenniki["cennik1"].emoji2),
                                    value: '2',
                                },
                                {
                                    label: (cenniki["cennik1"].label3),
                                    description: (cenniki["cennik1"].description3),
                                    emoji: (cenniki["cennik1"].emoji3),
                                    value: '3',
                                },
                                {
                                    label: (cenniki["cennik1"].label4),
                                    description: (cenniki["cennik1"].description4),
                                    emoji: (cenniki["cennik1"].emoji4),
                                    value: '4',
                                },
                            ])

                    )
                interaction.channel.send({ embeds: [embed], components: [row], ephemeral: true });
                interaction.reply({ content: "Wysłałeś wiadomość o id `" + type + "` na kanał <#" + interaction.channel.id + ">", ephemeral: true })
            }
            if (type === "m3mbers") {

                const embed = new EmbedBuilder()
                    .setColor(config["Ogólne"].kolor)
                    .setTitle(cenniki["cennik2"].title)
                    .setThumbnail(interaction.guild.iconURL())
                    .setDescription(cenniki["cennik2"].description)
                    .setImage(cenniki["cennik2"].image)
                    .setFooter({ text: (cenniki["cennik2"].footer) })


                const row = new ActionRowBuilder()
                    .addComponents(
                        new StringSelectMenuBuilder()
                            .setCustomId("CENNIK2_SELECTED")
                            .setPlaceholder(cenniki["cennik2"].placeholder)
                            .addOptions([
                                {
                                    label: (cenniki["cennik2"].label1),
                                    description: (cenniki["cennik2"].description1),
                                    emoji: (cenniki["cennik2"].emoji1),
                                    value: '1',
                                },
                                {
                                    label: (cenniki["cennik2"].label2),
                                    description: (cenniki["cennik2"].description2),
                                    emoji: (cenniki["cennik2"].emoji2),
                                    value: '2',
                                },
                                {
                                    label: (cenniki["cennik2"].label3),
                                    description: (cenniki["cennik2"].description3),
                                    emoji: (cenniki["cennik2"].emoji3),
                                    value: '3',
                                },
                                {
                                    label: (cenniki["cennik2"].label4),
                                    description: (cenniki["cennik2"].description4),
                                    emoji: (cenniki["cennik2"].emoji4),
                                    value: '4',
                                },
                                {
                                    label: (cenniki["cennik2"].label5),
                                    description: (cenniki["cennik2"].description5),
                                    emoji: (cenniki["cennik2"].emoji5),
                                    value: '5',
                                },
                            ])

                    )
                interaction.channel.send({ embeds: [embed], components: [row], ephemeral: true });
                interaction.reply({ content: "Wysłałeś wiadomość o id `" + type + "` na kanał <#" + interaction.channel.id + ">", ephemeral: true })
            }
            if (type === "konta_discord") {

                const embed = new EmbedBuilder()
                    .setColor(config["Ogólne"].kolor)
                    .setTitle(cenniki["cennik3"].title)
                    .setThumbnail(interaction.guild.iconURL())
                    .setDescription(cenniki["cennik3"].description)
                    .setImage(cenniki["cennik3"].image)
                    .setFooter({ text: (cenniki["cennik3"].footer) })


                const row = new ActionRowBuilder()
                    .addComponents(
                        new StringSelectMenuBuilder()
                            .setCustomId("CENNIK3_SELECTED")
                            .setPlaceholder(cenniki["cennik3"].placeholder)
                            .addOptions([
                                {
                                    label: (cenniki["cennik3"].label1),
                                    description: (cenniki["cennik3"].description1),
                                    emoji: (cenniki["cennik3"].emoji1),
                                    value: '1',
                                },
                                {
                                    label: (cenniki["cennik3"].label2),
                                    description: (cenniki["cennik3"].description2),
                                    emoji: (cenniki["cennik3"].emoji2),
                                    value: '2',
                                },
                                {
                                    label: (cenniki["cennik3"].label3),
                                    description: (cenniki["cennik3"].description3),
                                    emoji: (cenniki["cennik3"].emoji3),
                                    value: '3',
                                },
                            ])

                    )
                interaction.channel.send({ embeds: [embed], components: [row], ephemeral: true });
                interaction.reply({ content: "Wysłałeś wiadomość o id `" + type + "` na kanał <#" + interaction.channel.id + ">", ephemeral: true })
            }
            if (type === "gry") {

                const embed = new EmbedBuilder()
                    .setColor(config["Ogólne"].kolor)
                    .setTitle(cenniki["cennik4"].title)
                    .setThumbnail(interaction.guild.iconURL())
                    .setDescription(cenniki["cennik4"].description)
                    .setImage(cenniki["cennik4"].image)
                    .setFooter({ text: (cenniki["cennik4"].footer) })


                const row = new ActionRowBuilder()
                    .addComponents(
                        new StringSelectMenuBuilder()
                            .setCustomId("CENNIK4_SELECTED")
                            .setPlaceholder(cenniki["cennik4"].placeholder)
                            .addOptions([
                                {
                                    label: (cenniki["cennik4"].label1),
                                    description: (cenniki["cennik4"].description1),
                                    emoji: (cenniki["cennik4"].emoji1),
                                    value: '1',
                                },
                                {
                                    label: (cenniki["cennik4"].label2),
                                    description: (cenniki["cennik4"].description2),
                                    emoji: (cenniki["cennik4"].emoji2),
                                    value: '2',
                                },
                                {
                                    label: (cenniki["cennik4"].label3),
                                    description: (cenniki["cennik4"].description3),
                                    emoji: (cenniki["cennik4"].emoji3),
                                    value: '3',
                                },
                                {
                                    label: (cenniki["cennik4"].label4),
                                    description: (cenniki["cennik4"].description4),
                                    emoji: (cenniki["cennik4"].emoji4),
                                    value: '4',
                                },
                            ])

                    )
                interaction.channel.send({ embeds: [embed], components: [row], ephemeral: true });
                interaction.reply({ content: "Wysłałeś wiadomość o id `" + type + "` na kanał <#" + interaction.channel.id + ">", ephemeral: true })
            }
            if (type === "konta") {

                const embed = new EmbedBuilder()
                    .setColor(config["Ogólne"].kolor)
                    .setTitle(cenniki["cennik5"].title)
                    .setThumbnail(interaction.guild.iconURL())
                    .setDescription(cenniki["cennik5"].description)
                    .setImage(cenniki["cennik5"].image)
                    .setFooter({ text: (cenniki["cennik5"].footer) })


                const row = new ActionRowBuilder()
                    .addComponents(
                        new StringSelectMenuBuilder()
                            .setCustomId("CENNIK5_SELECTED")
                            .setPlaceholder(cenniki["cennik5"].placeholder)
                            .addOptions([
                                {
                                    label: (cenniki["cennik5"].label1),
                                    description: (cenniki["cennik5"].description1),
                                    emoji: (cenniki["cennik5"].emoji1),
                                    value: '1',
                                },
                                {
                                    label: (cenniki["cennik5"].label2),
                                    description: (cenniki["cennik5"].description2),
                                    emoji: (cenniki["cennik5"].emoji2),
                                    value: '2',
                                },
                                {
                                    label: (cenniki["cennik5"].label3),
                                    description: (cenniki["cennik5"].description3),
                                    emoji: (cenniki["cennik5"].emoji3),
                                    value: '3',
                                },
                                {
                                    label: (cenniki["cennik5"].label4),
                                    description: (cenniki["cennik5"].description4),
                                    emoji: (cenniki["cennik5"].emoji4),
                                    value: '4',
                                },
                                {
                                    label: (cenniki["cennik5"].label5),
                                    description: (cenniki["cennik5"].description5),
                                    emoji: (cenniki["cennik5"].emoji5),
                                    value: '5',
                                },
                            ])

                    )
                interaction.channel.send({ embeds: [embed], components: [row], ephemeral: true });
                interaction.reply({ content: "Wysłałeś wiadomość o id `" + type + "` na kanał <#" + interaction.channel.id + ">", ephemeral: true })
            }
            if (type === "social-b00st") {

                const embed = new EmbedBuilder()
                    .setColor(config["Ogólne"].kolor)
                    .setTitle(cenniki["cennik6"].title)
                    .setThumbnail(interaction.guild.iconURL())
                    .setDescription(cenniki["cennik6"].description)
                    .setImage(cenniki["cennik6"].image)
                    .setFooter({ text: (cenniki["cennik6"].footer) })


                const row = new ActionRowBuilder()
                    .addComponents(
                        new StringSelectMenuBuilder()
                            .setCustomId("CENNIK6_SELECTED")
                            .setPlaceholder(cenniki["cennik6"].placeholder)
                            .addOptions([
                                {
                                    label: (cenniki["cennik6"].label1),
                                    description: (cenniki["cennik6"].description1),
                                    emoji: (cenniki["cennik6"].emoji1),
                                    value: '1',
                                },
                                {
                                    label: (cenniki["cennik6"].label2),
                                    description: (cenniki["cennik6"].description2),
                                    emoji: (cenniki["cennik6"].emoji2),
                                    value: '2',
                                },
                                {
                                    label: (cenniki["cennik6"].label3),
                                    description: (cenniki["cennik6"].description3),
                                    emoji: (cenniki["cennik6"].emoji3),
                                    value: '3',
                                },
                                {
                                    label: (cenniki["cennik6"].label4),
                                    description: (cenniki["cennik6"].description4),
                                    emoji: (cenniki["cennik6"].emoji4),
                                    value: '4',
                                },
                                {
                                    label: (cenniki["cennik6"].label5),
                                    description: (cenniki["cennik6"].description5),
                                    emoji: (cenniki["cennik6"].emoji5),
                                    value: '5',
                                },
                                {
                                    label: (cenniki["cennik6"].label6),
                                    description: (cenniki["cennik6"].description6),
                                    emoji: (cenniki["cennik6"].emoji6),
                                    value: '6',
                                },
                                {
                                    label: (cenniki["cennik6"].label7),
                                    description: (cenniki["cennik6"].description7),
                                    emoji: (cenniki["cennik6"].emoji7),
                                    value: '7',
                                },
                                {
                                    label: (cenniki["cennik6"].label8),
                                    description: (cenniki["cennik6"].description8),
                                    emoji: (cenniki["cennik6"].emoji8),
                                    value: '8',
                                },
                                {
                                    label: (cenniki["cennik6"].label9),
                                    description: (cenniki["cennik6"].description9),
                                    emoji: (cenniki["cennik6"].emoji9),
                                    value: '9',
                                },
                            ])

                    )
                interaction.channel.send({ embeds: [embed], components: [row], ephemeral: true });
                interaction.reply({ content: "Wysłałeś wiadomość o id `" + type + "` na kanał <#" + interaction.channel.id + ">", ephemeral: true })
            }
            if (type === "inne_uslugi") {

                const embed = new EmbedBuilder()
                    .setColor(config["Ogólne"].kolor)
                    .setTitle(cenniki["cennik7"].title)
                    .setThumbnail(interaction.guild.iconURL())
                    .setDescription(cenniki["cennik7"].description)
                    .setImage(cenniki["cennik7"].image)
                    .setFooter({ text: (cenniki["cennik7"].footer) })


                const row = new ActionRowBuilder()
                    .addComponents(
                        new StringSelectMenuBuilder()
                            .setCustomId("CENNIK7_SELECTED")
                            .setPlaceholder(cenniki["cennik7"].placeholder)
                            .addOptions([
                                {
                                    label: (cenniki["cennik7"].label1),
                                    description: (cenniki["cennik7"].description1),
                                    emoji: (cenniki["cennik7"].emoji1),
                                    value: '1',
                                },
                                {
                                    label: (cenniki["cennik7"].label2),
                                    description: (cenniki["cennik7"].description2),
                                    emoji: (cenniki["cennik7"].emoji2),
                                    value: '2',
                                },
                                {
                                    label: (cenniki["cennik7"].label3),
                                    description: (cenniki["cennik7"].description3),
                                    emoji: (cenniki["cennik7"].emoji3),
                                    value: '3',
                                },
                            ])

                    )
                interaction.channel.send({ embeds: [embed], components: [row], ephemeral: true });
                interaction.reply({ content: "Wysłałeś wiadomość o id `" + type + "` na kanał <#" + interaction.channel.id + ">", ephemeral: true })
            }
            if (type === "szkola") {

                const embed = new EmbedBuilder()
                    .setColor(config["Ogólne"].kolor)
                    .setTitle(cenniki["cennik8"].title)
                    .setThumbnail(interaction.guild.iconURL())
                    .setDescription(cenniki["cennik8"].description)
                    .setImage(cenniki["cennik8"].image)
                    .setFooter({ text: (cenniki["cennik8"].footer) })


                const row = new ActionRowBuilder()
                    .addComponents(
                        new StringSelectMenuBuilder()
                            .setCustomId("CENNIK8_SELECTED")
                            .setPlaceholder(cenniki["cennik8"].placeholder)
                            .addOptions([
                                {
                                    label: (cenniki["cennik8"].label1),
                                    description: (cenniki["cennik8"].description1),
                                    emoji: (cenniki["cennik8"].emoji1),
                                    value: '1',
                                },
                                {
                                    label: (cenniki["cennik8"].label2),
                                    description: (cenniki["cennik8"].description2),
                                    emoji: (cenniki["cennik8"].emoji2),
                                    value: '2',
                                },
                                {
                                    label: (cenniki["cennik8"].label3),
                                    description: (cenniki["cennik8"].description3),
                                    emoji: (cenniki["cennik8"].emoji3),
                                    value: '3',
                                },
                                {
                                    label: (cenniki["cennik8"].label4),
                                    description: (cenniki["cennik8"].description4),
                                    emoji: (cenniki["cennik8"].emoji4),
                                    value: '4',
                                },
                                {
                                    label: (cenniki["cennik8"].label5),
                                    description: (cenniki["cennik8"].description5),
                                    emoji: (cenniki["cennik8"].emoji5),
                                    value: '5',
                                },
                            ])

                    )
                interaction.channel.send({ embeds: [embed], components: [row], ephemeral: true });
                interaction.reply({ content: "Wysłałeś wiadomość o id `" + type + "` na kanał <#" + interaction.channel.id + ">", ephemeral: true })
            }
            if (type === "metody_dostawcy") {

                const embed = new EmbedBuilder()
                    .setColor(config["Ogólne"].kolor)
                    .setTitle(cenniki["cennik9"].title)
                    .setThumbnail(interaction.guild.iconURL())
                    .setDescription(cenniki["cennik9"].description)
                    .setImage(cenniki["cennik9"].image)
                    .setFooter({ text: (cenniki["cennik9"].footer) })


                const row = new ActionRowBuilder()
                    .addComponents(
                        new StringSelectMenuBuilder()
                            .setCustomId("CENNIK9_SELECTED")
                            .setPlaceholder(cenniki["cennik9"].placeholder)
                            .addOptions([
                                {
                                    label: (cenniki["cennik9"].label1),
                                    description: (cenniki["cennik9"].description1),
                                    emoji: (cenniki["cennik9"].emoji1),
                                    value: '1',
                                },
                                {
                                    label: (cenniki["cennik9"].label2),
                                    description: (cenniki["cennik9"].description2),
                                    emoji: (cenniki["cennik9"].emoji2),
                                    value: '2',
                                },
                                {
                                    label: (cenniki["cennik9"].label3),
                                    description: (cenniki["cennik9"].description3),
                                    emoji: (cenniki["cennik9"].emoji3),
                                    value: '3',
                                },
                            ])

                    )
                interaction.channel.send({ embeds: [embed], components: [row], ephemeral: true });
                interaction.reply({ content: "Wysłałeś wiadomość o id `" + type + "` na kanał <#" + interaction.channel.id + ">", ephemeral: true })
            }
        }
    }
}