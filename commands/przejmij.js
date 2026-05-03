const { ApplicationCommandType, EmbedBuilder, PermissionsBitField } = require('discord.js');
const { connectToDatabase_claimTicket, connectToDatabase_methods } = require('../events/mongodbSystem.js');
const config = require('../config.js');

module.exports = {
    name: 'przejmij',
    description: 'Przejmuje ticket przypisany do kanału.',
    type: ApplicationCommandType.ChatInput,
    run: async (client, interaction) => {
        const requiredRoleIDs = [config["permisje"].dostęp, config["permisje"].realizator];

        if (interaction.member.roles.cache.some(role => requiredRoleIDs.includes(role.id))) {
            const channel = interaction.channel;
            const allowedCategories = config.allowedCategories.ticketCategories;

            if (!allowedCategories.includes(channel.parentId)) {
                return interaction.reply({ content: "Ten kanał nie jest w dozwolonej kategorii.", ephemeral: true });
            }

            const channelTopic = channel.topic;

            if (!channelTopic) {
                return interaction.reply({ content: "Kanał nie ma opisanego tematu.", ephemeral: true });
            }

            try {
                const claimCollection = await connectToDatabase_claimTicket();
                const methodsCollection = await connectToDatabase_methods();

                const ticketData = await claimCollection.findOne({ channelId: channel.id });

                if (ticketData) {
                    const claimerId = ticketData.claimerId;

                    if (claimerId === interaction.user.id) {
                        return interaction.reply({
                            content: "Już przejąłeś ten ticket.",
                            ephemeral: true,
                        });
                    }

                    if (claimerId && claimerId !== interaction.user.id) {
                        return interaction.reply({
                            content: `Ten ticket został już przejęty przez <@${claimerId}>.`,
                            ephemeral: true,
                        });
                    }
                }

                const claimerId = interaction.user.id;
                const userRoles = interaction.member.roles.cache.map(role => role.id);

                // Zmieniamy sposób obliczania limitu na stały limit 10
                const limit = 10;

                const existingTickets = await claimCollection.find({ claimerId }).toArray();
            

                const lines = channelTopic.split('\n');
                const creatorId = lines[0]?.trim();

                let creatorName = '';
                if (creatorId) {
                    try {
                        const member = await interaction.guild.members.fetch(creatorId);
                        creatorName = member.user.username;
                    } catch (error) {
                        console.error('Nie udało się znaleźć członka:', error);
                        return interaction.reply({ content: "Nie udało się znaleźć użytkownika.", ephemeral: true });
                    }
                }

                await claimCollection.insertOne({
                    channelId: channel.id,
                    claimerId,
                    creatorId,
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

                    const claimerUser = await client.users.fetch(claimerId);
                    const claimerName = claimerUser.username;

                    let embedMessage = '';
                    if (methodKey === 'blik' && userPaymentData?.methods?.blik) {
                        const phoneNumber = userPaymentData.methods.blik;
                        embedMessage = "**```💱 DreamShop™ × PŁATNOŚĆ BLIK```**\n" +
                            "**``👤`` × Płatność odbierze: <@" + claimerId + ">!**\n" +
                            "## ``💳`` × Numer telefonu: `" + phoneNumber + "`\n" +
                            "> - **`➖` × Odbiorca:** `" + claimerName + "`\n" +
                            "> - **`➖` × Tytuł:** `od " + creatorName + "`\n" +
                            "> - **`➖` × Pieniądze muszą pochodzić z twojego konta!**\n\n" +
                            "-# **`❗` Pieniądze wyślij zgodnie z powyższymi uwagami lub ich nie otrzymasz!**";
                    } else if (methodKey === 'skrill' && userPaymentData?.methods?.skrill) {
                        const email = userPaymentData.methods.skrill;
                        embedMessage = "**```💱 DreamShop™ × PŁATNOŚĆ SKRILL```**\n" +
                            "**``👤`` × Płatność odbierze: <@" + claimerId + ">!**\n" +
                            "## ``💳`` × Adres E-Mail: `" + email + "`\n" +
                            "> - **`➖` × Bez notatek**\n" +
                            "> - **`➖` × Wyślij potwierdzenie płatności!**\n\n" +
                            "-# **`❗` Pieniądze wyślij zgodnie z powyższymi uwagami lub ich nie otrzymasz!**";
                    } else if (methodKey === 'paypal' && userPaymentData?.methods?.paypal) {
                        const email = userPaymentData.methods.paypal;
                        embedMessage = "**```💱 DreamShop™ × PŁATNOŚĆ PAYPAL```**\n" +
                            "**``👤`` × Płatność odbierze: <@" + claimerId + ">!**\n" +
                            "## ``💳`` × Adres E-Mail: `" + email + "`\n" +
                            "> - **`➖` × Rodzina i znajomi**\n" +
                            "> - **`➖` × Bez notatek**\n" +
                            "> - **`➖` × Wyślij potwierdzenie płatności!**\n\n" +
                            "-# **`❗` Pieniądze wyślij zgodnie z powyższymi uwagami lub ich nie otrzymasz!**";
                    } else if (methodKey === 'zen' && userPaymentData?.methods?.zen) {
                        const phoneNumber = userPaymentData.methods.zen;
                        embedMessage = "**```💱 DreamShop™ × PŁATNOŚĆ ZEN```**\n" +
                            "**``👤`` × Płatność odbierze: <@" + claimerId + ">!**\n" +
                            "## ``💳`` × Numer telefonu: `" + phoneNumber + "`\n" +
                            "> - **`➖` × Odbiorca:** `" + claimerName + "`\n" +
                            "> - **`➖` × Wyślij potwierdzenie płatności!**\n\n" +
                            "-# **`❗` Pieniądze wyślij zgodnie z powyższymi uwagami lub ich nie otrzymasz!**";
                    } else if (methodKey === 'ltc' && userPaymentData?.methods?.ltc) {
                        const ltc = userPaymentData.methods.ltc;
                        embedMessage = "**```💱 DreamShop™ × PŁATNOŚĆ LITECOIN```**\n" +
                            "**``👤`` × Płatność odbierze: <@" + claimerId + ">!**\n" +
                            "## ``💳`` × Adres Litecoin: `" + ltc + "`\n" +
                            "> - **`➖` × Podaj Transaction ID**\n" +
                            "> - **`➖` × Wyślij potwierdzenie płatności!**\n\n" +
                            "-# **`❗` Pieniądze wyślij zgodnie z powyższymi uwagami lub ich nie otrzymasz!**";
                    }

                    if (embedMessage) {
                        const embed = new EmbedBuilder()
                            .setColor(config["Ogólne"].kolor)
                            .setTitle(' ')
                            .setDescription(embedMessage);

                        try {
                            await interaction.channel.send({ embeds: [embed] });
                        } catch (error) {
                            console.error('Nie udało się wysłać wiadomości DM:', error);
                        }
                    }
                }
                await interaction.reply({ content: "Ticket został pomyślnie przejęty.", ephemeral: true });
            } catch (error) {
                console.error("Błąd przy przejmowaniu ticketu:", error);
                await interaction.reply({ content: "Wystąpił błąd przy przejmowaniu ticketu.", ephemeral: true });
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
