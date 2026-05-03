const { ActionRowBuilder, StringSelectMenuBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, EmbedBuilder, ButtonBuilder, PermissionsBitField } = require('discord.js');
const client = require('..');
const config = require('../config.js');
const { connectToDatabase_claimTicket, connectToDatabase_balanceclient, connectToDatabase_balanceexchanger, connectToDatabase_methods, connectToDatabase_balanceexchangerzarobki } = require('../events/mongodbSystem.js');


const discord_transcripts = require('discord-html-transcripts');

async function getClaimedIdFromTicket(channelId) {
    try {
        const collection = await connectToDatabase_claimTicket();
        const ticket = await collection.findOne({ channelId: channelId });

        if (!ticket) {
        }

        return ticket.claimedId;
    } catch (error) {

    }
}


client.on("interactionCreate", async interaction => {

    if (interaction.customId === "USTAWIENIA_TICKET-POMOC") {

        const requiredRoleIds = config.ustawienia_pomoc.dostęp.split(',').map(role => role.trim());

        const hasRequiredRole = interaction.member.roles.cache.some(role => requiredRoleIds.includes(role.id));

        if (!hasRequiredRole) {
            return interaction.reply({ content: "Nie posiadasz dostępu do tej funkcji.", ephemeral: true });
        }
        const options = [];
        for (let i = 1; i <= 3; i++) {
            options.push({
                label: config["ustawienia_pomoc"][`label${i}`],
                description: config["ustawienia_pomoc"][`description${i}`],
                emoji: config["ustawienia_pomoc"][`emoji${i}`],
                value: i.toString(),
            });
        }

        const row = new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
                .setCustomId("USTAWIENIA_SELECTED-POMOC")
                .setPlaceholder(config["ustawienia_pomoc"].placeholder)
                .addOptions(options)
        );

        return interaction.reply({ components: [row], ephemeral: true });
    }

    if (interaction.customId === "USTAWIENIA_TICKET-ZAMOWIENIE-2") {

        const requiredRoleIds = config.ustawienia_zamowienie.dostęp.split(',').map(role => role.trim());

        const hasRequiredRole = interaction.member.roles.cache.some(role => requiredRoleIds.includes(role.id));

        if (!hasRequiredRole) {
            return interaction.reply({ content: "Nie posiadasz dostępu do tej funkcji.", ephemeral: true });
        }
        const buttons = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel(config["ustawienia_zamowienie_close"].label1)
                    .setEmoji(config["ustawienia_zamowienie_close"].emoji1)
                    .setStyle("Secondary")
                    .setCustomId("USTAWIENIA_ZAMOWIENIE_CLOSE_YES")
            )
            .addComponents(
                new ButtonBuilder()
                    .setLabel(config["ustawienia_zamowienie_close"].label2)
                    .setEmoji(config["ustawienia_zamowienie_close"].emoji2)
                    .setStyle("Secondary")
                    .setCustomId("USTAWIENIA_ZAMOWIENIE_CLOSE_NO")
            )


        return interaction.reply({ components: [buttons], ephemeral: true });
    }

    if (interaction.customId === "USTAWIENIA_ZAMOWIENIE_CLOSE_NO") {
        const channel = interaction.channel;
        const channelId = channel.id;


        const channelTopic = channel.topic;

        if (!channelTopic) {
            return interaction.reply({ content: "Kanał nie ma opisanego tematu.", ephemeral: true });
        }

        const lines = channelTopic.split('\n');

        try {
            const collection = await connectToDatabase_claimTicket();

            const ticketData = await collection.findOne({ channelId: channel.id });

            if (!ticketData) {

                console.log(`Nie znaleziono ticketu dla kanału ${channel.id}`);
            }

            if (ticketData) {
                await collection.deleteOne({ channelId: channel.id });
                console.log(`Dokument z channelId: ${channel.id} został usunięty.`);
            } else {
                console.log(`Nie znaleziono dokumentu z channelId: ${channel.id}.`);
            }

            const claimedId = ticketData && ticketData.claimerId
                ? `<@${ticketData.claimerId}>`
                : "BRAK";


            const transcriptAttachment = await discord_transcripts.createTranscript(channel);
            const transcriptChannel = interaction.guild.channels.cache.get(config["ticket"].transcript_channel);

            let id, usrnm, idd;

            const ticketUser = interaction.guild.members.cache.get(lines[0]?.trim());

            if (ticketUser) {
                id = `<@${ticketUser.id}>`;
                idd = ticketUser.id;
                usrnm = ticketUser.user.username;
            } else {
                id = `<@${lines[0]?.trim()}>`;
                idd = lines[0]?.trim();
                usrnm = "Nieznany";
            }

            const closedBy = `<@${interaction.user.id}>`;

            await transcriptChannel.send({
                embeds: [
                    new EmbedBuilder()
                        .setTitle(config["ticket_close1"].title)
                        .setDescription(config["ticket_close1"].description
                            .replace("{ping}", id)
                            .replace("{nick}", usrnm)
                            .replace("{id}", idd)
                            .replace("{claimed}", claimedId)
                            .replace("{closed}", closedBy))
                        .setColor(config["Ogólne"].kolor)
                ],
                files: [transcriptAttachment],
            });

            if (ticketUser) {
                const directEmbed = new EmbedBuilder()
                    .setTitle(config["ticket_close2"].title)
                    .setDescription(config["ticket_close2"].description.replace("{user}", id))
                    .setColor(config["Ogólne"].kolor)
                    .setFooter({ text: config["ticket_close2"].footer, iconURL: client.user.displayAvatarURL() })
                    .setTimestamp(new Date())
                    .setThumbnail(client.user.displayAvatarURL());

                await ticketUser.send({ embeds: [directEmbed] }).catch(() => {
                    console.warn("Nie można wysłać DM do użytkownika.");
                });
            }

            setTimeout(() => {
                channel.delete().catch(console.error);
            }, 5000);

            await interaction.reply({
                content: "Ticket został zamknięty i zapisany.",
                components: [],
                ephemeral: true,
            });

        } catch (error) {
            console.error("Błąd przy usuwaniu ticketu:", error);
            await interaction.reply({ content: "Wystąpił błąd przy usuwaniu ticketu.", ephemeral: true });
        }
    }

    if (interaction.customId === "TICKET_CLOSE_YES") {
        const channel = interaction.channel;
        const channelId = channel.id;

        const channelTopic = channel.topic;

        if (!channelTopic) {
            return interaction.reply({ content: "Kanał nie ma opisanego tematu.", ephemeral: true });
        }

        const collection = await connectToDatabase_claimTicket();

        const ticketData = await collection.findOne({ channelId: channel.id });

        if (!ticketData) {
            return interaction.reply({
                content: "Ten ticket nie został jeszcze przejęty.",
                ephemeral: true
            });
        }
        try {
            await interaction.deferReply();

            const clientDb = await connectToDatabase_balanceclient();

            const opis1 = interaction.fields.getTextInputValue('opis11');
            const opis2 = interaction.fields.getTextInputValue('opis22');
            const opis3 = interaction.fields.getTextInputValue('opis33');
            const opis4 = interaction.fields.getTextInputValue('opis44').toUpperCase();;


            const collection = await connectToDatabase_claimTicket();
            const ticketData = await collection.findOne({ channelId: channel.id });


            if (ticketData) {
                await collection.deleteOne({ channelId: channel.id });
                console.log(`Dokument z channelId: ${channel.id} został usunięty.`);
            } else {
                console.log(`Nie znaleziono dokumentu z channelId: ${channel.id}.`);
            }

            const claimedId = ticketData && ticketData.claimerId
                ? ticketData.claimerId.replace(/[<@>]/g, '')
                : "BRAK";

            if (!claimedId) {
                return interaction.reply({
                    content: "Nie można znaleźć claimerId w danych ticketu.",
                    ephemeral: true,
                });
            }

            const amount = parseFloat(opis3);
            if (isNaN(amount)) {
                throw new Error("Kwota w opis3 nie jest poprawną liczbą.");
            }

            const topicLines1 = (channel.topic || "").split('\n');

            const userId = topicLines1[0]?.trim().replace(/[<@>]/g, '');


            let clientData = await clientDb.findOne({ userId: userId });
            if (!clientData) {
                await clientDb.insertOne({ userId: userId, balance: 0 });
                clientData = { balance: 0 };
            }

            await clientDb.updateOne({ userId: userId }, { $inc: { balance: amount } });

            await collection.deleteOne({ channelId: channelId });

            const transcriptAttachment = await discord_transcripts.createTranscript(channel);

            const transcriptChannel = interaction.guild.channels.cache.get(config["ticket"].transcript_channel);

            let id, usrnm, idd;

            const channelTopic1 = channel.topic;

            const lines = channelTopic1.split('\n');

            const ticketUser = interaction.guild.members.cache.get(lines[0]?.trim().replace(/[<@>]/g, ''));

            if (ticketUser) {
                id = `<@${ticketUser.id}>`;
                idd = ticketUser.id;
                usrnm = ticketUser.user.username;
            } else {
                id = `<@${lines[0]?.trim().replace(/[<@>]/g, '')}>`;
                idd = lines[0]?.trim().replace(/[<@>]/g, '');
                usrnm = "Nieznany";
            }

            const claimedId_embed = ticketData.claimerId.replace(/[<@>]/g, '');

            const closedBy = `<@${interaction.user.id}>`;

            let claimedUsername;

            try {
                const member = await interaction.guild.members.fetch(claimedId_embed);
                claimedUsername = member.user.username;
            } catch (error) {
                console.error("Nie udało się pobrać użytkownika:", error);
                claimedUsername = `Nieznany (${claimedId_embed})`;
            }

            const topicLines = (channel.topic || "").split('\n');

            const UserId123 = topicLines[0]?.trim();
            const currencyFrom = topicLines[3]?.trim();
            const currencyTo = topicLines[4]?.trim();

            await transcriptChannel.send({
                embeds: [
                    new EmbedBuilder()
                        .setTitle(config["ticket_close1"].title)
                        .setDescription(config["ticket_close1"].description
                            .replace("{ping}", id)
                            .replace("{nick}", usrnm)
                            .replace("{id}", idd)
                            .replace("{claimed}", claimedId)
                            .replace("{closed}", closedBy))
                        .setColor(config["Ogólne"].kolor),
                ],
                files: [transcriptAttachment],
            });

            const formattedAmount = Number.isInteger(amount) ? amount.toString() : amount.toFixed(2);

            const repEmbed1 = new EmbedBuilder()
                .setDescription(
                    `\`\`\`✅ DreamShop™ × WYSTAW LEGIT CHECKA\`\`\`
- \`💎\` **× Dziękujemy <@${UserId123}> za korzystanie z naszych usług!**\n
- \`✅\` **× Prosimy o wystawienie legit checka na:** https://discord.com/channels/1293540662318207069/1331687165876502559\n
- \`📄\` **× Wzór do skopiowania:**\n
> \`+rep @${claimedUsername} ${opis1}x ${opis2} ${opis3} PLN [${opis4}]\`\n
- \`❗\` **× Twój ticket zostanie zamknięty po wystawieniu legit checka! **`
                )
                .setColor(0x181818)
                .setFooter({
                    text: "DreamShop™",
                    iconURL: client.user.displayAvatarURL()
                })
                .setTimestamp(new Date())
                .setThumbnail(client.user.displayAvatarURL())

            await channel.send({ content: "||<@" + UserId123 + ">||", embeds: [repEmbed1] });
            await channel.send({ content: `+rep @${claimedUsername} ${opis1}x ${opis2} ${opis3} PLN [${opis4}]` });

            if (ticketUser) {
                await ticketUser.send({ embeds: [repEmbed1] }).catch(() => {
                    console.warn("Nie można wysłać DM do użytkownika.");
                });
                await ticketUser.send({ content: `+rep @${claimedUsername} ${opis1}x ${opis2} ${opis3} PLN [${opis4}]` }).catch(() => {
                    console.warn("Nie można wysłać DM do użytkownika.");
                });
            }

            const roleToAdd = interaction.guild.roles.cache.get(config["realized"].rola);
            if (roleToAdd && ticketUser) {
                await ticketUser.roles.add(roleToAdd);
            }

            await collection.deleteOne({ channelId });

            const notificationChannel = interaction.guild.channels.cache.get(config["realized"].ping_channel);
            if (notificationChannel) {
                const notificationMessage = await notificationChannel.send(`<@${ticketUser.id}>`);

                setTimeout(() => {
                    notificationMessage.delete().catch(console.error);
                }, 5000);
            }

            const targetCategoryId = (config["realized"].category);
            const targetCategory = interaction.guild.channels.cache.get(targetCategoryId);
            if (targetCategory) {
                await channel.setParent(targetCategory);
            }

            const claimerId = interaction.user.id;

            const creatorId = lines[0].trim().match(/\d+/)?.[0];

            const overwrites = [
                {
                    id: claimerId,
                    allow: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages],
                },
                {
                    id: creatorId,
                    allow: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages],
                },
            ];
            await channel.permissionOverwrites.set(overwrites);

            await interaction.editReply({
                content: "Wymiana została dokonana, ticket zostanie zamknięty po wystawieniu legit checka przez klienta.",
                ephemeral: true,
                components: [],
            });

        } catch (error) {
            console.error("Błąd przy zamknięciu ticketu:", error);

            if (interaction.deferred || interaction.replied) {
                await interaction.editReply({ content: "Wystąpił błąd przy zamknięciu ticketu.", ephemeral: true });
            } else {
                await interaction.reply({ content: "Wystąpił błąd przy zamknięciu ticketu.", ephemeral: true });
            }
        }
    }

    if (interaction.customId === "USTAWIENIA_TICKET-ZAMOWIENIE-1") {

        const requiredRoleIds = config.ustawienia_zamowienie.dostęp.split(',').map(role => role.trim());

        const hasRequiredRole = interaction.member.roles.cache.some(role => requiredRoleIds.includes(role.id));

        if (!hasRequiredRole) {
            return interaction.reply({ content: "Nie posiadasz dostępu do tej funkcji.", ephemeral: true });
        }
        const options = [];
        for (let i = 1; i <= 4; i++) {
            options.push({
                label: config["ustawienia_zamowienie"][`label${i}`],
                description: config["ustawienia_zamowienie"][`description${i}`],
                emoji: config["ustawienia_zamowienie"][`emoji${i}`],
                value: i.toString(),
            });
        }

        const row = new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
                .setCustomId("USTAWIENIA_SELECTED-ZAMOWIENIE")
                .setPlaceholder(config["ustawienia_zamowienie"].placeholder)
                .addOptions(options)
        );

        return interaction.reply({ components: [row], ephemeral: true });
    }

    if (interaction.customId === "USTAWIENIA_SELECTED-ZAMOWIENIE") {
        if (interaction.values[0] === "2") {
            const channel = interaction.channel;
            const channelTopic = channel.topic;


            const requiredRoleIds = config.ustawienia_zamowienie.dostęp.split(',').map(role => role.trim());

            const hasRequiredRole = interaction.member.roles.cache.some(role => requiredRoleIds.includes(role.id));

            if (!hasRequiredRole) {
                return interaction.reply({ content: "Nie posiadasz dostępu do tej funkcji.", ephemeral: true });
            }

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
                        .setDescription("\`\`\`📌 DreamShop™ × JESTEŚ WZYWANY\`\`\`\n- \`❗\` <@" + user.id + "> **jesteś wzywany na swojego ticketa!**\n- \`⏰\` **Czas na odpowiedź to __4 godziny__ w przyciwnym razie ticket zostanie usunięty!**\n## - \`📌\` **KANAŁ:** <#" + interaction.channel.id + ">",);

                    await user.send({ embeds: [embed] });
                    await interaction.reply({ content: "Wysłano powiadomienie do użytkownika.", ephemeral: true });
                } else {
                    await interaction.reply({ content: "Nie udało się znaleźć użytkownika o tym ID.", ephemeral: true });
                }
            } catch (error) {
                console.error("Błąd przy wysyłaniu wiadomości do użytkownika:", error);
                await interaction.reply({ content: "Wystąpił błąd przy wysyłaniu wiadomości do użytkownika.", ephemeral: true });
            }
        }
    }


    if (interaction.customId === "USTAWIENIA_SELECTED-POMOC") {
        if (interaction.values[0] === "1") {
            const channel = interaction.channel;
            const channelTopic = channel.topic;


            const requiredRoleIds = config.ustawienia_pomoc.dostęp.split(',').map(role => role.trim());

            const hasRequiredRole = interaction.member.roles.cache.some(role => requiredRoleIds.includes(role.id));

            if (!hasRequiredRole) {
                return interaction.reply({ content: "Nie posiadasz dostępu do tej funkcji.", ephemeral: true });
            }

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
                        .setDescription("\`\`\`📌 DreamShop™ × JESTEŚ WZYWANY\`\`\`\n- \`❗\` <@" + user.id + "> **jesteś wzywany na swojego ticketa!**\n- \`⏰\` **Czas na odpowiedź to __4 godziny__ w przyciwnym razie ticket zostanie usunięty!**\n- \`📌\` **KANAŁ:** <#" + interaction.channel.id + ">",);

                    await user.send({ embeds: [embed] });
                    await interaction.reply({ content: "Wysłano powiadomienie do użytkownika.", ephemeral: true });
                } else {
                    await interaction.reply({ content: "Nie udało się znaleźć użytkownika o tym ID.", ephemeral: true });
                }
            } catch (error) {
                console.error("Błąd przy wysyłaniu wiadomości do użytkownika:", error);
                await interaction.reply({ content: "Wystąpił błąd przy wysyłaniu wiadomości do użytkownika.", ephemeral: true });
            }
        }
    }

    if (interaction.customId === "USTAWIENIA_SELECTED-ZAMOWIENIE" && interaction.values[0] === "1") {
    const channel = interaction.channel;

    const allowedCategories = config.allowedCategories.ticketCategories;

    if (!allowedCategories.includes(channel.parentId)) {
        return interaction.reply({ content: "Ten kanał nie jest w dozwolonej kategorii.", ephemeral: true });
    }

    try {
        const collection = await connectToDatabase_claimTicket();
        const methodsCollection = await connectToDatabase_methods();

        const ticketData = await collection.findOne({ channelId: channel.id });

        if (ticketData) {
            const claimerId1 = ticketData.claimerId;

            if (claimerId1 === interaction.user.id) {
                return interaction.reply({
                    content: "Już przejąłeś ten ticket.",
                    ephemeral: true
                });
            }

            if (claimerId1 && claimerId1 !== interaction.user.id) {
                return interaction.reply({
                    content: `Ten ticket został już przejęty przez <@${claimerId1}>.`,
                    ephemeral: true
                });
            }
        }

        const claimerId = interaction.user.id;
        const timestamp = new Date();

        // Hardcoded limit to 10
        const limit = 10;

        const existingTickets = await collection.find({ claimerId: claimerId }).toArray();



        const channelTopic = channel.topic;
        const lines = channelTopic.split('\n');
        const creatorId = lines[0].trim().match(/\d+/)?.[0];

        let creatorName = '';

        if (creatorId) {
            try {
                const member = await interaction.guild.members.fetch(creatorId);
                creatorName = member.user.username;
            } catch (error) {
                console.error('Nie udało się znaleźć członka:', error);
            }
        }

        await collection.insertOne({
            channelId: channel.id,
            claimerId: claimerId,
            creatorId: creatorId,
            timestamp: Math.floor(Date.now() / 1000),
        });

        const claimerUser = interaction.user;
        const newChannelName = `${creatorName}-${claimerUser.username}`;
        await channel.setName(newChannelName);

        const requiredRole = config.ticket.ranga2;

        if (!creatorId) {
            console.error("Nie znaleziono ID osoby tworzącej ticketa w temacie.");
            return;
        }

        const overwrites = [
            {
                id: requiredRole,
                deny: [PermissionsBitField.Flags.ViewChannel],
            },
            {
                id: claimerId,
                allow: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.AttachFiles],
            },
            {
                id: creatorId,
                allow: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.AttachFiles],
            },
        ];
                                let kat;
        const maxChannels = 50; // Maksymalna liczba kanałów w jednej kategorii
       const category1 = interaction.guild.channels.cache.get("1331200049417420800");
