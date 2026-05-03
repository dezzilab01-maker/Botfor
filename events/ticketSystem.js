
const { EmbedBuilder, ActionRowBuilder, PermissionFlagsBits, ChannelType, ButtonBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ButtonStyle, StringSelectMenuBuilder } = require('discord.js');
const client = require('..');
const fs = require('fs');


const allowedPaymentMethods = [
    "BLIK", "PAYPAL", "PP", "PSC", "PAYSAFECARD", "MYPSC", "MYPAYSAFECARD",
    "SKRILL", "REVOLUT", "ZEN", "CRYPTO", "LTC"
];



client.on('interactionCreate', async (interaction, msg) => {
    if (interaction.customId === "CATEGORY_SELECTED") {
        if (interaction.values[0] == "1") {

            const row = new ActionRowBuilder()
                .addComponents(
                    new StringSelectMenuBuilder()
                        .setCustomId("ZAMOWIENIE_SELECTED")
                        .setPlaceholder(config["zamowienie"].placeholder)
                        .addOptions([
                            {
                                label: (config["zamowienie"].label1),
                                description: (config["zamowienie"].description1),
                                emoji: (config["zamowienie"].emoji1),
                                value: '1',
                            },
                            {
                                label: (config["zamowienie"].label2),
                                description: (config["zamowienie"].description2),
                                emoji: (config["zamowienie"].emoji2),
                                value: '2',
                            },
                            {
                                label: (config["zamowienie"].label3),
                                description: (config["zamowienie"].description3),
                                emoji: (config["zamowienie"].emoji3),
                                value: '3',
                            },
                            {
                                label: (config["zamowienie"].label4),
                                description: (config["zamowienie"].description4),
                                emoji: (config["zamowienie"].emoji4),
                                value: '4',
                            },
                            {
                                label: (config["zamowienie"].label5),
                                description: (config["zamowienie"].description5),
                                emoji: (config["zamowienie"].emoji5),
                                value: '5',
                            },
                            {
                                label: (config["zamowienie"].label6),
                                description: (config["zamowienie"].description6),
                                emoji: (config["zamowienie"].emoji6),
                                value: '6',
                            },
                            {
                                label: (config["zamowienie"].label7),
                                description: (config["zamowienie"].description7),
                                emoji: (config["zamowienie"].emoji7),
                                value: '7',
                            },
                            {
                                label: (config["zamowienie"].label8),
                                description: (config["zamowienie"].description8),
                                emoji: (config["zamowienie"].emoji8),
                                value: '8',
                            },
                            {
                                label: (config["zamowienie"].label9),
                                description: (config["zamowienie"].description9),
                                emoji: (config["zamowienie"].emoji9),
                                value: '9',
                            },
                            {
                                label: (config["zamowienie"].label10),
                                description: (config["zamowienie"].description10),
                                emoji: (config["zamowienie"].emoji10),
                                value: '10',
                            },
                        ])

                )
            interaction.reply({ components: [row], ephemeral: true });
            interaction.message.edit({ components: [interaction.message.components[0]] });

        }
    }
})

