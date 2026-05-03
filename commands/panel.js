const { ApplicationCommandType, ActionRowBuilder, ButtonBuilder, EmbedBuilder, StringSelectMenuBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    name: 'panel',
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
        const data = ['ticket', 'regulamin', 'metody_platnosci', 'weryfikacja', 'wybierz_pingi', 'czy_legit', 'gry', 'konta', 'nasze_serwery', 'wymiany', 'skup', 'middleman', 'boosty', 'boosty2', 'korzysci'];
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
            if (type === "ticket") {

                const embed = new EmbedBuilder()
                    .setColor(config["Ogólne"].kolor)
                    .setTitle(config["ticket"].title)
                    .setDescription(config["ticket"].description)
                    .setImage(config["ticket"].image)
                    .setFooter({ text: (config["ticket"].footer) })

                const row = new ActionRowBuilder()
                    .addComponents(
                        new StringSelectMenuBuilder()
                            .setCustomId("CATEGORY_SELECTED")
                            .setPlaceholder(config["ticket"].placeholder)
                            .addOptions([
                                {
                                    label: (config["ticket"].label1),
                                    description: (config["ticket"].description1),
                                    emoji: (config["ticket"].emoji1),
                                    value: '1',
                                },
                                {
                                    label: (config["ticket"].label2),
                                    description: (config["ticket"].description2),
                                    emoji: (config["ticket"].emoji2),
                                    value: '2',
                                },
                                {
                                    label: (config["ticket"].label5),
                                    description: (config["ticket"].description5),
                                    emoji: (config["ticket"].emoji5),
                                    value: '5',
                                },
                            ])

                    )
                interaction.channel.send({ embeds: [embed], components: [row], ephemeral: true });
                interaction.reply({ content: "Wysłałeś wiadomość o id `" + type + "` na kanał <#" + interaction.channel.id + ">", ephemeral: true })
            }
               if(type === "boosty2") {
                const embed = new EmbedBuilder()
                .setColor("#161B2E")
                .setThumbnail(client.user.displayAvatarURL())
                .setDescription(`**\`\`\`🪐 DreamShop™ × KORZYŚCI B00STER #2\`\`\`**
> - **<a:BST2:1317539297439776898> JAK ZARABIAĆ?**
> - **<a:BST2:1317539297439776898> DARMOWY STREAMING**
> - **<a:BST2:1317539297439776898> CRACKOWANIE KONT**
> - **<a:BST2:1317539297439776898> DARMOWY REDBULL**
> - **<a:BST2:1317539297439776898> KOPIOWANIE SERWERÓW DISCORD**
> - **<a:BST2:1317539297439776898> AMAZON REFUND**
> - **<a:BST2:1317539297439776898> SMS HITTING**
> - **<a:BST2:1317539297439776898> DARMOWE OBSERWACJE INSTAGRAM**
> - **<a:BST2:1317539297439776898> BAN DISCORD**
> - **<a:BST2:1317539297439776898> NIKE REFUND**
> - **<a:BST2:1317539297439776898> IPHONE-FLIPPING**
> - **<a:BST2:1317539297439776898> SPOTIFY PREMIUM NA TELEFON**
> - **<a:BST2:1317539297439776898> ADOBE PRO 2022**
> - **<a:BST2:1317539297439776898> AUTOBUMPER**
> - **<a:BST2:1317539297439776898> NUK3R DISCORD**
`)
                
                                const row = new ActionRowBuilder()
                    .addComponents(
                        new StringSelectMenuBuilder()
                            .setCustomId("PROWIZJA_SELECTED2")
                            .setPlaceholder("Wybierz")
                            .addOptions([
                                {
                                    label: "DARMOWY STREAMING",
                                    emoji: "<a:BST2:1317539297439776898>",
                                    value: '1',
                                },
                                {
                                    label: "CRACKOWANIE KONT",
                                    emoji: "<a:BST2:1317539297439776898>",
                                    value: '2',
                                },
                                {
                                    label: "AMAZON REUND",
                                    emoji: "<a:BST2:1317539297439776898>",
                                    value: '3',
                                },
                                {
                                    label: "SMS HITTING",
                                    emoji: "<a:BST2:1317539297439776898>",
                                    value: '4',
                                },
                                {
                                    label: "DARMOWY REDBULL",
                                    emoji: "<a:BST2:1317539297439776898>",
                                    value: '5',
                                },
                                {
                                    label: "DARMOWE OBSERWACJE INSTAGRAM",
                                    emoji: "<a:BST2:1317539297439776898>",
                                    value: '6',
                                },
                                {
                                    label: "KOPIOWANIE DC",
                                    emoji: "<a:BST2:1317539297439776898>",
                                    value: '7',
                                },
                                {
                                    label: "BAN DISCORD",
                                    emoji: "<a:BST2:1317539297439776898>",
                                    value: '8',
                                },
                                   {
                                    label: "NIKE REFUND",
                                    emoji: "<a:BST2:1317539297439776898>",
                                    value: '9',
                                },
                                   {
                                    label: "IPHONE FLIPPING",
                                    emoji: "<a:BST2:1317539297439776898>",
                                    value: '10',
                                },
                                   {
                                    label: "SPOTIFY PREMIUM NA TELEFON",
                                    emoji: "<a:BST2:1317539297439776898>",
                                    value: '11',
                                },
                                 {
                                    label:  "ADOBE 2022",
                                    emoji: "<a:BST2:1317539297439776898>",
                                    value: '12',
                                },
                                 {
                                    label:  "JAK ZARABIAĆ",
                                    emoji: "<a:BST2:1317539297439776898>",
                                    value: '13',
                                },
                                 {
                                    label:  "AUTOBUMPER",
                                    emoji: "<a:BST2:1317539297439776898>",
                                    value: '14',
                                },
                                 {
                                    label:  "NUK3R DISCORD",
                                    emoji: "<a:BST2:1317539297439776898>",
                                    value: '15',
                                },
                            ])

                    )
                                                interaction.channel.send({ embeds: [embed], components: [row], ephemeral: true });
                interaction.reply({ content: "Wysłałeś wiadomość o id `" + type + "` na kanał <#" + interaction.channel.id + ">", ephemeral: true })
            }
            if(type === "korzysci") {
                                const embed = new EmbedBuilder()
                .setColor("#161B2E")
                .setThumbnail(client.user.displayAvatarURL())
                .setDescription(`**\`\`\`🪐 DreamShop™ × KORZYŚCI B00STER\`\`\`**
## <a:BST:1317539293786407003> KORZYŚCI B00STER #1
> - **<a:BST2:1317539297439776898> DARMOWE MMA**
> - **<a:BST2:1317539297439776898> OPTYMALIZACJA PC**
> - **<a:BST2:1317539297439776898> DARMOWY VPS**
> - **<a:BST2:1317539297439776898> PORTFEL KRYPTO**
> - **<a:BST2:1317539297439776898> SNAPSCORE**
> - **<a:BST2:1317539297439776898> WYCIEK PANDABUY**
> - **<a:BST2:1317539297439776898> DYSK ONLYFANS FAGATA**
> - **<a:BST2:1317539297439776898> DARMOWE DOMENY**
> - **<a:BST2:1317539297439776898> PROMO DISCORD**
> - **<a:BST2:1317539297439776898> N1TR0 ZA 4 PLN**
> - **<a:BST2:1317539297439776898> BAN INSTAGRAM**
## <a:BST:1317539293786407003> KORZYŚCI B00STER #2
> - **<a:BST2:1317539297439776898> JAK ZARABIAĆ?**
> - **<a:BST2:1317539297439776898> DARMOWY STREAMING**
> - **<a:BST2:1317539297439776898> CRACKOWANIE KONT**
> - **<a:BST2:1317539297439776898> DARMOWY REDBULL**
> - **<a:BST2:1317539297439776898> KOPIOWANIE SERWERÓW DISCORD**
> - **<a:BST2:1317539297439776898> AMAZON REFUND**
> - **<a:BST2:1317539297439776898> SMS HITTING**
> - **<a:BST2:1317539297439776898> DARMOWE OBSERWACJE INSTAGRAM**
> - **<a:BST2:1317539297439776898> BAN DISCORD**
> - **<a:BST2:1317539297439776898> NIKE REFUND**
> - **<a:BST2:1317539297439776898> IPHONE-FLIPPING**
> - **<a:BST2:1317539297439776898> SPOTIFY PREMIUM NA TELEFON**
> - **<a:BST2:1317539297439776898> ADOBE PRO 2022**
> - **<a:BST2:1317539297439776898> AUTOBUMPER**
> - **<a:BST2:1317539297439776898> NUK3R DISCORD**`)
                                                                  interaction.channel.send({ embeds: [embed], ephemeral: true });
                interaction.reply({ content: "Wysłałeś wiadomość o id `" + type + "` na kanał <#" + interaction.channel.id + ">", ephemeral: true })
            }
            if(type === "boosty") {
                const embed = new EmbedBuilder()
                .setColor("#161B2E")
                .setThumbnail(client.user.displayAvatarURL())
                .setDescription(`**\`\`\`🪐 DreamShop™ × KORZYŚCI B00STER #1\`\`\`**
> - **<a:BST2:1317539297439776898> DARMOWE MMA**
> - **<a:BST2:1317539297439776898> OPTYMALIZACJA PC**
> - **<a:BST2:1317539297439776898> DARMOWY VPS**
> - **<a:BST2:1317539297439776898> WYMIANY PSC**
> - **<a:BST2:1317539297439776898> PORTFEL KRYPTO**
> - **<a:BST2:1317539297439776898> SNAPSCORE**
> - **<a:BST2:1317539297439776898> WYCIEK PANDABUY**
> - **<a:BST2:1317539297439776898> DYSK ONLYFANS FAGATA**
> - **<a:BST2:1317539297439776898> DARMOWE DOMENY**
> - **<a:BST2:1317539297439776898> PROMO DISCORD**
> - **<a:BST2:1317539297439776898> N1TR0 ZA 4 PLN**
> - **<a:BST2:1317539297439776898> BAN INSTAGRAM**`)
                
              
                
                                const row = new ActionRowBuilder()
                    .addComponents(
                        new StringSelectMenuBuilder()
                            .setCustomId("PROWIZJA_SELECTED1")
                            .setPlaceholder("Wybierz")
                            .addOptions([
                                {
                                    label: "DARMOWE MMA",
                                    emoji: "<a:BST2:1317539297439776898>",
                                    value: '1',
                                },
                                {
                                    label: "OPTYMALIZACJA PC",
                                    emoji: "<a:BST2:1317539297439776898>",
                                    value: '2',
                                },
                                {
                                    label: "DARMOWY VPS",
                                    emoji: "<a:BST2:1317539297439776898>",
                                    value: '3',
                                },
                                {
                                    label: "PORTFEL KRYPTO",
                                    emoji: "<a:BST2:1317539297439776898>",
                                    value: '4',
                                },
                                {
                                    label: "SNAPSCORE",
                                    emoji: "<a:BST2:1317539297439776898>",
                                    value: '5',
                                },
                                {
                                    label: "WYCIEK PANDABUY",
                                    emoji: "<a:BST2:1317539297439776898>",
                                    value: '6',
                                },
                                {
                                    label: "DYSK ONLYFANS FAGATA",
                                    emoji: "<a:BST2:1317539297439776898>",
                                    value: '7',
                                },
                                {
                                    label: "DARMOWE DOMENY",
                                    emoji: "<a:BST2:1317539297439776898>",
                                    value: '8',
                                },
                                   {
                                    label: "PROMO DISCORD",
                                    emoji: "<a:BST2:1317539297439776898>",
                                    value: '9',
                                },
                                   {
                                    label: "N1TR0 ZA 4 PLN",
                                    emoji: "<a:BST2:1317539297439776898>",
                                    value: '10',
                                },
                                   {
                                    label: "BAN INSTAGRAM",
                                    emoji: "<a:BST2:1317539297439776898>",
                                    value: '11',
                                },
                                 {
                                    label: "WYMIANY PSC",
                                    emoji: "<a:BST2:1317539297439776898>",
                                    value: '12',
                                },
                            ])

                    )
                                                interaction.channel.send({ embeds: [embed], components: [row], ephemeral: true });
                interaction.reply({ content: "Wysłałeś wiadomość o id `" + type + "` na kanał <#" + interaction.channel.id + ">", ephemeral: true })
            }
            if (type === "prowizja") {

                const embed = new EmbedBuilder()
                    .setColor(config["Ogólne"].kolor)
                    .setDescription(config["prowizja"].description)
                    .setImage(config["prowizja"].image)
                    .setFooter({ text: (config["prowizja"].footer) })

                const row = new ActionRowBuilder()
                    .addComponents(
                        new StringSelectMenuBuilder()
                            .setCustomId("PROWIZJA_SELECTED")
                            .setPlaceholder(config["prowizja"].placeholder)
                            .addOptions([
                                {
                                    label: (config["prowizja"].label1),
                                    description: (config["prowizja"].description1),
                                    emoji: (config["prowizja"].emoji1),
                                    value: '1',
                                },
                                {
                                    label: (config["prowizja"].label2),
                                    description: (config["prowizja"].description2),
                                    emoji: (config["prowizja"].emoji2),
                                    value: '2',
                                },
                                {
                                    label: (config["prowizja"].label3),
                                    description: (config["prowizja"].description3),
                                    emoji: (config["prowizja"].emoji3),
                                    value: '3',
                                },
                                {
                                    label: (config["prowizja"].label4),
                                    description: (config["prowizja"].description4),
                                    emoji: (config["prowizja"].emoji4),
                                    value: '4',
                                },
                                {
                                    label: (config["prowizja"].label5),
                                    description: (config["prowizja"].description5),
                                    emoji: (config["prowizja"].emoji5),
                                    value: '5',
                                },
                                {
                                    label: (config["prowizja"].label6),
                                    description: (config["prowizja"].description6),
                                    emoji: (config["prowizja"].emoji6),
                                    value: '6',
                                },
                                {
                                    label: (config["prowizja"].label7),
                                    description: (config["prowizja"].description7),
                                    emoji: (config["prowizja"].emoji7),
                                    value: '7',
                                },
                                {
                                    label: (config["prowizja"].label8),
                                    description: (config["prowizja"].description8),
                                    emoji: (config["prowizja"].emoji8),
                                    value: '8',
                                },
                            ])

                    )
                interaction.channel.send({ embeds: [embed], components: [row], ephemeral: true });
                interaction.reply({ content: "Wysłałeś wiadomość o id `" + type + "` na kanał <#" + interaction.channel.id + ">", ephemeral: true })
            }
            if (type === "kalkulator") {
                const embed = new EmbedBuilder()
                    .setTitle(config["kalkulator"].title)
                    .setDescription(config["kalkulator"].description)
                    .setColor(config["Ogólne"].kolor)
                    .setImage(config["kalkulator"].image)
                    .setFooter({ text: (config["kalkulator"].footer) })

                const buttons = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setLabel(config["kalkulator"].label)
                            .setStyle(config["Ogólne"].stylguzików)
                            .setCustomId('kalkulator')
                    )
                interaction.channel.send({ embeds: [embed], components: [buttons] });
                interaction.reply({ content: "Wysłałeś wiadomość o id `" + type + "` na kanał <#" + interaction.channel.id + ">", ephemeral: true })
            }
            if (type === "czy_legit") {

                const emoji1 = client.emojis.cache.get(config["legit"].emoji1)
                const emoji2 = client.emojis.cache.get(config["legit"].emoji2)

                const embed = new EmbedBuilder()
                    .setTitle(config["legit"].title)
                    .setDescription(config["legit"].description)
                    .setColor(config["Ogólne"].kolor)
                    .setImage(config["legit"].image)
                    .setFooter({ text: (config["legit"].footer) })

                interaction.channel.send({ embeds: [embed] }).then(sentMessage => {
                    sentMessage.react(emoji1)
                        .then(() => sentMessage.react(emoji2))
                        .catch(console.error);
                }).catch(console.error);
                interaction.reply({ content: "Wysłałeś wiadomość o id `" + type + "` na kanał <#" + interaction.channel.id + ">", ephemeral: true })
            }
            if (type === "weryfikacja") {
                const embed = new EmbedBuilder()
                    .setTitle(config["weryfikacja"].title)
                    .setDescription(config["weryfikacja"].description)
                    .setColor(config["Ogólne"].kolor)
                    .setImage(config["weryfikacja"].image)
                    .setFooter({ text: (config["weryfikacja"].footer) })

                const buttons = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setLabel(config["weryfikacja"].label)
                            .setStyle(ButtonStyle.Link)
                            .setURL(config["weryfikacja"].url)
                    )
                interaction.channel.send({ embeds: [embed], components: [buttons] });
                interaction.reply({ content: "Wysłałeś wiadomość o id `" + type + "` na kanał <#" + interaction.channel.id + ">", ephemeral: true })
            }
            if (type === "skup") {
                const embed = new EmbedBuilder()
                    .setTitle(config["skup"].title)
                    .setDescription(config["skup"].description)
                    .setColor(config["Ogólne"].kolor)
                    .setImage(config["skup"].image)
                    .setFooter({ text: (config["skup"].footer) })

                interaction.channel.send({ embeds: [embed] });
                interaction.reply({ content: "Wysłałeś wiadomość o id `" + type + "` na kanał <#" + interaction.channel.id + ">", ephemeral: true })
            }
            if (type === "wymiany") {
                const embed = new EmbedBuilder()
                    .setTitle(config["wymiany"].title)
                    .setDescription(config["wymiany"].description)
                    .setColor(config["Ogólne"].kolor)
                    .setImage(config["wymiany"].image)
                    .setFooter({ text: (config["wymiany"].footer) })

                const buttons = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setLabel(config["wymiany"].label)
                            .setStyle(ButtonStyle.Link)
                            .setURL(config["wymiany"].url)
                    )
                interaction.channel.send({ embeds: [embed], components: [buttons] });
                interaction.reply({ content: "Wysłałeś wiadomość o id `" + type + "` na kanał <#" + interaction.channel.id + ">", ephemeral: true })
            }
            if (type === "middleman") {
                const embed = new EmbedBuilder()
                    .setTitle(config["middleman"].title)
                    .setDescription(config["middleman"].description)
                    .setColor(config["Ogólne"].kolor)
                    .setImage(config["middleman"].image)
                    .setFooter({ text: (config["middleman"].footer) })

                interaction.channel.send({ embeds: [embed] });
                interaction.reply({ content: "Wysłałeś wiadomość o id `" + type + "` na kanał <#" + interaction.channel.id + ">", ephemeral: true })
            }
            if (type === "wybierz_pingi") {
                const embed = new EmbedBuilder()
                    .setTitle(config["autorole"].title)
                    .setDescription(config["autorole"].description)
                    .setColor(config["Ogólne"].kolor)
                    .setImage(config["autorole"].image)
                    .setFooter({ text: (config["autorole"].footer) })

                const buttons = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setLabel(config["autorole"].label1)
                            .setStyle(ButtonStyle.Secondary)
                            .setCustomId('AUTOROLE1')
                    )
                    .addComponents(
                        new ButtonBuilder()
                            .setLabel(config["autorole"].label2)
                            .setStyle(ButtonStyle.Secondary)
                            .setCustomId('AUTOROLE2')
                    )
                    .addComponents(
                        new ButtonBuilder()
                            .setLabel(config["autorole"].label3)
                            .setStyle(ButtonStyle.Secondary)
                            .setCustomId('AUTOROLE3')
                    )
                    .addComponents(
                        new ButtonBuilder()
                            .setLabel(config["autorole"].label4)
                            .setStyle(ButtonStyle.Secondary)
                            .setCustomId('AUTOROLE4')
                    )
                    .addComponents(
                        new ButtonBuilder()
                            .setLabel(config["autorole"].label5)
                            .setStyle(ButtonStyle.Secondary)
                            .setCustomId('AUTOROLE5')
                    )
                interaction.channel.send({ embeds: [embed], components: [buttons] });
                interaction.reply({ content: "Wysłałeś wiadomość o id `" + type + "` na kanał <#" + interaction.channel.id + ">", ephemeral: true })
            }
            if (type === "dreamshopek") {
                const embed = new EmbedBuilder()
                    .setTitle(config["dreamshopek"].title)
                    .setDescription(config["dreamshopek"].description)
                    .setColor(config["Ogólne"].kolor)
                    .setImage(config["dreamshopek"].image)
                    .setFooter({ text: (config["dreamshopek"].footer) })

                const buttons = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setLabel(config["dreamshopek"].label)
                            .setStyle(ButtonStyle.Link)
                            .setURL(config["dreamshopek"].url)
                    )
                interaction.channel.send({ embeds: [embed], components: [buttons] });
                interaction.reply({ content: "Wysłałeś wiadomość o id `" + type + "` na kanał <#" + interaction.channel.id + ">", ephemeral: true })
            }
            if (type === "nasze_serwery") {
                const embed = new EmbedBuilder()
                    .setTitle(config["serwery"].title)
                    .setDescription(config["serwery"].description)
                    .setColor(config["Ogólne"].kolor)
                    .setImage(config["serwery"].image)
                    .setFooter({ text: (config["serwery"].footer) })

                const buttons = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setLabel(config["serwery"].label1)
                            .setStyle(ButtonStyle.Link)
                            .setURL(config["serwery"].url1)
                    )
                    .addComponents(
                        new ButtonBuilder()
                            .setLabel(config["serwery"].label2)
                            .setEmoji(config["serwery"].emoji2)
                            .setStyle(ButtonStyle.Link)
                            .setURL(config["serwery"].url2)
                    )
                    .addComponents(
                        new ButtonBuilder()
                            .setLabel(config["serwery"].label3)
                            .setEmoji(config["serwery"].emoji3)
                            .setStyle(ButtonStyle.Link)
                            .setURL(config["serwery"].url3)
                    )
                    .addComponents(
                        new ButtonBuilder()
                            .setLabel(config["serwery"].label4)
                            .setEmoji(config["serwery"].emoji4)
                            .setStyle(ButtonStyle.Link)
                            .setURL(config["serwery"].url4)
                    )
                interaction.channel.send({ embeds: [embed], components: [buttons] });
                interaction.reply({ content: "Wysłałeś wiadomość o id `" + type + "` na kanał <#" + interaction.channel.id + ">", ephemeral: true })
            }
            if (type === "metody_platnosci") {
                const embed = new EmbedBuilder()
                    .setTitle(config["metody_platnosci"].title)
                    .setDescription(config["metody_platnosci"].description)
                    .setColor(config["Ogólne"].kolor)
                    .setImage(config["metody_platnosci"].image)
                    .setFooter({ text: (config["metody_platnosci"].footer) })
                interaction.channel.send({ embeds: [embed] });
                interaction.reply({ content: "Wysłałeś wiadomość o id `" + type + "` na kanał <#" + interaction.channel.id + ">", ephemeral: true })
            }
            if (type === "regulamin") {
                const embed = new EmbedBuilder()
                    .setTitle(config["regulamin"].title)
                    .setDescription(config["regulamin"].description)
                    .setColor(config["Ogólne"].kolor)
                    .setImage(config["regulamin"].image)
                    .setFooter({ text: (config["regulamin"].footer) })

                interaction.channel.send({ embeds: [embed] });
                interaction.reply({ content: "Wysłałeś wiadomość o id `" + type + "` na kanał <#" + interaction.channel.id + ">", ephemeral: true })
            }
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