const category2 = interaction.guild.channels.cache.get("1331200050482909185");
        function isCategoryFull(category) {
    return category.children.cache.size >= maxChannels;
}
        
        if (!isCategoryFull(category1)) {
    kat = category1;
} else if (!isCategoryFull(category2)) {
    kat = category2;
} 
           
     
        await channel.edit({
            parent: kat,
            permissionOverwrites: overwrites
        })
		
        const embed = new EmbedBuilder()
            .setColor(config["Ogólne"].kolor)
            .setTitle(' ')
            .setDescription(`> To zgłoszenie zostało zajęte przez **${claimerUser.username}**`);
        await channel.send({ embeds: [embed] });

        const userPaymentData = await methodsCollection.findOne({ userId: claimerId });
        const methodLine = lines[3]?.trim();

        if (methodLine) {
            const methodKey = methodLine.toLowerCase();
            const claimerName = claimerUser.username;

            let embedMessage = '';
            if (methodKey === 'blik' && userPaymentData?.methods?.blik) {
                const phoneNumber = userPaymentData.methods.blik;
                embedMessage = `**\`\`\`💱 DreamShop™ × PŁATNOŚĆ BLIK\`\`\`**
**👤 × Płatność odbierze: <@${claimerId}>!**
## 💳 × Numer telefonu: \`${phoneNumber}\`
> - **➖ × Odbiorca:** \`${claimerName}\`
> - **➖ × Tytuł:** \`od ${creatorName}\`
> - **➖ × Pieniądze muszą pochodzić z twojego konta!**

-# **❗ Pieniądze wyślij zgodnie z powyższymi uwagami lub ich nie otrzymasz!**`;
            } else if (methodKey === 'skrill' && userPaymentData?.methods?.skrill) {
                const email = userPaymentData.methods.skrill;
                embedMessage = `**\`\`\`💱 DreamShop™ × PŁATNOŚĆ SKRILL\`\`\`**
**👤 × Płatność odbierze: <@${claimerId}>!**
## 💳 × Adres E-Mail: \`${email}\`
> - **➖ × Bez notatek**
> - **➖ × Wyślij potwierdzenie płatności!**

-# **❗ Pieniądze wyślij zgodnie z powyższymi uwagami lub ich nie otrzymasz!**`;
            }
            // Add other methods similarly...

            if (embedMessage) {
                const embed = new EmbedBuilder()
                    .setColor(config["Ogólne"].kolor)
                    .setTitle(' ')
                    .setDescription(embedMessage);

                await channel.send({ embeds: [embed] });
            }
        }

        const channelCreatedAt = channel.createdAt || new Date();
        const timeDifference = (timestamp - channelCreatedAt) / (1000 * 60);
        if (timeDifference > 5) {
            try {
                const creatorUser = await interaction.guild.members.fetch(creatorId);
                await creatorUser.send({
                    embeds: [
                        new EmbedBuilder()
                            .setColor(config["Ogólne"].kolor)
                            .setTitle(' ')
                            .setDescription(`Twój ticket został przejęty przez **${claimerUser.username}**.\nKanał: <#${channel.id}>`),
                    ],
                });
            } catch (error) {
                console.error('Nie udało się wysłać wiadomości DM:', error);
            }
        }

        await interaction.reply({ content: "Ticket został pomyślnie przejęty.", ephemeral: true });
    } catch (error) {
        console.error("Błąd przy przejmowaniu ticketu:", error);
        await interaction.reply({ content: "Wystąpił błąd przy przejmowaniu ticketu.", ephemeral: true });
    }
}

    if (interaction.customId === "USTAWIENIA_SELECTED-ZAMOWIENIE") {
        if (interaction.values[0] === "3") {



            const requiredRoleIds = config.ustawienia_zamowienie.dostęp.split(',').map(role => role.trim());

            const hasRequiredRole = interaction.member.roles.cache.some(role => requiredRoleIds.includes(role.id));

            if (!hasRequiredRole) {
                return interaction.reply({ content: "Nie posiadasz dostępu do tej funkcji.", ephemeral: true });
            }
            const modal = new ModalBuilder()
                .setCustomId('CHANNNEL_NAME_MODAL')
                .setTitle('Wypełnij wymagane pola.')
                .addComponents(
                    new ActionRowBuilder().addComponents(
                        new TextInputBuilder()
                            .setCustomId('channelName')
                            .setLabel('Na jaką nazwę chcesz zmienić ten kanał?')
                            .setPlaceholder('Przykład: wymiana-xsolti')
                            .setStyle(TextInputStyle.Short)
                            .setRequired(true)
                            .setMaxLength(100)
                    )
                );

            interaction.showModal(modal);
        }
    }

    if (interaction.customId === "USTAWIENIA_SELECTED-POMOC") {
        if (interaction.values[0] === "2") {


            const requiredRoleIds = config.ustawienia_pomoc.dostęp.split(',').map(role => role.trim());

            const hasRequiredRole = interaction.member.roles.cache.some(role => requiredRoleIds.includes(role.id));

            if (!hasRequiredRole) {
                return interaction.reply({ content: "Nie posiadasz dostępu do tej funkcji.", ephemeral: true });
            }
            const modal = new ModalBuilder()
                .setCustomId('CHANNNEL_NAME_MODAL')
                .setTitle('Wypełnij wymagane pola.')
                .addComponents(
                    new ActionRowBuilder().addComponents(
                        new TextInputBuilder()
                            .setCustomId('channelName')
                            .setLabel('Na jaką nazwę chcesz zmienić ten kanał?')
                            .setPlaceholder('Przykład: wymiana-xsolti')
                            .setStyle(TextInputStyle.Short)
                            .setRequired(true)
                            .setMaxLength(100)
                    )
                );

            interaction.showModal(modal);
        }

        if (interaction.customId === "USTAWIENIA_SELECTED-POMOC") {

            const requiredRoleIds = config.ustawienia_pomoc.dostęp.split(',').map(role => role.trim());

            const hasRequiredRole = interaction.member.roles.cache.some(role => requiredRoleIds.includes(role.id));

            if (!hasRequiredRole) {
                return interaction.reply({ content: "Nie posiadasz dostępu do tej funkcji.", ephemeral: true });
            }
            if (interaction.values[0] === "3") {
                const modal = new ModalBuilder()
                    .setCustomId('USER_ID_MODAL')
                    .setTitle('Wprowadź ID użytkownika')
                    .addComponents(
                        new ActionRowBuilder().addComponents(
                            new TextInputBuilder()
                                .setCustomId('userId')
                                .setLabel('Jakiego użytkownika chcesz dodać?')
                                .setPlaceholder('Przykład: 378733482802806786')
                                .setStyle(TextInputStyle.Short)
                                .setRequired(true)
                                .setMaxLength(100)
                        )
                    );

                interaction.showModal(modal);
            }
        }
    }
    if (interaction.customId === "USTAWIENIA_SELECTED-ZAMOWIENIE") {

        const requiredRoleIds = config.ustawienia_zamowienie.dostęp.split(',').map(role => role.trim());

        const hasRequiredRole = interaction.member.roles.cache.some(role => requiredRoleIds.includes(role.id));

        if (!hasRequiredRole) {
            return interaction.reply({ content: "Nie posiadasz dostępu do tej funkcji.", ephemeral: true });
        }
        if (interaction.values[0] === "4") {
            const modal = new ModalBuilder()
                .setCustomId('USER_ID_MODAL')
                .setTitle('Wprowadź ID użytkownika')
                .addComponents(
                    new ActionRowBuilder().addComponents(
                        new TextInputBuilder()
                            .setCustomId('userId')
                            .setLabel('Jakiego użytkownika chcesz dodać?')
                            .setPlaceholder('Przykład: 378733482802806786')
                            .setStyle(TextInputStyle.Short)
                            .setRequired(true)
                            .setMaxLength(100)
                    )
                );

            interaction.showModal(modal);
        }
    }

    if (interaction.customId === 'CHANNNEL_NAME_MODAL') {
        const channelName = interaction.fields.getTextInputValue('channelName');
        const channel = interaction.channel;

        try {
            channel.setName(channelName);
            interaction.reply({ content: `Kanał został zmieniony na: ${channelName}`, ephemeral: true });
        } catch (error) {
            console.error('Błąd zmiany nazwy kanału:', error);
            interaction.reply({ content: 'Wystąpił błąd przy zmianie nazwy kanału. Spróbuj ponownie.', ephemeral: true });
        }
    }

    if (interaction.customId === 'USER_ID_MODAL') {
        const userId = interaction.fields.getTextInputValue('userId');
        let user;

        try {
            user = await interaction.guild.members.fetch(userId);
        } catch (error) {
            return interaction.reply({ content: "Nie znaleziono użytkownika o podanym ID.", ephemeral: true });
        }

        if (!user) {
            return interaction.reply({ content: "Nie znaleziono użytkownika o podanym ID.", ephemeral: true });
        }

        const channel = interaction.channel;
        try {
            await channel.permissionOverwrites.edit(user, {
                ViewChannel: true,
                SendMessages: true,
            });

            interaction.reply({
                content: `Pomyślnie dodano użytkownika <@${user.user.id}> do ticketa.`,
                ephemeral: true,
            });
        } catch (error) {
            console.error('Błąd nadawania uprawnień:', error);
            interaction.reply({ content: 'Wystąpił błąd przy nadawaniu uprawnień. Spróbuj ponownie.', ephemeral: true });
        }
    }
    if (interaction.customId === "ZAMKNIJ_TICKET-POMOC") {

        const requiredRoleIds = config.ustawienia_pomoc.dostęp.split(',').map(role => role.trim());

        const hasRequiredRole = interaction.member.roles.cache.some(role => requiredRoleIds.includes(role.id));

        if (!hasRequiredRole) {
            return interaction.reply({ content: "Nie posiadasz dostępu do tej funkcji.", ephemeral: true });
        }
        const embed = new EmbedBuilder()
            .setTitle(config["ticket_close"].title)
            .setDescription(config["ticket_close"].description)
            .setColor(config["Ogólne"].kolor)
            .setImage(config["ticket_close"].image)
            .setFooter({ text: (config["ticket_close"].footer) })

        const buttons = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel(config["ticket_close"].label)
                    .setEmoji(config["ticket_close"].emoji)
                    .setStyle('Danger')
                    .setCustomId('zamknij_accept')
            )
        interaction.reply({ embeds: [embed], components: [buttons], ephemeral: true })
    }
    if (interaction.customId === "zamknij_accept") {

        try {
            const channel = interaction.channel;
            const channelId = channel.id;


            const channelTopic = channel.topic;

            if (!channelTopic) {
                return interaction.reply({ content: "Kanał nie ma opisanego tematu.", ephemeral: true });
            }

            const lines = channelTopic.split('\n');
            const collection = await connectToDatabase_claimTicket();

            const ticketData = await collection.findOne({ channelId: channel.id });

            if (!ticketData) {
                console.log(`Nie znaleziono ticketu dla kanału ${channel.id}`);
            }

            const claimedId = ticketData && ticketData.claimerId
                ? `<@${ticketData.claimerId}>`
                : "BRAK";


            const transcriptAttachment = await discord_transcripts.createTranscript(channel);
            const transcriptChannel = interaction.guild.channels.cache.get(config["ticket"].transcript_channel);

            let id, usrnm, idd;

            const ticketUser = interaction.guild.members.cache.get(lines[0]?.trim());

            if (ticketUser) {
                id = `<@${ticketUser.id}>`;
                idd = ticketUser.id;
                usrnm = ticketUser.user.username;
            } else {
                id = `<@${lines[0]?.trim()}>`;
                idd = lines[0]?.trim();
                usrnm = "Nieznany";
            }

            const closedBy = `<@${interaction.user.id}>`;

            await transcriptChannel.send({
                embeds: [
                    new EmbedBuilder()
                        .setTitle(config["ticket_close1"].title)
                        .setDescription(config["ticket_close1"].description
                            .replace("{ping}", id)
                            .replace("{nick}", usrnm)
                            .replace("{id}", idd)
                            .replace("{claimed}", claimedId)
                            .replace("{closed}", closedBy))
                        .setColor(config["Ogólne"].kolor)
                ],
                files: [transcriptAttachment],
            });

            if (ticketUser) {
                const directEmbed = new EmbedBuilder()
                    .setTitle(config["ticket_close2"].title)
                    .setDescription(config["ticket_close2"].description.replace("{user}", id))
                    .setColor(config["Ogólne"].kolor)
                    .setFooter({ text: (config["ticket_close2"].footer), iconURL: client.user.displayAvatarURL() })
                    .setTimestamp(new Date())
                    .setThumbnail(client.user.displayAvatarURL())

                await ticketUser.send({ embeds: [directEmbed] }).catch(() => {
                    console.warn("Nie można wysłać DM do użytkownika.");
                });
            }

            setTimeout(() => {
                channel.delete().catch(console.error);
            }, 5000);

            await interaction.reply({
                content: "Ticket został zamknięty i zapisany.",
                components: [],
                ephemeral: true,
            });
        } catch (error) {
            console.error("Błąd przy obsłudze zamknięcia ticketa:", error);
            await interaction.reply({
                content: "Wystąpił błąd przy zamykaniu ticketa. Spróbuj ponownie.",
                ephemeral: true,
            });
        }
    }
})