client.on('interactionCreate', async (interaction, msg) => {
    if (interaction.customId === "ZAMOWIENIE_SELECTED") {
        if (interaction.values[0] == "1") {
            const modal = new ModalBuilder()
                .setCustomId('TICKET11')
                .setTitle('Kategoria: Restock');
            const opis1 = new TextInputBuilder()
                .setCustomId('opis11')
                .setLabel("PRODUKT:")
                .setPlaceholder('Przykład: N1tro Boost 1msc')
                .setStyle(TextInputStyle.Short)
                .setRequired(true);
            const opis2 = new TextInputBuilder()
                .setCustomId('opis22')
                .setLabel("ILOŚĆ:")
                .setPlaceholder('Przykład: 1')
                .setStyle(TextInputStyle.Short)
                .setRequired(true);
            const opis3 = new TextInputBuilder()
                .setCustomId('opis33')
                .setLabel("METODA PŁATNOŚCI:")
                .setPlaceholder('Przykład: BLIK')
                .setStyle(TextInputStyle.Short)
                .setRequired(true);
            const opis4 = new TextInputBuilder()
                .setCustomId('opis44')
                .setLabel("OD KOGO CHCESZ ZAKUPIĆ:")
                .setPlaceholder('Przykład: Solti')
                .setStyle(TextInputStyle.Short)
                .setRequired(true);

            const opis11 = new ActionRowBuilder().addComponents(opis1);
            const opis22 = new ActionRowBuilder().addComponents(opis2);
            const opis33 = new ActionRowBuilder().addComponents(opis3);
            const opis44 = new ActionRowBuilder().addComponents(opis4);

            modal.addComponents(opis11, opis22, opis33, opis44);

            interaction.showModal(modal);

        }
    }
    if (interaction.customId === "ZAMOWIENIE_SELECTED") {
        if (interaction.values[0] == "2") {
            const modal = new ModalBuilder()
                .setCustomId('TICKET12')
                .setTitle('Kategoria: N1TR0');
            const opis1 = new TextInputBuilder()
                .setCustomId('opis11')
                .setLabel("PRODUKT:")
                .setPlaceholder('Przykład: N1tro Boost 1msc')
                .setStyle(TextInputStyle.Short)
                .setRequired(true);
            const opis2 = new TextInputBuilder()
                .setCustomId('opis22')
                .setLabel("ILOŚĆ:")
                .setPlaceholder('Przykład: 1')
                .setStyle(TextInputStyle.Short)
                .setRequired(true);
            const opis3 = new TextInputBuilder()
                .setCustomId('opis33')
                .setLabel("METODA PŁATNOŚCI:")
                .setPlaceholder('Przykład: BLIK')
                .setStyle(TextInputStyle.Short)
                .setRequired(true);

            const opis11 = new ActionRowBuilder().addComponents(opis1);
            const opis22 = new ActionRowBuilder().addComponents(opis2);
            const opis33 = new ActionRowBuilder().addComponents(opis3);

            modal.addComponents(opis11, opis22, opis33);

            interaction.showModal(modal);

        }
    }
    if (interaction.customId === "ZAMOWIENIE_SELECTED") {
        if (interaction.values[0] == "3") {
            const modal = new ModalBuilder()
                .setCustomId('TICKET13')
                .setTitle('Kategoria: KONTA DISCORD');
            const opis1 = new TextInputBuilder()
                .setCustomId('opis11')
                .setLabel("PRODUKT:")
                .setPlaceholder('Przykład: N1tro Boost 1msc')
                .setStyle(TextInputStyle.Short)
                .setRequired(true);
            const opis2 = new TextInputBuilder()
                .setCustomId('opis22')
                .setLabel("ILOŚĆ:")
                .setPlaceholder('Przykład: 1')
                .setStyle(TextInputStyle.Short)
                .setRequired(true);
            const opis3 = new TextInputBuilder()
                .setCustomId('opis33')
                .setLabel("METODA PŁATNOŚCI:")
                .setPlaceholder('Przykład: BLIK')
                .setStyle(TextInputStyle.Short)
                .setRequired(true);

            const opis11 = new ActionRowBuilder().addComponents(opis1);
            const opis22 = new ActionRowBuilder().addComponents(opis2);
            const opis33 = new ActionRowBuilder().addComponents(opis3);

            modal.addComponents(opis11, opis22, opis33);

            interaction.showModal(modal);

        }
    }
    if (interaction.customId === "ZAMOWIENIE_SELECTED") {
        if (interaction.values[0] == "4") {
            const modal = new ModalBuilder()
                .setCustomId('TICKET14')
                .setTitle('Kategoria: M3MBERS');
            const opis1 = new TextInputBuilder()
                .setCustomId('opis11')
                .setLabel("PRODUKT:")
                .setPlaceholder('Przykład: N1tro Boost 1msc')
                .setStyle(TextInputStyle.Short)
                .setRequired(true);
            const opis2 = new TextInputBuilder()
                .setCustomId('opis22')
                .setLabel("ILOŚĆ:")
                .setPlaceholder('Przykład: 1')
                .setStyle(TextInputStyle.Short)
                .setRequired(true);
            const opis3 = new TextInputBuilder()
                .setCustomId('opis33')
                .setLabel("METODA PŁATNOŚCI:")
                .setPlaceholder('Przykład: BLIK')
                .setStyle(TextInputStyle.Short)
                .setRequired(true);

            const opis11 = new ActionRowBuilder().addComponents(opis1);
            const opis22 = new ActionRowBuilder().addComponents(opis2);
            const opis33 = new ActionRowBuilder().addComponents(opis3);

            modal.addComponents(opis11, opis22, opis33);

            interaction.showModal(modal);

        }
    }
    if (interaction.customId === "ZAMOWIENIE_SELECTED") {
        if (interaction.values[0] == "5") {
            const modal = new ModalBuilder()
                .setCustomId('TICKET15')
                .setTitle('Kategoria: GRY');
            const opis1 = new TextInputBuilder()
                .setCustomId('opis11')
                .setLabel("PRODUKT:")
                .setPlaceholder('Przykład: N1tro Boost 1msc')
                .setStyle(TextInputStyle.Short)
                .setRequired(true);
            const opis2 = new TextInputBuilder()
                .setCustomId('opis22')
                .setLabel("ILOŚĆ:")
                .setPlaceholder('Przykład: 1')
                .setStyle(TextInputStyle.Short)
                .setRequired(true);
            const opis3 = new TextInputBuilder()
                .setCustomId('opis33')
                .setLabel("METODA PŁATNOŚCI:")
                .setPlaceholder('Przykład: BLIK')
                .setStyle(TextInputStyle.Short)
                .setRequired(true);

            const opis11 = new ActionRowBuilder().addComponents(opis1);
            const opis22 = new ActionRowBuilder().addComponents(opis2);
            const opis33 = new ActionRowBuilder().addComponents(opis3);

            modal.addComponents(opis11, opis22, opis33);

            interaction.showModal(modal);

        }
    }
    if (interaction.customId === "ZAMOWIENIE_SELECTED") {
        if (interaction.values[0] == "6") {
            const modal = new ModalBuilder()
                .setCustomId('TICKET16')
                .setTitle('Kategoria: KONTA');
            const opis1 = new TextInputBuilder()
                .setCustomId('opis11')
                .setLabel("PRODUKT:")
                .setPlaceholder('Przykład: N1tro Boost 1msc')
                .setStyle(TextInputStyle.Short)
                .setRequired(true);
            const opis2 = new TextInputBuilder()
                .setCustomId('opis22')
                .setLabel("ILOŚĆ:")
                .setPlaceholder('Przykład: 1')
                .setStyle(TextInputStyle.Short)
                .setRequired(true);
            const opis3 = new TextInputBuilder()
                .setCustomId('opis33')
                .setLabel("METODA PŁATNOŚCI:")
                .setPlaceholder('Przykład: BLIK')
                .setStyle(TextInputStyle.Short)
                .setRequired(true);

            const opis11 = new ActionRowBuilder().addComponents(opis1);
            const opis22 = new ActionRowBuilder().addComponents(opis2);
            const opis33 = new ActionRowBuilder().addComponents(opis3);

            modal.addComponents(opis11, opis22, opis33);

            interaction.showModal(modal);

        }
    }
    if (interaction.customId === "ZAMOWIENIE_SELECTED") {
        if (interaction.values[0] == "7") {
            const modal = new ModalBuilder()
                .setCustomId('TICKET17')
                .setTitle('Kategoria: SOCIAL B00ST');
            const opis1 = new TextInputBuilder()
                .setCustomId('opis11')
                .setLabel("PRODUKT:")
                .setPlaceholder('Przykład: N1tro Boost 1msc')
                .setStyle(TextInputStyle.Short)
                .setRequired(true);
            const opis2 = new TextInputBuilder()
                .setCustomId('opis22')
                .setLabel("ILOŚĆ:")
                .setPlaceholder('Przykład: 1')
                .setStyle(TextInputStyle.Short)
                .setRequired(true);
            const opis3 = new TextInputBuilder()
                .setCustomId('opis33')
                .setLabel("METODA PŁATNOŚCI:")
                .setPlaceholder('Przykład: BLIK')
                .setStyle(TextInputStyle.Short)
                .setRequired(true);

            const opis11 = new ActionRowBuilder().addComponents(opis1);
            const opis22 = new ActionRowBuilder().addComponents(opis2);
            const opis33 = new ActionRowBuilder().addComponents(opis3);

            modal.addComponents(opis11, opis22, opis33);

            interaction.showModal(modal);

        }
    }
    if (interaction.customId === "ZAMOWIENIE_SELECTED") {
        if (interaction.values[0] == "8") {
            const modal = new ModalBuilder()
                .setCustomId('TICKET18')
                .setTitle('Kategoria: SZKOŁA');
            const opis1 = new TextInputBuilder()
                .setCustomId('opis11')
                .setLabel("PRODUKT:")
                .setPlaceholder('Przykład: N1tro Boost 1msc')
                .setStyle(TextInputStyle.Short)
                .setRequired(true);
            const opis2 = new TextInputBuilder()
                .setCustomId('opis22')
                .setLabel("ILOŚĆ:")
                .setPlaceholder('Przykład: 1')
                .setStyle(TextInputStyle.Short)
                .setRequired(true);
            const opis3 = new TextInputBuilder()
                .setCustomId('opis33')
                .setLabel("METODA PŁATNOŚCI:")
                .setPlaceholder('Przykład: BLIK')
                .setStyle(TextInputStyle.Short)
                .setRequired(true);

            const opis11 = new ActionRowBuilder().addComponents(opis1);
            const opis22 = new ActionRowBuilder().addComponents(opis2);
            const opis33 = new ActionRowBuilder().addComponents(opis3);

            modal.addComponents(opis11, opis22, opis33);

            interaction.showModal(modal);

        }
    }
    if (interaction.customId === "ZAMOWIENIE_SELECTED") {
        if (interaction.values[0] == "9") {
            const modal = new ModalBuilder()
                .setCustomId('TICKET19')
                .setTitle('Kategoria: METODY I DOSTAWY');
            const opis1 = new TextInputBuilder()
                .setCustomId('opis11')
                .setLabel("PRODUKT:")
                .setPlaceholder('Przykład: N1tro Boost 1msc')
                .setStyle(TextInputStyle.Short)
                .setRequired(true);
            const opis2 = new TextInputBuilder()
                .setCustomId('opis22')
                .setLabel("ILOŚĆ:")
                .setPlaceholder('Przykład: 1')
                .setStyle(TextInputStyle.Short)
                .setRequired(true);
            const opis3 = new TextInputBuilder()
                .setCustomId('opis33')
                .setLabel("METODA PŁATNOŚCI:")
                .setPlaceholder('Przykład: BLIK')
                .setStyle(TextInputStyle.Short)
                .setRequired(true);

            const opis11 = new ActionRowBuilder().addComponents(opis1);
            const opis22 = new ActionRowBuilder().addComponents(opis2);
            const opis33 = new ActionRowBuilder().addComponents(opis3);

            modal.addComponents(opis11, opis22, opis33);

            interaction.showModal(modal);

        }
    }
    if (interaction.customId === "ZAMOWIENIE_SELECTED") {
        if (interaction.values[0] == "10") {
            const modal = new ModalBuilder()
                .setCustomId('TICKET21')
                .setTitle('Kategoria: INNE USŁUGI');
            const opis1 = new TextInputBuilder()
                .setCustomId('opis11')
                .setLabel("PRODUKT:")
                .setPlaceholder('Przykład: N1tro Boost 1msc')
                .setStyle(TextInputStyle.Short)
                .setRequired(true);
            const opis2 = new TextInputBuilder()
                .setCustomId('opis22')
                .setLabel("ILOŚĆ:")
                .setPlaceholder('Przykład: 1')
                .setStyle(TextInputStyle.Short)
                .setRequired(true);
            const opis3 = new TextInputBuilder()
                .setCustomId('opis33')
                .setLabel("METODA PŁATNOŚCI:")
                .setPlaceholder('Przykład: BLIK')
                .setStyle(TextInputStyle.Short)
                .setRequired(true);

            const opis11 = new ActionRowBuilder().addComponents(opis1);
            const opis22 = new ActionRowBuilder().addComponents(opis2);
            const opis33 = new ActionRowBuilder().addComponents(opis3);

            modal.addComponents(opis11, opis22, opis33);

            interaction.showModal(modal);

        }
    }
    if (interaction.customId === "USTAWIENIA_ZAMOWIENIE_CLOSE_YES") {
        const modal = new ModalBuilder()
            .setCustomId('TICKET_CLOSE_YES')
            .setTitle('Kategoria: Zamówienie');
        const opis1 = new TextInputBuilder()
            .setCustomId('opis11')
            .setLabel("ILOŚĆ:")
            .setPlaceholder('Przykład: 1')
            .setStyle(TextInputStyle.Short)
            .setRequired(true);
        const opis2 = new TextInputBuilder()
            .setCustomId('opis22')
            .setLabel("PRODUKT:")
            .setPlaceholder('Przykład: N1tro Boost 1msc')
            .setStyle(TextInputStyle.Short)
            .setRequired(true);
        const opis3 = new TextInputBuilder()
            .setCustomId('opis33')
            .setLabel("CENA:")
            .setPlaceholder('Przykład: 100')
            .setStyle(TextInputStyle.Short)
            .setRequired(true);
        const opis4 = new TextInputBuilder()
            .setCustomId('opis44')
            .setLabel("METODA PŁATNOŚCI:")
            .setPlaceholder('Przykład: BLIK')
            .setStyle(TextInputStyle.Short)
            .setRequired(true);

        const opis11 = new ActionRowBuilder().addComponents(opis1);
        const opis22 = new ActionRowBuilder().addComponents(opis2);
        const opis33 = new ActionRowBuilder().addComponents(opis3);
        const opis44 = new ActionRowBuilder().addComponents(opis4);

        modal.addComponents(opis11, opis22, opis33, opis44);

        interaction.showModal(modal);

    }
    if (interaction.customId === "CATEGORY_SELECTED") {
        if (interaction.values[0] == "2") {
            const modal = new ModalBuilder()
                .setCustomId('TICKET2')
                .setTitle('Kategoria: Reklamacje');

            const opis1 = new TextInputBuilder()
                .setCustomId('opis11')
                .setLabel("PRODUKT:")
                .setPlaceholder('Przykład: Netflix')
                .setStyle(TextInputStyle.Short)
                .setRequired(true);
            const opis2 = new TextInputBuilder()
                .setCustomId('opis22')
                .setLabel("U KOGO ZAKUPIŁEŚ PRODUKT:")
                .setPlaceholder('Przykład: Solti')
                .setStyle(TextInputStyle.Short)
                .setRequired(true);
            const opis3 = new TextInputBuilder()
                .setCustomId('opis33')
                .setLabel("DATA ZAKUPU PRODUKTU:")
                .setPlaceholder('Przykład: 5.05.2024 18:21')
                .setStyle(TextInputStyle.Short)
                .setRequired(true);
            const opis4 = new TextInputBuilder()
                .setCustomId('opis44')
                .setLabel("OPIS SYTUACJI:")
                .setPlaceholder('Przykład: Wyrzucono mnie z rodziny')
                .setStyle(TextInputStyle.Short)
                .setRequired(true);

            const opis11 = new ActionRowBuilder().addComponents(opis1);
            const opis22 = new ActionRowBuilder().addComponents(opis2);
            const opis33 = new ActionRowBuilder().addComponents(opis3);
            const opis44 = new ActionRowBuilder().addComponents(opis4);

            modal.addComponents(opis11, opis22, opis33, opis44);

            interaction.showModal(modal);
            interaction.message.edit({ components: [interaction.message.components[0]] });

        }
    }
    if (interaction.customId === "CATEGORY_SELECTED") {
        if (interaction.values[0] == "3") {
            const modal = new ModalBuilder()
                .setCustomId('TICKET3')
                .setTitle('Kategoria: Skup');

            const opis1 = new TextInputBuilder()
                .setCustomId('opis11')
                .setLabel("CO CHCESZ SPRZEDAĆ:")
                .setPlaceholder('Przykład: Konto Fortnite')
                .setStyle(TextInputStyle.Short)
                .setRequired(true);
            const opis2 = new TextInputBuilder()
                .setCustomId('opis22')
                .setLabel("ZA JAKĄ CENĘ:")
                .setPlaceholder('Przykład: 100 (podaj w PLN)')
                .setStyle(TextInputStyle.Short)
                .setRequired(true);
            const opis3 = new TextInputBuilder()
                .setCustomId('opis33')
                .setLabel("CO ZAWIERA KONTO:")
                .setPlaceholder('Przykład: 3 odznaki, 5 skinów')
                .setStyle(TextInputStyle.Short)
                .setRequired(true);


            const opis11 = new ActionRowBuilder().addComponents(opis1);
            const opis22 = new ActionRowBuilder().addComponents(opis2);
            const opis33 = new ActionRowBuilder().addComponents(opis3);

            modal.addComponents(opis11, opis22, opis33);

            interaction.showModal(modal);
            interaction.message.edit({ components: [interaction.message.components[0]] });

        }
    }
    if (interaction.customId === "CATEGORY_SELECTED") {
        if (interaction.values[0] == "4") {
            const modal = new ModalBuilder()
                .setCustomId('TICKET4')
                .setTitle('Kategoria: Middleman');

            const opis1 = new TextInputBuilder()
                .setCustomId('opis11')
                .setLabel("PRODUKT:")
                .setPlaceholder('Przykład: Fortnite Account')
                .setStyle(TextInputStyle.Short)
                .setRequired(true);
            const opis2 = new TextInputBuilder()
                .setCustomId('opis22')
                .setLabel("CENA:")
                .setPlaceholder('Przykład: 100 (podaj w PLN)')
                .setStyle(TextInputStyle.Short)
                .setRequired(true);
            const opis3 = new TextInputBuilder()
                .setCustomId('opis33')
                .setLabel("METODA PŁATNOŚCI:")
                .setPlaceholder('Przykład: BLIK')
                .setStyle(TextInputStyle.Short)
                .setRequired(true);
            const opis4 = new TextInputBuilder()
                .setCustomId('opis44')
                .setLabel("ID OSOBY:")
                .setPlaceholder('Przykład: 378733482802806786')
                .setStyle(TextInputStyle.Short)
                .setRequired(true);


            const opis11 = new ActionRowBuilder().addComponents(opis1);
            const opis22 = new ActionRowBuilder().addComponents(opis2);
            const opis33 = new ActionRowBuilder().addComponents(opis3);
            const opis44 = new ActionRowBuilder().addComponents(opis4);

            modal.addComponents(opis11, opis22, opis33, opis44);

            interaction.showModal(modal);
            interaction.message.edit({ components: [interaction.message.components[0]] });

        }
    }
    if (interaction.customId === "CATEGORY_SELECTED") {
        if (interaction.values[0] == "5") {

            const embed = new EmbedBuilder()
                .setDescription('Tworzenie ticketa w kategorii **pomoc** nie jest ticketem dla **reklamacji.**\nReklamacja, to zgłoszenie błędnego bądź niedziałającego produktu, zakupionego na naszym sklepie.\n\n**Czy jesteś pewien, że chcesz kontynuować?**')
                .setColor(config["Ogólne"].kolor);


            const buttons = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setLabel('Tak, chodzi mi o pomoc.')
                        .setStyle(ButtonStyle.Secondary)
                        .setCustomId('pomoc_accept_button')
                )
                .addComponents(
                    new ButtonBuilder()
                        .setLabel('Nie, chodzi mi o reklamację.')
                        .setStyle(ButtonStyle.Danger)
                        .setCustomId('pomoc_deny_button')
                )

            await interaction.reply({
                embeds: [embed],
                components: [buttons],
                ephemeral: true,
            });
            interaction.message.edit({ components: [interaction.message.components[0]] });

        }
    }
    if (interaction.customId === "pomoc_accept_button") {
        const modal = new ModalBuilder()
            .setCustomId('TICKET5')
            .setTitle('Kategoria: Pomoc');

        const opis1 = new TextInputBuilder()
            .setCustomId('opis11')
            .setLabel("OPISZ SWÓJ PROBLEM/SPRAWĘ:")
            .setPlaceholder('Przykład: Czy sprzedajecie też inne rzeczy?')
            .setStyle(TextInputStyle.Short)
            .setRequired(true);



        const opis11 = new ActionRowBuilder().addComponents(opis1);

        modal.addComponents(opis11);

        interaction.showModal(modal);

    }
    if (interaction.customId === "pomoc_deny_button") {
        const modal = new ModalBuilder()
            .setCustomId('TICKET2')
            .setTitle('Kategoria: Reklamacje');

        const opis1 = new TextInputBuilder()
            .setCustomId('opis11')
            .setLabel("PRODUKT:")
            .setPlaceholder('Przykład: Netflix')
            .setStyle(TextInputStyle.Short)
            .setRequired(true);
        const opis2 = new TextInputBuilder()
            .setCustomId('opis22')
            .setLabel("U KOGO ZAKUPIŁEŚ PRODUKT:")
            .setPlaceholder('Przykład: Solti')
            .setStyle(TextInputStyle.Short)
            .setRequired(true);
        const opis3 = new TextInputBuilder()
            .setCustomId('opis33')
            .setLabel("DATA ZAKUPU PRODUKTU:")
            .setPlaceholder('Przykład: 5.05.2024 18:21')
            .setStyle(TextInputStyle.Short)
            .setRequired(true);
        const opis4 = new TextInputBuilder()
            .setCustomId('opis44')
            .setLabel("OPIS SYTUACJI:")
            .setPlaceholder('Przykład: Wyrzucono mnie z rodziny')
            .setStyle(TextInputStyle.Short)
            .setRequired(true);

        const opis11 = new ActionRowBuilder().addComponents(opis1);
        const opis22 = new ActionRowBuilder().addComponents(opis2);
        const opis33 = new ActionRowBuilder().addComponents(opis3);
        const opis44 = new ActionRowBuilder().addComponents(opis4);

        modal.addComponents(opis11, opis22, opis33, opis44);

        interaction.showModal(modal);

    }
})
client.on("interactionCreate", async (interaction) => {
    if (interaction.customId === "TICKET11") {
        const opis1 = interaction.fields.getTextInputValue('opis11');
        const opis2 = interaction.fields.getTextInputValue('opis22');
        const opis3 = interaction.fields.getTextInputValue('opis33');
        const opis4 = interaction.fields.getTextInputValue('opis44');

        const allowedCategories = [config["ticket"].category_zamowienia1, config["ticket"].category_zamowienia2, config["ticket"].category_zamowienia3, config["ticket"].category_zamowienia4, config["ticket"].category_zamowienia5, config["ticket"].category_zamowienia6, config["ticket"].category_zamowienia7, config["ticket"].category_zamowienia8, config["ticket"].category_zamowienia9];

        if (interaction.guild.channels.cache.some(ch => {
            const topic = ch.topic;

            if (topic && allowedCategories.includes(ch.parentId)) {
                const lines = topic.split('\n');
                return lines.some(line => line.split(" | ")[0] === interaction.user.id);
            }
            return false;
        })) {
            return interaction.reply({ content: "Możesz posiadać maksymalnie **1** otwarty ticket z zamówieniem.", ephemeral: true });
        }

        if (!allowedPaymentMethods.includes(opis3.toUpperCase())) {
            return interaction.reply({
                content: "Nieprawidłowa metoda płatności. Dostępne metody płatności:\n\n**BLIK, PAYPAL, PP, PSC, PAYSAFECARD, MYPSC, MYPAYSAFECARD, SKRILL, REVOLUT, ZEN, CRYPTO, LTC.**",
                ephemeral: true,
            });
        }

        const topic = `${interaction.user.id}\n${opis1}\n${opis2}\n${opis3.toUpperCase()}`;
        let kat;
        const maxChannels = 50; // Maksymalna liczba kanałów w jednej kategorii
       const category1 = interaction.guild.channels.cache.get(config["ticket"].category_zamowienia1);
const category2 = interaction.guild.channels.cache.get("1331200036368945195");
const category3 = interaction.guild.channels.cache.get("1331200047869857856");
        function isCategoryFull(category) {
    return category.children.cache.size >= maxChannels;
}
        
        if (!isCategoryFull(category1)) {
    kat = category1;
} else if (!isCategoryFull(category2)) {
    kat = category2;
} else if (!isCategoryFull(category3)) {
    kat = category3;
} 
       
        interaction.guild.channels.create({
            name: config["ticketopen11"].ticketname.replace("{user}", interaction.user.username),
            type: ChannelType.GuildText,
            topic: topic,
            parent: kat.id,
            permissionOverwrites: [
                {
                    id: interaction.guild.id,
                    deny: [PermissionFlagsBits.ViewChannel]
                },
                {
                    id: interaction.user.id,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles]
                },
                {
                    id: config["ticket"].ranga1,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles],
                },
                {
                    id: config["ticket"].ranga_zamowienia0,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles],
                },
                {
                    id: config["ticket"].ranga_zamowienia1,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles],
                },
            ]
        }).then(channel => {
            const embed = new EmbedBuilder()
                .setTitle(config["ticketopen11"].title)
                .setDescription(config["ticketopen11"].description.replace("{opis1}", opis1).replace("{opis2}", opis2).replace("{opis4}", opis4).replace("{opis3}", opis3.toUpperCase()).replace("{ping}", interaction.user.id).replace("{nick}", interaction.user.username).replace("{id}", interaction.user.id).replace("{opis}", opis1.replaceAll(/`/g, '').replaceAll("\n", " ")))
                .setColor(config["Ogólne"].kolor)
                .setImage(config["ticketopen11"].image)
                .setFooter({ text: (config["ticketopen11"].footer), iconURL: client.user.displayAvatarURL() })
                .setTimestamp()
            const row = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setStyle("Secondary")
                        .setCustomId("USTAWIENIA_TICKET-ZAMOWIENIE-2")
                        .setEmoji(config["ticketopen11"].button_emoji1)
                        .setLabel(config["ticketopen11"].button_label1)
                )
                .addComponents(
                    new ButtonBuilder()
                        .setStyle("Secondary")
                        .setCustomId("USTAWIENIA_TICKET-ZAMOWIENIE-1")
                        .setEmoji(config["ticketopen11"].button_emoji2)
                        .setLabel(config["ticketopen11"].button_label2)
                )

            channel.send({ content: (config["ticketopen11"].content), embeds: [embed], components: [row] })
            interaction.reply({ content: `**DreamShop™ ×** Pomyślnie utworzono ticket: ${channel}`, ephemeral: true });

        })
    }
    if (interaction.customId === "TICKET12") {
        const opis1 = interaction.fields.getTextInputValue('opis11');
        const opis2 = interaction.fields.getTextInputValue('opis22');
        const opis3 = interaction.fields.getTextInputValue('opis33');

        const allowedCategories = [config["ticket"].category_zamowienia1, config["ticket"].category_zamowienia2, config["ticket"].category_zamowienia3, config["ticket"].category_zamowienia4, config["ticket"].category_zamowienia5, config["ticket"].category_zamowienia6, config["ticket"].category_zamowienia7, config["ticket"].category_zamowienia8, config["ticket"].category_zamowienia9];

        if (interaction.guild.channels.cache.some(ch => {
            const topic = ch.topic;

            if (topic && allowedCategories.includes(ch.parentId)) {
                const lines = topic.split('\n');
                return lines.some(line => line.split(" | ")[0] === interaction.user.id);
            }
            return false;
        })) {
            return interaction.reply({ content: "Możesz posiadać maksymalnie **1** otwarty ticket z zamówieniem.", ephemeral: true });
        }

        if (!allowedPaymentMethods.includes(opis3.toUpperCase())) {
            return interaction.reply({
                content: "Nieprawidłowa metoda płatności. Dostępne metody płatności:\n\n**BLIK, PAYPAL, PP, PSC, PAYSAFECARD, MYPSC, MYPAYSAFECARD, SKRILL, REVOLUT, ZEN, CRYPTO, LTC.**",
                ephemeral: true,
            });
        }

        const topic = `${interaction.user.id}\n${opis1}\n${opis2}\n${opis3.toUpperCase()}`;
        let kat;
        const maxChannels = 50; // Maksymalna liczba kanałów w jednej kategorii
       const category1 = interaction.guild.channels.cache.get(config["ticket"].category_zamowienia1);
const category2 = interaction.guild.channels.cache.get("1331200036368945195");
const category3 = interaction.guild.channels.cache.get("1331200047869857856");
        function isCategoryFull(category) {
    return category.children.cache.size >= maxChannels;
}
        
        if (!isCategoryFull(category1)) {
    kat = category1;
} else if (!isCategoryFull(category2)) {
    kat = category2;
} else if (!isCategoryFull(category3)) {
    kat = category3;
} 
        interaction.guild.channels.create({
            name: config["ticketopen12"].ticketname.replace("{user}", interaction.user.username),
            type: ChannelType.GuildText,
            topic: topic,
            parent: kat.id,
            permissionOverwrites: [
                {
                    id: interaction.guild.id,
                    deny: [PermissionFlagsBits.ViewChannel]
                },
                {
                    id: interaction.user.id,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles]
                },
                {
                    id: config["ticket"].ranga1,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles],
                },
                {
                    id: config["ticket"].ranga_zamowienia0,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles],
                },
                {
                    id: config["ticket"].ranga_zamowienia2,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles],
                },
            ]
        }).then(channel => {
            const embed = new EmbedBuilder()
                .setTitle(config["ticketopen12"].title)
                .setDescription(config["ticketopen12"].description.replace("{opis1}", opis1).replace("{opis2}", opis2).replace("{opis3}", opis3.toUpperCase()).replace("{ping}", interaction.user.id).replace("{nick}", interaction.user.username).replace("{id}", interaction.user.id).replace("{opis}", opis1.replaceAll(/`/g, '').replaceAll("\n", " ")))
                .setColor(config["Ogólne"].kolor)
                .setImage(config["ticketopen12"].image)
                .setFooter({ text: (config["ticketopen12"].footer), iconURL: client.user.displayAvatarURL() })
                .setTimestamp()
            const row = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setStyle("Secondary")
                        .setCustomId("USTAWIENIA_TICKET-ZAMOWIENIE-2")
                        .setEmoji(config["ticketopen12"].button_emoji1)
                        .setLabel(config["ticketopen12"].button_label1)
                )
                .addComponents(
                    new ButtonBuilder()
                        .setStyle("Secondary")
                        .setCustomId("USTAWIENIA_TICKET-ZAMOWIENIE-1")
                        .setEmoji(config["ticketopen12"].button_emoji2)
                        .setLabel(config["ticketopen12"].button_label2)
                )

            channel.send({ content: (config["ticketopen12"].content), embeds: [embed], components: [row] })
            interaction.reply({ content: `**DreamShop™ ×** Pomyślnie utworzono ticket: ${channel}`, ephemeral: true });

        })
    }
    if (interaction.customId === "TICKET13") {
        const opis1 = interaction.fields.getTextInputValue('opis11');
        const opis2 = interaction.fields.getTextInputValue('opis22');
        const opis3 = interaction.fields.getTextInputValue('opis33');

        const allowedCategories = [config["ticket"].category_zamowienia1, config["ticket"].category_zamowienia2, config["ticket"].category_zamowienia3, config["ticket"].category_zamowienia4, config["ticket"].category_zamowienia5, config["ticket"].category_zamowienia6, config["ticket"].category_zamowienia7, config["ticket"].category_zamowienia8, config["ticket"].category_zamowienia9];

        if (interaction.guild.channels.cache.some(ch => {
            const topic = ch.topic;

            if (topic && allowedCategories.includes(ch.parentId)) {
                const lines = topic.split('\n');
                return lines.some(line => line.split(" | ")[0] === interaction.user.id);
            }
            return false;
        })) {
            return interaction.reply({ content: "Możesz posiadać maksymalnie **1** otwarty ticket z zamówieniem.", ephemeral: true });
        }

        if (!allowedPaymentMethods.includes(opis3.toUpperCase())) {
            return interaction.reply({
                content: "Nieprawidłowa metoda płatności. Dostępne metody płatności:\n\n**BLIK, PAYPAL, PP, PSC, PAYSAFECARD, MYPSC, MYPAYSAFECARD, SKRILL, REVOLUT, ZEN, CRYPTO, LTC.**",
                ephemeral: true,
            });
        }

        const topic = `${interaction.user.id}\n${opis1}\n${opis2}\n${opis3.toUpperCase()}`;
        let kat;
        const maxChannels = 50; // Maksymalna liczba kanałów w jednej kategorii
       const category1 = interaction.guild.channels.cache.get(config["ticket"].category_zamowienia1);
const category2 = interaction.guild.channels.cache.get("1331200036368945195");
const category3 = interaction.guild.channels.cache.get("1331200047869857856");
        function isCategoryFull(category) {
    return category.children.cache.size >= maxChannels;
}
        
        if (!isCategoryFull(category1)) {
    kat = category1;
} else if (!isCategoryFull(category2)) {
    kat = category2;
} else if (!isCategoryFull(category3)) {
    kat = category3;
} 
        interaction.guild.channels.create({
            name: config["ticketopen13"].ticketname.replace("{user}", interaction.user.username),
            type: ChannelType.GuildText,
            topic: topic,
            parent: kat.id,
            permissionOverwrites: [
                {
                    id: interaction.guild.id,
                    deny: [PermissionFlagsBits.ViewChannel]
                },
                {
                    id: interaction.user.id,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles]
                },
                {
                    id: config["ticket"].ranga1,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles],
                },
                {
                    id: config["ticket"].ranga_zamowienia0,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles],
                },
                {
                    id: config["ticket"].ranga_zamowienia3,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles],
                },
            ]
        }).then(channel => {
            const embed = new EmbedBuilder()
                .setTitle(config["ticketopen13"].title)
                .setDescription(config["ticketopen13"].description.replace("{opis1}", opis1).replace("{opis2}", opis2).replace("{opis3}", opis3.toUpperCase()).replace("{ping}", interaction.user.id).replace("{nick}", interaction.user.username).replace("{id}", interaction.user.id).replace("{opis}", opis1.replaceAll(/`/g, '').replaceAll("\n", " ")))
                .setColor(config["Ogólne"].kolor)
                .setImage(config["ticketopen13"].image)
                .setFooter({ text: (config["ticketopen13"].footer), iconURL: client.user.displayAvatarURL() })
                .setTimestamp()
            const row = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setStyle("Secondary")
                        .setCustomId("USTAWIENIA_TICKET-ZAMOWIENIE-2")
                        .setEmoji(config["ticketopen13"].button_emoji1)
                        .setLabel(config["ticketopen13"].button_label1)
                )
                .addComponents(
                    new ButtonBuilder()
                        .setStyle("Secondary")
                        .setCustomId("USTAWIENIA_TICKET-ZAMOWIENIE-1")
                        .setEmoji(config["ticketopen13"].button_emoji2)
                        .setLabel(config["ticketopen13"].button_label2)
                )

            channel.send({ content: (config["ticketopen13"].content), embeds: [embed], components: [row] })
            interaction.reply({ content: `**DreamShop™ ×** Pomyślnie utworzono ticket: ${channel}`, ephemeral: true });

        })
    }
    if (interaction.customId === "TICKET14") {
        const opis1 = interaction.fields.getTextInputValue('opis11');
        const opis2 = interaction.fields.getTextInputValue('opis22');
        const opis3 = interaction.fields.getTextInputValue('opis33');

        const allowedCategories = [config["ticket"].category_zamowienia1, config["ticket"].category_zamowienia2, config["ticket"].category_zamowienia3, config["ticket"].category_zamowienia4, config["ticket"].category_zamowienia5, config["ticket"].category_zamowienia6, config["ticket"].category_zamowienia7, config["ticket"].category_zamowienia8, config["ticket"].category_zamowienia9];

        if (interaction.guild.channels.cache.some(ch => {
            const topic = ch.topic;

            if (topic && allowedCategories.includes(ch.parentId)) {
                const lines = topic.split('\n');
                return lines.some(line => line.split(" | ")[0] === interaction.user.id);
            }
            return false;
        })) {
            return interaction.reply({ content: "Możesz posiadać maksymalnie **1** otwarty ticket z zamówieniem.", ephemeral: true });
        }

        if (!allowedPaymentMethods.includes(opis3.toUpperCase())) {
            return interaction.reply({
                content: "Nieprawidłowa metoda płatności. Dostępne metody płatności:\n\n**BLIK, PAYPAL, PP, PSC, PAYSAFECARD, MYPSC, MYPAYSAFECARD, SKRILL, REVOLUT, ZEN, CRYPTO, LTC.**",
                ephemeral: true,
            });
        }

        const topic = `${interaction.user.id}\n${opis1}\n${opis2}\n${opis3.toUpperCase()}`;
        let kat;
        const maxChannels = 50; // Maksymalna liczba kanałów w jednej kategorii
       const category1 = interaction.guild.channels.cache.get(config["ticket"].category_zamowienia1);
const category2 = interaction.guild.channels.cache.get("1331200036368945195");
const category3 = interaction.guild.channels.cache.get("1331200047869857856");
        function isCategoryFull(category) {
    return category.children.cache.size >= maxChannels;
}
        
        if (!isCategoryFull(category1)) {
    kat = category1;
} else if (!isCategoryFull(category2)) {
    kat = category2;
} else if (!isCategoryFull(category3)) {
    kat = category3;
} 
        interaction.guild.channels.create({
            name: config["ticketopen14"].ticketname.replace("{user}", interaction.user.username),
            type: ChannelType.GuildText,
            topic: topic,
            parent: kat.id,
            permissionOverwrites: [
                {
                    id: interaction.guild.id,
                    deny: [PermissionFlagsBits.ViewChannel]
                },
                {
                    id: interaction.user.id,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles]
                },
                {
                    id: config["ticket"].ranga1,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles],
                },
                {
                    id: config["ticket"].ranga_zamowienia0,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles],
                },
                {
                    id: config["ticket"].ranga_zamowienia4,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles],
                },
            ]
        }).then(channel => {
            const embed = new EmbedBuilder()
                .setTitle(config["ticketopen14"].title)
                .setDescription(config["ticketopen14"].description.replace("{opis1}", opis1).replace("{opis2}", opis2).replace("{opis3}", opis3.toUpperCase()).replace("{ping}", interaction.user.id).replace("{nick}", interaction.user.username).replace("{id}", interaction.user.id).replace("{opis}", opis1.replaceAll(/`/g, '').replaceAll("\n", " ")))
                .setColor(config["Ogólne"].kolor)
                .setImage(config["ticketopen14"].image)
                .setFooter({ text: (config["ticketopen14"].footer), iconURL: client.user.displayAvatarURL() })
                .setTimestamp()
            const row = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setStyle("Secondary")
                        .setCustomId("USTAWIENIA_TICKET-ZAMOWIENIE-2")
                        .setEmoji(config["ticketopen14"].button_emoji1)
                        .setLabel(config["ticketopen14"].button_label1)
                )
                .addComponents(
                    new ButtonBuilder()
                        .setStyle("Secondary")
                        .setCustomId("USTAWIENIA_TICKET-ZAMOWIENIE-1")
                        .setEmoji(config["ticketopen14"].button_emoji2)
                        .setLabel(config["ticketopen14"].button_label2)
                )

            channel.send({ content: (config["ticketopen14"].content), embeds: [embed], components: [row] })
            interaction.reply({ content: `**DreamShop™ ×** Pomyślnie utworzono ticket: ${channel}`, ephemeral: true });

        })
    }
    if (interaction.customId === "TICKET15") {
        const opis1 = interaction.fields.getTextInputValue('opis11');
        const opis2 = interaction.fields.getTextInputValue('opis22');
        const opis3 = interaction.fields.getTextInputValue('opis33');

        const allowedCategories = [config["ticket"].category_zamowienia1, config["ticket"].category_zamowienia2, config["ticket"].category_zamowienia3, config["ticket"].category_zamowienia4, config["ticket"].category_zamowienia5, config["ticket"].category_zamowienia6, config["ticket"].category_zamowienia7, config["ticket"].category_zamowienia8, config["ticket"].category_zamowienia9];

        if (interaction.guild.channels.cache.some(ch => {
            const topic = ch.topic;

            if (topic && allowedCategories.includes(ch.parentId)) {
                const lines = topic.split('\n');
                return lines.some(line => line.split(" | ")[0] === interaction.user.id);
            }
            return false;
        })) {
            return interaction.reply({ content: "Możesz posiadać maksymalnie **1** otwarty ticket z zamówieniem.", ephemeral: true });
        }
        if (!allowedPaymentMethods.includes(opis3.toUpperCase())) {
            return interaction.reply({
                content: "Nieprawidłowa metoda płatności. Dostępne metody płatności:\n\n**BLIK, PAYPAL, PP, PSC, PAYSAFECARD, MYPSC, MYPAYSAFECARD, SKRILL, REVOLUT, ZEN, CRYPTO, LTC.**",
                ephemeral: true,
            });
        }

        const topic = `${interaction.user.id}\n${opis1}\n${opis2}\n${opis3.toUpperCase()}`;
        let kat;
        const maxChannels = 50; // Maksymalna liczba kanałów w jednej kategorii
       const category1 = interaction.guild.channels.cache.get(config["ticket"].category_zamowienia1);
const category2 = interaction.guild.channels.cache.get("1331200036368945195");
const category3 = interaction.guild.channels.cache.get("1331200047869857856");
        function isCategoryFull(category) {
    return category.children.cache.size >= maxChannels;
}
        
        if (!isCategoryFull(category1)) {
    kat = category1;
} else if (!isCategoryFull(category2)) {
    kat = category2;
} else if (!isCategoryFull(category3)) {
    kat = category3;
} 
        interaction.guild.channels.create({
            name: config["ticketopen15"].ticketname.replace("{user}", interaction.user.username),
            type: ChannelType.GuildText,
            topic: topic,
            parent: kat.id,
            permissionOverwrites: [
                {
                    id: interaction.guild.id,
                    deny: [PermissionFlagsBits.ViewChannel]
                },
                {
                    id: interaction.user.id,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles]
                },
                {
                    id: config["ticket"].ranga1,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles],
                },
                {
                    id: config["ticket"].ranga_zamowienia0,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles],
                },
                {
                    id: config["ticket"].ranga_zamowienia5,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles],
                },
            ]
        }).then(channel => {
            const embed = new EmbedBuilder()
                .setTitle(config["ticketopen15"].title)
                .setDescription(config["ticketopen15"].description.replace("{opis1}", opis1).replace("{opis2}", opis2).replace("{opis3}", opis3.toUpperCase()).replace("{ping}", interaction.user.id).replace("{nick}", interaction.user.username).replace("{id}", interaction.user.id).replace("{opis}", opis1.replaceAll(/`/g, '').replaceAll("\n", " ")))
                .setColor(config["Ogólne"].kolor)
                .setImage(config["ticketopen15"].image)
                .setFooter({ text: (config["ticketopen15"].footer), iconURL: client.user.displayAvatarURL() })
                .setTimestamp()
            const row = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setStyle("Secondary")
                        .setCustomId("USTAWIENIA_TICKET-ZAMOWIENIE-2")
                        .setEmoji(config["ticketopen15"].button_emoji1)
                        .setLabel(config["ticketopen15"].button_label1)
                )
                .addComponents(
                    new ButtonBuilder()
                        .setStyle("Secondary")
                        .setCustomId("USTAWIENIA_TICKET-ZAMOWIENIE-1")
                        .setEmoji(config["ticketopen15"].button_emoji2)
                        .setLabel(config["ticketopen15"].button_label2)
                )

            channel.send({ content: (config["ticketopen15"].content), embeds: [embed], components: [row] })
            interaction.reply({ content: `**DreamShop™ ×** Pomyślnie utworzono ticket: ${channel}`, ephemeral: true });

        })
    }
    if (interaction.customId === "TICKET16") {
        const opis1 = interaction.fields.getTextInputValue('opis11');
        const opis2 = interaction.fields.getTextInputValue('opis22');
        const opis3 = interaction.fields.getTextInputValue('opis33');

        const allowedCategories = [config["ticket"].category_zamowienia1, config["ticket"].category_zamowienia2, config["ticket"].category_zamowienia3, config["ticket"].category_zamowienia4, config["ticket"].category_zamowienia5, config["ticket"].category_zamowienia6, config["ticket"].category_zamowienia7, config["ticket"].category_zamowienia8, config["ticket"].category_zamowienia9];

        if (interaction.guild.channels.cache.some(ch => {
            const topic = ch.topic;

            if (topic && allowedCategories.includes(ch.parentId)) {
                const lines = topic.split('\n');
                return lines.some(line => line.split(" | ")[0] === interaction.user.id);
            }
            return false;
        })) {
            return interaction.reply({ content: "Możesz posiadać maksymalnie **1** otwarty ticket z zamówieniem.", ephemeral: true });
        }

        if (!allowedPaymentMethods.includes(opis3.toUpperCase())) {
            return interaction.reply({
                content: "Nieprawidłowa metoda płatności. Dostępne metody płatności:\n\n**BLIK, PAYPAL, PP, PSC, PAYSAFECARD, MYPSC, MYPAYSAFECARD, SKRILL, REVOLUT, ZEN, CRYPTO, LTC.**",
                ephemeral: true,
            });
        }

        const topic = `${interaction.user.id}\n${opis1}\n${opis2}\n${opis3.toUpperCase()}`;
        let kat;
        const maxChannels = 50; // Maksymalna liczba kanałów w jednej kategorii
       const category1 = interaction.guild.channels.cache.get(config["ticket"].category_zamowienia1);
const category2 = interaction.guild.channels.cache.get("1331200036368945195");
const category3 = interaction.guild.channels.cache.get("1331200047869857856");
        function isCategoryFull(category) {
    return category.children.cache.size >= maxChannels;
}
        
        if (!isCategoryFull(category1)) {
    kat = category1;
} else if (!isCategoryFull(category2)) {
    kat = category2;
} else if (!isCategoryFull(category3)) {
    kat = category3;
} 
        interaction.guild.channels.create({
            name: config["ticketopen16"].ticketname.replace("{user}", interaction.user.username),
            type: ChannelType.GuildText,
            topic: topic,
            parent: kat.id,
            permissionOverwrites: [
                {
                    id: interaction.guild.id,
                    deny: [PermissionFlagsBits.ViewChannel]
                },
                {
                    id: interaction.user.id,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles]
                },
                {
                    id: config["ticket"].ranga1,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles],
                },
                {
                    id: config["ticket"].ranga_zamowienia0,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles],
                },
                {
                    id: config["ticket"].ranga_zamowienia6,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles],
                },
            ]
        }).then(channel => {
            const embed = new EmbedBuilder()
                .setTitle(config["ticketopen16"].title)
                .setDescription(config["ticketopen16"].description.replace("{opis1}", opis1).replace("{opis2}", opis2).replace("{opis3}", opis3.toUpperCase()).replace("{ping}", interaction.user.id).replace("{nick}", interaction.user.username).replace("{id}", interaction.user.id).replace("{opis}", opis1.replaceAll(/`/g, '').replaceAll("\n", " ")))
                .setColor(config["Ogólne"].kolor)
                .setImage(config["ticketopen16"].image)
                .setFooter({ text: (config["ticketopen16"].footer), iconURL: client.user.displayAvatarURL() })
                .setTimestamp()
            const row = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setStyle("Secondary")
                        .setCustomId("USTAWIENIA_TICKET-ZAMOWIENIE-2")
                        .setEmoji(config["ticketopen16"].button_emoji1)
                        .setLabel(config["ticketopen16"].button_label1)
                )
                .addComponents(
                    new ButtonBuilder()
                        .setStyle("Secondary")
                        .setCustomId("USTAWIENIA_TICKET-ZAMOWIENIE-1")
                        .setEmoji(config["ticketopen16"].button_emoji2)
                        .setLabel(config["ticketopen16"].button_label2)
                )

            channel.send({ content: (config["ticketopen16"].content), embeds: [embed], components: [row] })
            interaction.reply({ content: `**DreamShop™ ×** Pomyślnie utworzono ticket: ${channel}`, ephemeral: true });

        })
    }
    if (interaction.customId === "TICKET17") {
        const opis1 = interaction.fields.getTextInputValue('opis11');
        const opis2 = interaction.fields.getTextInputValue('opis22');
        const opis3 = interaction.fields.getTextInputValue('opis33');

        const allowedCategories = [config["ticket"].category_zamowienia1, config["ticket"].category_zamowienia2, config["ticket"].category_zamowienia3, config["ticket"].category_zamowienia4, config["ticket"].category_zamowienia5, config["ticket"].category_zamowienia6, config["ticket"].category_zamowienia7, config["ticket"].category_zamowienia8, config["ticket"].category_zamowienia9];

        if (interaction.guild.channels.cache.some(ch => {
            const topic = ch.topic;

            if (topic && allowedCategories.includes(ch.parentId)) {
                const lines = topic.split('\n');
                return lines.some(line => line.split(" | ")[0] === interaction.user.id);
            }
            return false;
        })) {
            return interaction.reply({ content: "Możesz posiadać maksymalnie **1** otwarty ticket z zamówieniem.", ephemeral: true });
        }

        if (!allowedPaymentMethods.includes(opis3.toUpperCase())) {
            return interaction.reply({
                content: "Nieprawidłowa metoda płatności. Dostępne metody płatności:\n\n**BLIK, PAYPAL, PP, PSC, PAYSAFECARD, MYPSC, MYPAYSAFECARD, SKRILL, REVOLUT, ZEN, CRYPTO, LTC.**",
                ephemeral: true,
            });
        }

        const topic = `${interaction.user.id}\n${opis1}\n${opis2}\n${opis3.toUpperCase()}`;
        let kat;
        const maxChannels = 50; // Maksymalna liczba kanałów w jednej kategorii
       const category1 = interaction.guild.channels.cache.get(config["ticket"].category_zamowienia1);
const category2 = interaction.guild.channels.cache.get("1331200036368945195");
const category3 = interaction.guild.channels.cache.get("1331200047869857856");
        function isCategoryFull(category) {
    return category.children.cache.size >= maxChannels;
}
        
        if (!isCategoryFull(category1)) {
    kat = category1;
} else if (!isCategoryFull(category2)) {
    kat = category2;
} else if (!isCategoryFull(category3)) {
    kat = category3;
} 
        interaction.guild.channels.create({
            name: config["ticketopen17"].ticketname.replace("{user}", interaction.user.username),
            type: ChannelType.GuildText,
            topic: topic,
            parent: kat.id,
            permissionOverwrites: [
                {
                    id: interaction.guild.id,
                    deny: [PermissionFlagsBits.ViewChannel]
                },
                {
                    id: interaction.user.id,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles]
                },
                {
                    id: config["ticket"].ranga1,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles],
                },
                {
                    id: config["ticket"].ranga_zamowienia0,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles],
                },
                {
                    id: config["ticket"].ranga_zamowienia7,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles],
                },
            ]
        }).then(channel => {
            const embed = new EmbedBuilder()
                .setTitle(config["ticketopen17"].title)
                .setDescription(config["ticketopen17"].description.replace("{opis1}", opis1).replace("{opis2}", opis2).replace("{opis3}", opis3.toUpperCase()).replace("{ping}", interaction.user.id).replace("{nick}", interaction.user.username).replace("{id}", interaction.user.id).replace("{opis}", opis1.replaceAll(/`/g, '').replaceAll("\n", " ")))
                .setColor(config["Ogólne"].kolor)
                .setImage(config["ticketopen17"].image)
                .setFooter({ text: (config["ticketopen17"].footer), iconURL: client.user.displayAvatarURL() })
                .setTimestamp()
            const row = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setStyle("Secondary")
                        .setCustomId("USTAWIENIA_TICKET-ZAMOWIENIE-2")
                        .setEmoji(config["ticketopen17"].button_emoji1)
                        .setLabel(config["ticketopen17"].button_label1)
                )
                .addComponents(
                    new ButtonBuilder()
                        .setStyle("Secondary")
                        .setCustomId("USTAWIENIA_TICKET-ZAMOWIENIE-1")
                        .setEmoji(config["ticketopen17"].button_emoji2)
                        .setLabel(config["ticketopen17"].button_label2)
                )

            channel.send({ content: (config["ticketopen17"].content), embeds: [embed], components: [row] })
            interaction.reply({ content: `**DreamShop™ ×** Pomyślnie utworzono ticket: ${channel}`, ephemeral: true });

        })
    }
    if (interaction.customId === "TICKET18") {
        const opis1 = interaction.fields.getTextInputValue('opis11');
        const opis2 = interaction.fields.getTextInputValue('opis22');
        const opis3 = interaction.fields.getTextInputValue('opis33');

        const allowedCategories = [config["ticket"].category_zamowienia1, config["ticket"].category_zamowienia2, config["ticket"].category_zamowienia3, config["ticket"].category_zamowienia4, config["ticket"].category_zamowienia5, config["ticket"].category_zamowienia6, config["ticket"].category_zamowienia7, config["ticket"].category_zamowienia8, config["ticket"].category_zamowienia9];

        if (interaction.guild.channels.cache.some(ch => {
            const topic = ch.topic;

            if (topic && allowedCategories.includes(ch.parentId)) {
                const lines = topic.split('\n');
                return lines.some(line => line.split(" | ")[0] === interaction.user.id);
            }
            return false;
        })) {
            return interaction.reply({ content: "Możesz posiadać maksymalnie **1** otwarty ticket z zamówieniem.", ephemeral: true });
        }

        if (!allowedPaymentMethods.includes(opis3.toUpperCase())) {
            return interaction.reply({
                content: "Nieprawidłowa metoda płatności. Dostępne metody płatności:\n\n**BLIK, PAYPAL, PP, PSC, PAYSAFECARD, MYPSC, MYPAYSAFECARD, SKRILL, REVOLUT, ZEN, CRYPTO, LTC.**",
                ephemeral: true,
            });
        }

        const topic = `${interaction.user.id}\n${opis1}\n${opis2}\n${opis3.toUpperCase()}`;
        let kat;
        const maxChannels = 50; // Maksymalna liczba kanałów w jednej kategorii
       const category1 = interaction.guild.channels.cache.get(config["ticket"].category_zamowienia1);
const category2 = interaction.guild.channels.cache.get("1331200036368945195");
const category3 = interaction.guild.channels.cache.get("1331200047869857856");
        function isCategoryFull(category) {
    return category.children.cache.size >= maxChannels;
}
        
        if (!isCategoryFull(category1)) {
    kat = category1;
} else if (!isCategoryFull(category2)) {
    kat = category2;
} else if (!isCategoryFull(category3)) {
    kat = category3;
} 
        interaction.guild.channels.create({
            name: config["ticketopen18"].ticketname.replace("{user}", interaction.user.username),
            type: ChannelType.GuildText,
            topic: topic,
            parent: kat.id,
            permissionOverwrites: [
                {
                    id: interaction.guild.id,
                    deny: [PermissionFlagsBits.ViewChannel]
                },
                {
                    id: interaction.user.id,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles]
                },
                {
                    id: config["ticket"].ranga1,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles],
                },
                {
                    id: config["ticket"].ranga_zamowienia0,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles],
                },
                {
                    id: config["ticket"].ranga_zamowienia8,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles],
                },
            ]
        }).then(channel => {
            const embed = new EmbedBuilder()
                .setTitle(config["ticketopen18"].title)
                .setDescription(config["ticketopen18"].description.replace("{opis1}", opis1).replace("{opis2}", opis2).replace("{opis3}", opis3.toUpperCase()).replace("{ping}", interaction.user.id).replace("{nick}", interaction.user.username).replace("{id}", interaction.user.id).replace("{opis}", opis1.replaceAll(/`/g, '').replaceAll("\n", " ")))
                .setColor(config["Ogólne"].kolor)
                .setImage(config["ticketopen18"].image)
                .setFooter({ text: (config["ticketopen18"].footer), iconURL: client.user.displayAvatarURL() })
                .setTimestamp()
            const row = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setStyle("Secondary")
                        .setCustomId("USTAWIENIA_TICKET-ZAMOWIENIE-2")
                        .setEmoji(config["ticketopen18"].button_emoji1)
                        .setLabel(config["ticketopen18"].button_label1)
                )
                .addComponents(
                    new ButtonBuilder()
                        .setStyle("Secondary")
                        .setCustomId("USTAWIENIA_TICKET-ZAMOWIENIE-1")
                        .setEmoji(config["ticketopen18"].button_emoji2)
                        .setLabel(config["ticketopen18"].button_label2)
                )

            channel.send({ content: (config["ticketopen18"].content), embeds: [embed], components: [row] })
            interaction.reply({ content: `**DreamShop™ ×** Pomyślnie utworzono ticket: ${channel}`, ephemeral: true });

        })
    }
    if (interaction.customId === "TICKET19") {
        const opis1 = interaction.fields.getTextInputValue('opis11');
        const opis2 = interaction.fields.getTextInputValue('opis22');
        const opis3 = interaction.fields.getTextInputValue('opis33');

        const allowedCategories = [config["ticket"].category_zamowienia1, config["ticket"].category_zamowienia2, config["ticket"].category_zamowienia3, config["ticket"].category_zamowienia4, config["ticket"].category_zamowienia5, config["ticket"].category_zamowienia6, config["ticket"].category_zamowienia7, config["ticket"].category_zamowienia8, config["ticket"].category_zamowienia9];

        if (interaction.guild.channels.cache.some(ch => {
            const topic = ch.topic;

            if (topic && allowedCategories.includes(ch.parentId)) {
                const lines = topic.split('\n');
                return lines.some(line => line.split(" | ")[0] === interaction.user.id);
            }
            return false;
        })) {
            return interaction.reply({ content: "Możesz posiadać maksymalnie **1** otwarty ticket z zamówieniem.", ephemeral: true });
        }

        if (!allowedPaymentMethods.includes(opis3.toUpperCase())) {
            return interaction.reply({
                content: "Nieprawidłowa metoda płatności. Dostępne metody płatności:\n\n**BLIK, PAYPAL, PP, PSC, PAYSAFECARD, MYPSC, MYPAYSAFECARD, SKRILL, REVOLUT, ZEN, CRYPTO, LTC.**",
                ephemeral: true,
            });
        }

        const topic = `${interaction.user.id}\n${opis1}\n${opis2}\n${opis3.toUpperCase()}`;
        let kat;
        const maxChannels = 50; // Maksymalna liczba kanałów w jednej kategorii
       const category1 = interaction.guild.channels.cache.get(config["ticket"].category_zamowienia1);
const category2 = interaction.guild.channels.cache.get("1331200036368945195");
const category3 = interaction.guild.channels.cache.get("1331200047869857856");
        function isCategoryFull(category) {
    return category.children.cache.size >= maxChannels;
}
        
        if (!isCategoryFull(category1)) {
    kat = category1;
} else if (!isCategoryFull(category2)) {
    kat = category2;
} else if (!isCategoryFull(category3)) {
    kat = category3;
} 
        interaction.guild.channels.create({
            name: config["ticketopen19"].ticketname.replace("{user}", interaction.user.username),
            type: ChannelType.GuildText,
            topic: topic,
            parent: kat.id,
            permissionOverwrites: [
                {
                    id: interaction.guild.id,
                    deny: [PermissionFlagsBits.ViewChannel]
                },
                {
                    id: interaction.user.id,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles]
                },
                {
                    id: config["ticket"].ranga1,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles],
                },
                {
                    id: config["ticket"].ranga_zamowienia0,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles],
                },
                {
                    id: config["ticket"].ranga_zamowienia9,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles],
                },
            ]
        }).then(channel => {
            const embed = new EmbedBuilder()
                .setTitle(config["ticketopen19"].title)
                .setDescription(config["ticketopen19"].description.replace("{opis1}", opis1).replace("{opis2}", opis2).replace("{opis3}", opis3.toUpperCase()).replace("{ping}", interaction.user.id).replace("{nick}", interaction.user.username).replace("{id}", interaction.user.id).replace("{opis}", opis1.replaceAll(/`/g, '').replaceAll("\n", " ")))
                .setColor(config["Ogólne"].kolor)
                .setImage(config["ticketopen19"].image)
                .setFooter({ text: (config["ticketopen19"].footer), iconURL: client.user.displayAvatarURL() })
                .setTimestamp()
            const row = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setStyle("Secondary")
                        .setCustomId("USTAWIENIA_TICKET-ZAMOWIENIE-2")
                        .setEmoji(config["ticketopen19"].button_emoji1)
                        .setLabel(config["ticketopen19"].button_label1)
                )
                .addComponents(
                    new ButtonBuilder()
                        .setStyle("Secondary")
                        .setCustomId("USTAWIENIA_TICKET-ZAMOWIENIE-1")
                        .setEmoji(config["ticketopen19"].button_emoji2)
                        .setLabel(config["ticketopen19"].button_label2)
                )

            channel.send({ content: (config["ticketopen19"].content), embeds: [embed], components: [row] })
            interaction.reply({ content: `**DreamShop™ ×** Pomyślnie utworzono ticket: ${channel}`, ephemeral: true });

        })
    }
    if (interaction.customId === "TICKET21") {
        const opis1 = interaction.fields.getTextInputValue('opis11');
        const opis2 = interaction.fields.getTextInputValue('opis22');
        const opis3 = interaction.fields.getTextInputValue('opis33');

        const allowedCategories = [config["ticket"].category_zamowienia1, config["ticket"].category_zamowienia2, config["ticket"].category_zamowienia3, config["ticket"].category_zamowienia4, config["ticket"].category_zamowienia5, config["ticket"].category_zamowienia6, config["ticket"].category_zamowienia7, config["ticket"].category_zamowienia8, config["ticket"].category_zamowienia9];

        if (interaction.guild.channels.cache.some(ch => {
            const topic = ch.topic;

            if (topic && allowedCategories.includes(ch.parentId)) {
                const lines = topic.split('\n');
                return lines.some(line => line.split(" | ")[0] === interaction.user.id);
            }
            return false;
        })) {
            return interaction.reply({ content: "Możesz posiadać maksymalnie **1** otwarty ticket z zamówieniem.", ephemeral: true });
        }

        if (!allowedPaymentMethods.includes(opis3.toUpperCase())) {
            return interaction.reply({
                content: "Nieprawidłowa metoda płatności. Dostępne metody płatności:\n\n**BLIK, PAYPAL, PP, PSC, PAYSAFECARD, MYPSC, MYPAYSAFECARD, SKRILL, REVOLUT, ZEN, CRYPTO, LTC.**",
                ephemeral: true,
            });
        }

        const topic = `${interaction.user.id}\n${opis1}\n${opis2}\n${opis3.toUpperCase()}`;
        let kat;
        const maxChannels = 50; // Maksymalna liczba kanałów w jednej kategorii
       const category1 = interaction.guild.channels.cache.get(config["ticket"].category_zamowienia1);
const category2 = interaction.guild.channels.cache.get("1331200036368945195");
const category3 = interaction.guild.channels.cache.get("1331200047869857856");
        function isCategoryFull(category) {
    return category.children.cache.size >= maxChannels;
}
        
        if (!isCategoryFull(category1)) {
    kat = category1;
} else if (!isCategoryFull(category2)) {
    kat = category2;
} else if (!isCategoryFull(category3)) {
    kat = category3;
} 
        interaction.guild.channels.create({
            name: config["ticketopen21"].ticketname.replace("{user}", interaction.user.username),
            type: ChannelType.GuildText,
            topic: topic,
            parent: kat.id,
            permissionOverwrites: [
                {
                    id: interaction.guild.id,
                    deny: [PermissionFlagsBits.ViewChannel]
                },
                {
                    id: interaction.user.id,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles]
                },
                {
                    id: config["ticket"].ranga1,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles],
                },
                {
                    id: config["ticket"].ranga_zamowienia0,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles],
                },
                {
                    id: config["ticket"].ranga_zamowienia10,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles],
                },
            ]
        }).then(channel => {
            const embed = new EmbedBuilder()
                .setTitle(config["ticketopen21"].title)
                .setDescription(config["ticketopen21"].description.replace("{opis1}", opis1).replace("{opis2}", opis2).replace("{opis3}", opis3.toUpperCase()).replace("{ping}", interaction.user.id).replace("{nick}", interaction.user.username).replace("{id}", interaction.user.id).replace("{opis}", opis1.replaceAll(/`/g, '').replaceAll("\n", " ")))
                .setColor(config["Ogólne"].kolor)
                .setImage(config["ticketopen21"].image)
                .setFooter({ text: (config["ticketopen21"].footer), iconURL: client.user.displayAvatarURL() })
                .setTimestamp()
            const row = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setStyle("Secondary")
                        .setCustomId("USTAWIENIA_TICKET-ZAMOWIENIE-2")
                        .setEmoji(config["ticketopen21"].button_emoji1)
                        .setLabel(config["ticketopen21"].button_label1)
                )
                .addComponents(
                    new ButtonBuilder()
                        .setStyle("Secondary")
                        .setCustomId("USTAWIENIA_TICKET-ZAMOWIENIE-1")
                        .setEmoji(config["ticketopen21"].button_emoji2)
                        .setLabel(config["ticketopen21"].button_label2)
                )

            channel.send({ content: (config["ticketopen21"].content), embeds: [embed], components: [row] })
            interaction.reply({ content: `**DreamShop™ ×** Pomyślnie utworzono ticket: ${channel}`, ephemeral: true });

        })
    }
    if (interaction.customId === "TICKET2") {
        const opis1 = interaction.fields.getTextInputValue('opis11');
        const opis2 = interaction.fields.getTextInputValue('opis22');
        const opis3 = interaction.fields.getTextInputValue('opis33');
        const opis4 = interaction.fields.getTextInputValue('opis44');

        const allowedCategories = [config["ticket"].category_reklamacja];

        if (interaction.guild.channels.cache.some(ch => {
            const topic = ch.topic;

            if (topic && allowedCategories.includes(ch.parentId)) {
                const lines = topic.split('\n');
                return lines.some(line => line.split(" | ")[0] === interaction.user.id);
            }
            return false;
        })) {
            return interaction.reply({ content: "Możesz posiadać maksymalnie **1** otwarty ticket z reklamacją.", ephemeral: true });
        }


        interaction.guild.channels.create({
            name: config["ticketopen2"].ticketname.replace("{member}", opis2).replace("{user}", interaction.user.username),
            type: ChannelType.GuildText,
            topic: interaction.user.id,
            parent: config["ticket"].category_reklamacja,
            permissionOverwrites: [
                {
                    id: interaction.guild.id,
                    deny: [PermissionFlagsBits.ViewChannel]
                },
                {
                    id: interaction.user.id,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles]
                },
                {
                    id: config["ticket"].ranga1,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles],
                },
                {
                    id: config["ticket"].ranga_zamowienia0,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles],
                },
            ]
        }).then(channel => {
            const embed = new EmbedBuilder()
                .setTitle(config["ticketopen2"].title)
                .setDescription(config["ticketopen2"].description.replace("{opis1}", opis1).replace("{opis2}", opis2).replace("{opis3}", opis3).replace("{opis4}", opis4).replace("{ping}", interaction.user.id).replace("{nick}", interaction.user.username).replace("{id}", interaction.user.id).replace("{opis}", opis1.replaceAll(/`/g, '').replaceAll("\n", " ")))
                .setColor(config["Ogólne"].kolor)
                .setImage(config["ticketopen2"].image)
                .setFooter({ text: (config["ticketopen2"].footer), iconURL: client.user.displayAvatarURL() })
                .setTimestamp()
            const row = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setStyle("Secondary")
                        .setCustomId("ZAMKNIJ_TICKET-POMOC")
                        .setEmoji(config["ticketopen2"].button_emoji1)
                        .setLabel(config["ticketopen2"].button_label1)
                )
                .addComponents(
                    new ButtonBuilder()
                        .setStyle("Secondary")
                        .setCustomId("USTAWIENIA_TICKET-POMOC")
                        .setEmoji(config["ticketopen2"].button_emoji2)
                        .setLabel(config["ticketopen2"].button_label2)
                )

            channel.send({ content: (config["ticketopen2"].content), embeds: [embed], components: [row] })
            interaction.reply({ content: `**DreamShop™ ×** Pomyślnie utworzono ticket: ${channel}`, ephemeral: true });

        })

    }
    if (interaction.customId === "TICKET5") {
        const opis1 = interaction.fields.getTextInputValue('opis11');

        const allowedCategories = [config["ticket"].category_pomoc];

        if (interaction.guild.channels.cache.some(ch => {
            const topic = ch.topic;

            if (topic && allowedCategories.includes(ch.parentId)) {
                const lines = topic.split('\n');
                return lines.some(line => line.split(" | ")[0] === interaction.user.id);
            }
            return false;
        })) {
            return interaction.reply({ content: "Możesz posiadać maksymalnie **1** otwarty ticket z pomocą.", ephemeral: true });
        }


        interaction.guild.channels.create({
            name: config["ticketopen5"].ticketname.replace("{user}", interaction.user.username),
            type: ChannelType.GuildText,
            topic: interaction.user.id,
            parent: config["ticket"].category_pomoc,
            permissionOverwrites: [
                {
                    id: interaction.guild.id,
                    deny: [PermissionFlagsBits.ViewChannel]
                },
                {
                    id: interaction.user.id,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles]
                },
                {
                    id: config["ticket"].ranga1,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles],
                },
                {
                    id: config["ticket"].ranga_zamowienia0,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles],
                },
            ]
        }).then(channel => {
            const embed = new EmbedBuilder()
                .setTitle(config["ticketopen5"].title)
                .setDescription(config["ticketopen5"].description.replace("{opis1}", opis1).replace("{ping}", interaction.user.id).replace("{nick}", interaction.user.username).replace("{id}", interaction.user.id).replace("{opis}", opis1.replaceAll(/`/g, '').replaceAll("\n", " ")))
                .setColor(config["Ogólne"].kolor)
                .setImage(config["ticketopen5"].image)
                .setFooter({ text: (config["ticketopen5"].footer), iconURL: client.user.displayAvatarURL() })
                .setTimestamp()
            const row = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setStyle("Secondary")
                        .setCustomId("ZAMKNIJ_TICKET-POMOC")
                        .setEmoji(config["ticketopen2"].button_emoji1)
                        .setLabel(config["ticketopen2"].button_label1)
                )
                .addComponents(
                    new ButtonBuilder()
                        .setStyle("Secondary")
                        .setCustomId("USTAWIENIA_TICKET-POMOC")
                        .setEmoji(config["ticketopen2"].button_emoji2)
                        .setLabel(config["ticketopen2"].button_label2)
                )

            channel.send({ content: (config["ticketopen5"].content), embeds: [embed], components: [row] })
            interaction.reply({ content: `**DreamShop™ ×** Pomyślnie utworzono ticket: ${channel}`, ephemeral: true });

        })

    }
    if (interaction.customId === "TICKET4") {
        const opis1 = interaction.fields.getTextInputValue('opis11');
        const opis2 = interaction.fields.getTextInputValue('opis22');
        const opis3 = interaction.fields.getTextInputValue('opis33');
        const opis4 = interaction.fields.getTextInputValue('opis44');

        const allowedCategories = [config["ticket"].category_middleman];

        if (interaction.guild.channels.cache.some(ch => {
            const topic = ch.topic;

            if (topic && allowedCategories.includes(ch.parentId)) {
                const lines = topic.split('\n');
                return lines.some(line => line.split(" | ")[0] === interaction.user.id);
            }
            return false;
        })) {
            return interaction.reply({ content: "Możesz posiadać maksymalnie **1** otwarty ticket z middleman.", ephemeral: true });
        }


        interaction.guild.channels.create({
            name: config["ticketopen6"].ticketname.replace("{member}", opis2).replace("{user}", interaction.user.username),
            type: ChannelType.GuildText,
            topic: interaction.user.id,
            parent: config["ticket"].category_middleman,
            permissionOverwrites: [
                {
                    id: interaction.guild.id,
                    deny: [PermissionFlagsBits.ViewChannel]
                },
                {
                    id: interaction.user.id,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles]
                },
                {
                    id: config["ticket"].ranga1,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles],
                },
                {
                    id: config["ticket"].ranga_zamowienia0,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles],
                },
            ]
        }).then(channel => {
            const embed = new EmbedBuilder()
                .setTitle(config["ticketopen6"].title)
                .setDescription(config["ticketopen6"].description.replace("{opis1}", opis1).replace("{opis2}", opis2).replace("{opis3}", opis3).replace("{opis4}", opis4).replace("{ping}", interaction.user.id).replace("{nick}", interaction.user.username).replace("{id}", interaction.user.id).replace("{opis}", opis1.replaceAll(/`/g, '').replaceAll("\n", " ")))
                .setColor(config["Ogólne"].kolor)
                .setImage(config["ticketopen6"].image)
                .setFooter({ text: (config["ticketopen6"].footer), iconURL: client.user.displayAvatarURL() })
                .setTimestamp()
            const row = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setStyle("Secondary")
                        .setCustomId("ZAMKNIJ_TICKET-POMOC")
                        .setEmoji(config["ticketopen2"].button_emoji1)
                        .setLabel(config["ticketopen2"].button_label1)
                )
                .addComponents(
                    new ButtonBuilder()
                        .setStyle("Secondary")
                        .setCustomId("USTAWIENIA_TICKET-POMOC")
                        .setEmoji(config["ticketopen2"].button_emoji2)
                        .setLabel(config["ticketopen2"].button_label2)
                )

            channel.send({ content: (config["ticketopen6"].content), embeds: [embed], components: [row] })
            interaction.reply({ content: `**DreamShop™ ×** Pomyślnie utworzono ticket: ${channel}`, ephemeral: true });

        })

    }
    if (interaction.customId === "TICKET3") {
        const opis1 = interaction.fields.getTextInputValue('opis11');
        const opis2 = interaction.fields.getTextInputValue('opis22');
        const opis3 = interaction.fields.getTextInputValue('opis33');

        const allowedCategories = [config["ticket"].category_skup];

        if (interaction.guild.channels.cache.some(ch => {
            const topic = ch.topic;

            if (topic && allowedCategories.includes(ch.parentId)) {
                const lines = topic.split('\n');
                return lines.some(line => line.split(" | ")[0] === interaction.user.id);
            }
            return false;
        })) {
            return interaction.reply({ content: "Możesz posiadać maksymalnie **1** otwarty ticket z skupem.", ephemeral: true });
        }


        interaction.guild.channels.create({
            name: config["ticketopen3"].ticketname.replace("{user}", interaction.user.username),
            type: ChannelType.GuildText,
            topic: interaction.user.id,
            parent: config["ticket"].category_skup,
            permissionOverwrites: [
                {
                    id: interaction.guild.id,
                    deny: [PermissionFlagsBits.ViewChannel]
                },
                {
                    id: interaction.user.id,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles]
                },
                {
                    id: config["ticket"].ranga1,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles],
                },
                {
                    id: config["ticket"].ranga_zamowienia0,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles],
                },
            ]
        }).then(channel => {
            const embed = new EmbedBuilder()
                .setTitle(config["ticketopen3"].title)
                .setDescription(config["ticketopen3"].description.replace("{opis1}", opis1).replace("{opis2}", opis2).replace("{opis3}", opis3).replace("{ping}", interaction.user.id).replace("{nick}", interaction.user.username).replace("{id}", interaction.user.id).replace("{opis}", opis1.replaceAll(/`/g, '').replaceAll("\n", " ")))
                .setColor(config["Ogólne"].kolor)
                .setImage(config["ticketopen3"].image)
                .setFooter({ text: (config["ticketopen3"].footer), iconURL: client.user.displayAvatarURL() })
                .setTimestamp()
            const row = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setStyle("Secondary")
                        .setCustomId("ZAMKNIJ_TICKET-POMOC")
                        .setEmoji(config["ticketopen3"].button_emoji1)
                        .setLabel(config["ticketopen3"].button_label1)
                )
                .addComponents(
                    new ButtonBuilder()
                        .setStyle("Secondary")
                        .setCustomId("USTAWIENIA_TICKET-POMOC")
                        .setEmoji(config["ticketopen3"].button_emoji2)
                        .setLabel(config["ticketopen3"].button_label2)
                )

            channel.send({ content: (config["ticketopen3"].content), embeds: [embed], components: [row] })
            interaction.reply({ content: `**DreamShop™ ×** Pomyślnie utworzono ticket: ${channel}`, ephemeral: true });

        })

    }
}
)