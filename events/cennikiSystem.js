const client = require('..');
const { EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');
const cenniki = require('../cenniki.js');

client.on('interactionCreate', async (interaction) => {
    // Mapa do obsługi powiązań
    const mappings = {
        "CENNIK1_SELECTED": ["cennik_open1", "cennik_open2", "cennik_open3", "cennik_open4"],
        "CENNIK2_SELECTED": ["cennik_open8", "cennik_open9", "cennik_open10", "cennik_open11", "cennik_open12"],
        "CENNIK3_SELECTED": ["cennik_open5", "cennik_open6", "cennik_open7"],
        "CENNIK4_SELECTED": ["cennik_open13", "cennik_open14"],
        "CENNIK6_SELECTED": ["cennik_open15", "cennik_open16", "cennik_open17", "cennik_open18", "cennik_open19", "cennik_open20", "cennik_open21", "cennik_open22", "cennik_open23"],
        "CENNIK7_SELECTED": ["cennik_open24", "cennik_open25", "cennik_open26"],
        "CENNIK8_SELECTED": ["cennik_open27", "cennik_open28", "cennik_open29", "cennik_open30", "cennik_open31"],
        "CENNIK9_SELECTED": ["cennik_open32", "cennik_open33", "cennik_open34"],
        "CENNIK55_SELECTED": ["cennik_open35", "cennik_open36", "cennik_open37", "cennik_open38", "cennik_open39", "cennik_open40", "cennik_open41", "cennik_open42", "cennik_open43", "cennik_open44", "cennik_open45", "cennik_open46", "cennik_open47", "cennik_open48", "cennik_open49", "cennik_open54"],
        "CENNIK66_SELECTED": ["cennik_open50", "cennik_open51", "cennik_open52", "cennik_open53"],
        "CENNIK44_SELECTED": ["cennik_open57", "cennik_open58", "cennik_open59", "cennik_open60", "cennik_open61"],
        "CENNIK4444_SELECTED": ["cennik_open65", "cennik_open66", "cennik_open67", "cennik_open68", "cennik_open69"],
    };

    if (mappings[interaction.customId]) {
        const index = parseInt(interaction.values[0]) - 1;
        const cennikKey = mappings[interaction.customId][index];

        if (cenniki[cennikKey]) {
            const embed = new EmbedBuilder()
                .setColor(config["Ogólne"].kolor)
                .setTitle(cenniki[cennikKey].title)
                .setDescription(cenniki[cennikKey].description)
                .setImage(cenniki[cennikKey].image)
                .setFooter({ text: cenniki[cennikKey].footer });


            interaction.reply({ embeds: [embed], ephemeral: true });
            if (interaction.message && !interaction.message.deleted) {
                try {
                } catch (error) {
                    console.error("Wystąpił błąd podczas edycji wiadomości:", error);
                }
            } else {
                console.warn("Wiadomość już nie istnieje.");
            }
        } else {
        }
    }
});

client.on('interactionCreate', async (interaction) => {
    if (interaction.customId === "CENNIK5_SELECTED") {
        if (interaction.values[0] === "1") {

            const embed = new EmbedBuilder()
                .setTitle(' ')
                .setThumbnail(interaction.guild.iconURL())
                .setDescription('**```🪐 DreamShop™ × OFERTA K0NTA```**\n> - **<:NETFLIX:1317554449958305884> × NETFLIX**\n> - **<:MAX:1320690702102827078> × MAX** (HBO MAX)\n> - **<:DISNEY:1317539356201979905> × DISNEY+**\n> - **<:SPOTIFY:1320165341372092596> × SPOTIFY PREMIUM**\n> - **<:YOUTUBE:1320491671208722547> × YOUTUBE PREMIUM**\n> - **<:PRIMEVIDEO:1317554498507374813> × PRIME VIDEO**\n> - **<:CANAL:1317539309901053963> × CANAL+**\n> - **<:PLAYER:1317554494208348301> × PLAYER**\n> - **<:POLSATBOXGO:1320690630053199967> × POLSAT BOX GO**\n> - **<:SKYSHOWTIME:1317554514768691211> × SKYSHOWTIME**\n> - **<:CRUNCHYROLL:1320690805945536617> × CRUNCHYROLL**\n> - **<:CDA:1317539319879045130> × CDA PREMIUM**\n> - **<:VIAPLAY:1317569517085266011> × VIAPLAY**\n> - **<:WPPILOT:1317569523137908808> × WP PILOT**\n> - **<:DAZN:1320690652169764925> × DAZN**')
                .setColor(config["Ogólne"].kolor)

            const row = new ActionRowBuilder()
                .addComponents(
                    new StringSelectMenuBuilder()
                        .setCustomId("CENNIK55_SELECTED")
                        .setPlaceholder(cenniki["cennik55"].placeholder)
                        .addOptions([
                            {
                                label: (cenniki["cennik55"].label1),
                                description: (cenniki["cennik55"].description1),
                                emoji: (cenniki["cennik55"].emoji1),
                                value: '1',
                            },
                            {
                                label: (cenniki["cennik55"].label2),
                                description: (cenniki["cennik55"].description2),
                                emoji: (cenniki["cennik55"].emoji2),
                                value: '2',
                            },
                            {
                                label: (cenniki["cennik55"].label3),
                                description: (cenniki["cennik55"].description3),
                                emoji: (cenniki["cennik55"].emoji3),
                                value: '3',
                            },
                            {
                                label: (cenniki["cennik55"].label4),
                                description: (cenniki["cennik55"].description4),
                                emoji: (cenniki["cennik55"].emoji4),
                                value: '4',
                            },
                            {
                                label: (cenniki["cennik55"].label5),
                                description: (cenniki["cennik55"].description5),
                                emoji: (cenniki["cennik55"].emoji5),
                                value: '5',
                            },
                            {
                                label: (cenniki["cennik55"].label6),
                                description: (cenniki["cennik55"].description6),
                                emoji: (cenniki["cennik55"].emoji6),
                                value: '6',
                            },
                            {
                                label: (cenniki["cennik55"].label7),
                                description: (cenniki["cennik55"].description7),
                                emoji: (cenniki["cennik55"].emoji7),
                                value: '7',
                            },
                            {
                                label: (cenniki["cennik55"].label8),
                                description: (cenniki["cennik55"].description8),
                                emoji: (cenniki["cennik55"].emoji8),
                                value: '8',
                            },
                            {
                                label: (cenniki["cennik55"].label9),
                                description: (cenniki["cennik55"].description9),
                                emoji: (cenniki["cennik55"].emoji9),
                                value: '9',
                            },
                            {
                                label: (cenniki["cennik55"].label10),
                                description: (cenniki["cennik55"].description10),
                                emoji: (cenniki["cennik55"].emoji10),
                                value: '10',
                            },
                            {
                                label: (cenniki["cennik55"].label11),
                                description: (cenniki["cennik55"].description11),
                                emoji: (cenniki["cennik55"].emoji11),
                                value: '11',
                            },
                            {
                                label: (cenniki["cennik55"].label12),
                                description: (cenniki["cennik55"].description12),
                                emoji: (cenniki["cennik55"].emoji12),
                                value: '12',
                            },
                            {
                                label: (cenniki["cennik55"].label13),
                                description: (cenniki["cennik55"].description13),
                                emoji: (cenniki["cennik55"].emoji13),
                                value: '13',
                            },
                            {
                                label: (cenniki["cennik55"].label14),
                                description: (cenniki["cennik55"].description14),
                                emoji: (cenniki["cennik55"].emoji14),
                                value: '14',
                            },
                            {
                                label: (cenniki["cennik55"].label15),
                                description: (cenniki["cennik55"].description15),
                                emoji: (cenniki["cennik55"].emoji15),
                                value: '15',
                            },
                        ])

                )
            interaction.reply({ embeds: [embed], components: [row], ephemeral: true });
        }
    }
    if (interaction.customId === "CENNIK5_SELECTED") {
        if (interaction.values[0] === "2") {

            const embed = new EmbedBuilder()
                .setTitle(' ')
                .setThumbnail(interaction.guild.iconURL())
                .setDescription('**```🪐 DreamShop™ × OFERTA K0NTA```**\n> - **<:NORDVPN:1317554460620361748> × NORDVPN**\n> - **<:IPVANISH:1320696349225779210> × IPVANISH**\n> - **<:MULLVADVPN:1317554446011727913> × MULLVAD**\n> - **<:SURFSHARK:1317569480011808898> × SURFSHARK**\n')
                .setColor(config["Ogólne"].kolor)

            const row = new ActionRowBuilder()
                .addComponents(
                    new StringSelectMenuBuilder()
                        .setCustomId("CENNIK66_SELECTED")
                        .setPlaceholder(cenniki["cennik66"].placeholder)
                        .addOptions([
                            {
                                label: (cenniki["cennik66"].label1),
                                description: (cenniki["cennik66"].description1),
                                emoji: (cenniki["cennik66"].emoji1),
                                value: '1',
                            },
                            {
                                label: (cenniki["cennik66"].label2),
                                description: (cenniki["cennik66"].description2),
                                emoji: (cenniki["cennik66"].emoji2),
                                value: '2',
                            },
                            {
                                label: (cenniki["cennik66"].label3),
                                description: (cenniki["cennik66"].description3),
                                emoji: (cenniki["cennik66"].emoji3),
                                value: '3',
                            },
                            {
                                label: (cenniki["cennik66"].label4),
                                description: (cenniki["cennik66"].description4),
                                emoji: (cenniki["cennik66"].emoji4),
                                value: '4',
                            },
                        ])

                )
            interaction.reply({ embeds: [embed], components: [row], ephemeral: true });
        }
    }
    if (interaction.customId === "CENNIK4_SELECTED") {
        if (interaction.values[0] === "4") {

            const embed = new EmbedBuilder()
                .setTitle(' ')
                .setThumbnail(interaction.guild.iconURL())
                .setDescription('**```🪐 DreamShop™ × OFERTA GRY```**\n> - **<:FIVEM:1317554393003982900> × FIVEM**\n> - **<:CS2:1317539340447907860> × CS2**\n> - **<:VALORANT:1317569498232127619> × VALORANT**\n> - **<a:MINECRAFT:1320094582347665501> × MINECRAFT**')
                .setColor(config["Ogólne"].kolor)

            const row = new ActionRowBuilder()
                .addComponents(
                    new StringSelectMenuBuilder()
                        .setCustomId("CENNIK444_SELECTED")
                        .setPlaceholder(cenniki["cennik444"].placeholder)
                        .addOptions([
                            {
                                label: (cenniki["cennik444"].label1),
                                description: (cenniki["cennik444"].description1),
                                emoji: (cenniki["cennik444"].emoji1),
                                value: '1',
                            },
                            {
                                label: (cenniki["cennik444"].label2),
                                description: (cenniki["cennik444"].description2),
                                emoji: (cenniki["cennik444"].emoji2),
                                value: '2',
                            },
                            {
                                label: (cenniki["cennik444"].label3),
                                description: (cenniki["cennik444"].description3),
                                emoji: (cenniki["cennik444"].emoji3),
                                value: '3',
                            },
                            {
                                label: (cenniki["cennik444"].label4),
                                description: (cenniki["cennik444"].description4),
                                emoji: (cenniki["cennik444"].emoji4),
                                value: '4',
                            },
                        ])

                )
            interaction.reply({ embeds: [embed], components: [row], ephemeral: true });
        }
    }
    if (interaction.customId === "CENNIK4_SELECTED") {
        if (interaction.values[0] === "3") {

            const embed = new EmbedBuilder()
                .setTitle(' ')
                .setThumbnail(interaction.guild.iconURL())
                .setDescription('**```🪐 DreamShop™ × OFERTA DOŁADOWANIA DO GIER ```**\n> - **<:FORTNITE:1317554396879519854> × FORTNITE**\n> - **<:VALORANT:1317569498232127619> × VALORANT**\n> - **<:BRAWLSTARS:1317539290208665710> × BRAWL STARS**\n> - **<:ROBLOX:1317554508661915648> × ROBLOX**\n> - **<:CLASHOFCLANS:1317539326510370857> × CLASH ROYALE**\n')
                .setColor(config["Ogólne"].kolor)

            const row = new ActionRowBuilder()
                .addComponents(
                    new StringSelectMenuBuilder()
                        .setCustomId("CENNIK44_SELECTED")
                        .setPlaceholder(cenniki["cennik44"].placeholder)
                        .addOptions([
                            {
                                label: (cenniki["cennik44"].label1),
                                description: (cenniki["cennik44"].description1),
                                emoji: (cenniki["cennik44"].emoji1),
                                value: '1',
                            },
                            {
                                label: (cenniki["cennik44"].label2),
                                description: (cenniki["cennik44"].description2),
                                emoji: (cenniki["cennik44"].emoji2),
                                value: '2',
                            },
                            {
                                label: (cenniki["cennik44"].label3),
                                description: (cenniki["cennik44"].description3),
                                emoji: (cenniki["cennik44"].emoji3),
                                value: '3',
                            },
                            {
                                label: (cenniki["cennik44"].label4),
                                description: (cenniki["cennik44"].description4),
                                emoji: (cenniki["cennik44"].emoji4),
                                value: '4',
                            },
                            {
                                label: (cenniki["cennik44"].label5),
                                description: (cenniki["cennik44"].description5),
                                emoji: (cenniki["cennik44"].emoji5),
                                value: '5',
                            },
                        ])

                )
            interaction.reply({ embeds: [embed], components: [row], ephemeral: true });
        }
    }
    if (interaction.customId === "CENNIK5_SELECTED") {
        if (interaction.values[0] === "3") {

            const embed = new EmbedBuilder()
                .setColor(config["Ogólne"].kolor)
                .setTitle(cenniki["cennik_open54"].title)
                .setDescription(cenniki["cennik_open54"].description)
                .setImage(cenniki["cennik_open54"].image)
                .setFooter({ text: cenniki["cennik_open54"].footer });


            interaction.reply({ embeds: [embed], ephemeral: true });
        }
    }
    if (interaction.customId === "CENNIK5_SELECTED") {
        if (interaction.values[0] === "4") {

            const embed = new EmbedBuilder()
                .setColor(config["Ogólne"].kolor)
                .setTitle(cenniki["cennik_open55"].title)
                .setDescription(cenniki["cennik_open55"].description)
                .setImage(cenniki["cennik_open55"].image)
                .setFooter({ text: cenniki["cennik_open55"].footer });


            interaction.reply({ embeds: [embed], ephemeral: true });
        }
    }
    if (interaction.customId === "CENNIK5_SELECTED") {
        if (interaction.values[0] === "5") {

            const embed = new EmbedBuilder()
                .setColor(config["Ogólne"].kolor)
                .setTitle(cenniki["cennik_open56"].title)
                .setDescription(cenniki["cennik_open56"].description)
                .setImage(cenniki["cennik_open56"].image)
                .setFooter({ text: cenniki["cennik_open56"].footer });


            interaction.reply({ embeds: [embed], ephemeral: true });
        }
    }
    if (interaction.customId === "CENNIK444_SELECTED") {
        if (interaction.values[0] === "2") {

            const embed = new EmbedBuilder()
                .setColor(config["Ogólne"].kolor)
                .setTitle(cenniki["cennik_open62"].title)
                .setDescription(cenniki["cennik_open62"].description)
                .setImage(cenniki["cennik_open62"].image)
                .setFooter({ text: cenniki["cennik_open62"].footer });


            interaction.reply({ embeds: [embed], ephemeral: true });
        }
    }
    if (interaction.customId === "CENNIK444_SELECTED") {
        if (interaction.values[0] === "3") {

            const embed = new EmbedBuilder()
                .setColor(config["Ogólne"].kolor)
                .setTitle(cenniki["cennik_open63"].title)
                .setDescription(cenniki["cennik_open63"].description)
                .setImage(cenniki["cennik_open63"].image)
                .setFooter({ text: cenniki["cennik_open63"].footer });


            interaction.reply({ embeds: [embed], ephemeral: true });
        }
    }
    if (interaction.customId === "CENNIK444_SELECTED") {
        if (interaction.values[0] === "4") {

            const embed = new EmbedBuilder()
                .setColor(config["Ogólne"].kolor)
                .setTitle(cenniki["cennik_open64"].title)
                .setDescription(cenniki["cennik_open64"].description)
                .setImage(cenniki["cennik_open64"].image)
                .setFooter({ text: cenniki["cennik_open64"].footer });


            interaction.reply({ embeds: [embed], ephemeral: true });
        }
    }
    if (interaction.customId === "CENNIK444_SELECTED") {
        if (interaction.values[0] === "1") {

            const embed = new EmbedBuilder()
                .setTitle(' ')
                .setThumbnail(interaction.guild.iconURL())
                .setDescription('**```🪐 DreamShop™ × OFERTA GRY```**\n> - **<:SUSANO:1317569481748385832> × SUSANO**\n> - **<:TZ1:1317569493496496138> × TZ**\n> - **<:TZX:1320532451713613824> × TZX**\n> - **<:YOULEEN:1317569532302327909> × YOULEEN**\n> - **<:FIVEM:1317554393003982900> × FIVEM W00F3R**')
                .setColor(config["Ogólne"].kolor)

            const row = new ActionRowBuilder()
                .addComponents(
                    new StringSelectMenuBuilder()
                        .setCustomId("CENNIK4444_SELECTED")
                        .setPlaceholder(cenniki["cennik4444"].placeholder)
                        .addOptions([
                            {
                                label: (cenniki["cennik4444"].label1),
                                description: (cenniki["cennik4444"].description1),
                                emoji: (cenniki["cennik4444"].emoji1),
                                value: '1',
                            },
                            {
                                label: (cenniki["cennik4444"].label2),
                                description: (cenniki["cennik4444"].description2),
                                emoji: (cenniki["cennik4444"].emoji2),
                                value: '2',
                            },
                            {
                                label: (cenniki["cennik4444"].label3),
                                description: (cenniki["cennik4444"].description3),
                                emoji: (cenniki["cennik4444"].emoji3),
                                value: '3',
                            },
                            {
                                label: (cenniki["cennik4444"].label4),
                                description: (cenniki["cennik4444"].description4),
                                emoji: (cenniki["cennik4444"].emoji4),
                                value: '4',
                            },
                            {
                                label: (cenniki["cennik4444"].label5),
                                description: (cenniki["cennik4444"].description5),
                                emoji: (cenniki["cennik4444"].emoji5),
                                value: '5',
                            },
                        ])

                )
            interaction.reply({ embeds: [embed], components: [row], ephemeral: true });
        }
    }
       if(interaction.customId === "PROWIZJA_SELECTED2") {
        if(interaction.values[0] === "1") {
                                   interaction.reply({content: `### **Krok 1: Tworzenie drugiego maila**
> Stwórz nowy adres e-mail na jednej z platform (np. WP, O2, Gmail, Outlook).

### **Krok 2: Rejestracja na stronie**
> Wejdź na stronę [patched.to](https://patched.to/) i załóż tam konto.

### **Krok 3: Weryfikacja konta**
> Po założeniu konta na [patched.to](https://patched.to/), zweryfikuj je przez kliknięcie linku, który otrzymasz na maila (ważne!).

### **Krok 4: Przeglądanie kategorii**
> Kliknij w zakładkę "Leaks" pod shoutbox'em, przewiń stronę lekko w dół i kliknij "Accounts".

### **Krok 5: Wybór kategorii**
> Wybierz kategorię, która Cię interesuje, np. "Streaming", "Gaming", "Porn", "VPN". Dla kont streamingowych wybierz "Streaming".

### **Krok 6: Wybór interesującego posta**
> Zobaczysz posty o nazwach takich jak: [❤️90X HBO MAX❤️] ⭐ PREMIUM ACCOUNTS ⭐ PREMIUM ⭐ FRESH HITS ⭐. Kliknij w interesujący Cię post.

### **Krok 7: Reakcja na post**
> Zauważysz komunikat:  
> *Hidden Content*  
> *You must reply to this thread to view this content or upgrade your account.*  
> Kliknij LIKE (ważne!), zjedź na sam dół strony, gdzie znajduje się pole "Reply".

### **Krok 8: Wpisanie odpowiedzi**
> Wpisz dowolny tekst w polu "Reply" i kliknij "Post Reply".

### **Krok 9: Odsłonięcie ukrytego kontentu**
> Po kliknięciu "Post Reply" wróć na pierwszą stronę, gdzie widzisz komunikat "Hidden Content". Jeśli konta się nie pojawią, kliknij F5 (odśwież stronę).`, ephemeral: true})
            
        } else if(interaction.values[0] === "2") {
   interaction.reply({content: `### Krok 1: Pobieranie proxy
> Darmowe proxy znajdziesz tutaj:
> - https://free-proxy-list.net/
> - https://proxydb.net/filter
> Płatne proxy możesz wyszukać w Google.

### Krok 2: Szukanie combolist
> Wyszukaj combolist (listy danych logowania) na forach takich jak:
> - Nulled
> - Cracked

### Krok 3: Pobieranie Open Bullet
> Pobierz program Open Bullet, który umożliwia wykorzystanie proxy i combolist.

### Krok 4: Konfiguracja Open Bullet
> Dodaj pobrane proxy i combolisty do programu.
> Rozpocznij proces crackowania.

### Krok 5: Tutoriale i poradniki
> Szczegółowe poradniki dotyczące Open Bullet znajdziesz tutaj:
> - [Oficjalny poradnik](https://openbullet.github.io/ob1/usage.html)
> - [Lepszy tutorial](https://www.nodo313.net/post/for-beginners-how-to-crack-any-account-with-openbullet-updated-30-03-2021.51780/) (dla początkujących)`, ephemeral: true})
            
        } else if(interaction.values[0] === "3") {
                    interaction.reply({content: `### Krok 1: Tworzenie konta
> Załóż konto na fałszywe dane.
> Użyj maila, numeru telefonu oraz nowego adresu IP (najlepiej w trybie incognito).

### Krok 2: Zamawianie przedmiotu
> Zamów przedmiot o maksymalnej wartości 150 zł (np. 145-147 zł).
> Upewnij się, że wysyłka jest realizowana z magazynu Amazon.
> Wybierz dostawę do Żabki i zapłać za pomocą BLIK-a.

### Krok 3: Zgłaszanie problemu
> Po otrzymaniu paczki wejdź w zakładkę "Problem z przedmiotem".
> Wybierz opcję "Nieprawidłowy produkt" i rozpocznij rozmowę na czacie.

### Krok 4: Opis problemu
> Napisz coś w stylu:
> "Dzień dobry, dziś odebrałem paczkę, którą zamawiałem jako prezent dla mojej mamy. Po rozpakowaniu okazało się, że jest pusta. Czy możecie coś z tym zrobić?"
> -# Możesz zmienić historię, np. na prezent z okazji chrzcin czy innego wydarzenia – ważne, by przekaz był podobny.

### Krok 5: Ważne szczegóły rozmowy
> Jeśli zapytają, czy paczka była uszkodzona, odpowiedz: "Nie".
> Jeśli zapytają, czy rozmawiają z właścicielem konta, odpowiedz: "Tak".

### Krok 6: Zwrot pieniędzy
> Zwrot powinien zostać zrealizowany w ciągu 24 godzin.`, ephemeral: true})
            
        } else if(interaction.values[0] === "4") {
                       interaction.reply({content: `### Krok 1: Znalezienie ofiary
> Zakładamy nowe konto discord gdzie będziemy szukać osób do zarobku.
> Potrzebujemy znaleźć osoby nie za mądre, czyli dzieci do lat 12.
> Polecam osoby z gier takich jak Roblox, czy Minecraft.

### Krok 2: Zachęcenie do konwersacji
> Zachęcasz osoby czacie, że rozdajesz coś za darmo, powiedzmy 100zł PSC oraz podajesz swojego discorda

### Krok 3: Socjotechnika
> Musisz wymyśleć sposób na wymuszenie od nich zeskanowania kodu QR ze [strony](https://messages.google.com/web/authentication)
> Na tej stronie będziesz miał wszystko objaśnione gdzie trzeba to zeskanować.

### Krok 4: Po zeskanowaniu
> Po zeskanowaniu zobaczysz wszystkie wiadomości na telefonie osoby, która to od Ciebie zeskanowała kod QR.
> - Klikasz "Nowa Wiadomość" i wysyłasz cokolwiek, na przykład "s" na maila z https://temp-mail.org/en/, wtedy przyjdzie tam numer danej osoby.
> - Następnie dany numer kopiujesz i wklejasz do https://super-sim.pl/w-jakiej-sieci aby sprawdzić w jakiej sieci jest dana osoba.

### Krok 5: Limity i zakupy
> Limity: 
> - Play - 800 PLN
> - Orange - 500 PLN
> - Plus - 150 PLN
> - T-Mobile - 100 PLN

> Strony do zakupów:
> - [Kinguin](https://www.kinguin.net/) (play,orange)
> - [Eneba](https://www.eneba.com/) (all)
> - [CSGO-Skins](https://csgo-skins.com/) (all)
> - [G2G](https://www.g2g.com/) (all)`, ephemeral: true})
            
        } else if(interaction.values[0] === "5") {
                       interaction.reply({content: `### Krok 1: Kontakt z obsługą klienta
> Skontaktuj się z działem obsługi klienta Red Bull przez:
> - Stronę internetową
> - E-mail: customerservice@redbullshopus.com
> - Messenger lub inne platformy kontaktowe.

### Krok 2: Zgłoszenie problemu
> Przekaż im, że podczas picia Red Bulla w pracy/szkole miałeś złe doświadczenia, np.:
> - Smakował naprawdę dziwnie.
> - Doświadczyłeś mdłości lub bólu głowy.
> - Czujesz, że mogło to być coś poważnego.
> Pamiętaj, by brzmieć przekonująco, jakby to wydarzenie było autentyczne.

### Krok 3: Poczekaj na ich odpowiedź
> Nie proś bezpośrednio o rekompensatę. Poczekaj, aż sami przeproszą i zaoferują nagrodę pocieszenia, np. darmowe zgrzewki Red Bulla.

### Krok 4: Co jeśli poproszą o dowód?
> Jeżeli zapytają o puszkę, powiedz, że ją wyrzuciłeś, ponieważ nie chciałeś ryzykować, aby ktokolwiek inny zachorował.`, ephemeral: true})
            
        } else if(interaction.values[0] === "6") {
                       interaction.reply({content: `### Linki do stron do darmowych obserwacji: 
> - https://famoid.com/geth-free-instagram-followers/
> - https://www.digismm.com/free-trial/instagram-followers
> - https://skweezer.net/trial
> - https://www.instafollowers.co/free-instagram-followers
> - https://www.socialnoor.com/free-trial/in...followers/
> - https://instagrowing.net/free-instagram-followers/
> - https://www.idigic.net/trial/
> - https://uberinsta.com/free-trial
> - https://www.instandid.com/free-trial/
> - http://instamoda.org/
> - http://begeni.vip/
> - https://takipci.instager.net/tools/
> - https://vipinstagramtakipci.com/
> - http://begenipanelim.com/
> - https://takipcistar.com/
> - https://igturk.com/
> - https://instagramtakipcihilesi.ist/l`, ephemeral: true})
            
        } else if(interaction.values[0] === "7") {
                       interaction.reply({content: `### Darmowa strona do kopiowania serwerów discord, emoji, itd.
> - https://shizeclone.eu/`, ephemeral: true})
            
        } else if(interaction.values[0] === "8") {
                       interaction.reply({content: `Metoda polega na zgłoszeniu użytkownika za naruszenie zasad Discorda, wskazując, że jest za młody, aby korzystać z platformy. 
### Krok 1: Inicjacja rozmowy
> Zacznij rozmowę z wybraną osobą w neutralny sposób.
> -# (jeżeli już wcześniej znałeś tą osobę to zrób/kup nowe konto discord i do napisz do niego z tego konta)
> Poproś o wysłanie np. zdjęcia dziecka jedzącego popcorn lub nawiąż do tematu wieku.

### Krok 2: Zapytanie o wiek
> Możesz zapytać np.: „Jaka jest twoja najlepsza ocena?” lub podobne neutralne pytanie.
> Po uzyskaniu odpowiedzi edytuj swoją wiadomość na: „Ile masz lat?”.

### Krok 3: Zgłoszenie
> Gdy osoba odpowie, liczbą od 8 do 15 możesz ją już zgłosić. 
> -# Minimalny wiek posiada konta discord w Polsce to 16 lat.
> Kliknij prawym przyciskiem myszy na wiadomość użytkownika z tą liczbą, a następnie wybierz kolejno:
> - Coś innego
> - Ta osoba jest zbyt młoda, by korzystać z Discorda
> - Tak, ta osoba podaje swój wiek w tej wiadomości
> Na końcu kliknij "Wyślij zgłoszenie".

### Krok 4: Efekt
> Po zgłoszeniu Discord zwykle weryfikuje sprawę. 
> Jeśli zgłoszenie zostanie zaakceptowane, użytkownik może otrzymać bana w ciągu 1-2 dni.`, ephemeral: true})
            
        } else if(interaction.values[0] === "9") {
                       interaction.reply({content: `### Krok 1: Przygotowanie przeglądarki
> Wybierz jedną z przeglądarek: Opera GX lub DuckDuck GO. Wyczyść całą przeglądarkę do zera. Następnie wejdź na stronę https://nike.com/pl.

### Krok 2: Przeglądanie strony
> Spędź na stronie 10–15 minut, przeglądając różne produkty. W tym czasie powinno wyskoczyć powiadomienie zachęcające do dołączenia do klubu Nike. Po minimum 10 minutach zarejestruj się do ich klubu.

### Krok 3: Rejestracja
> Użyj normalnego adresu e-mail (np. Gmail, Interia, Onet).
> Zaloguj się na swoje nowe konto.

### Krok 4: Dodawanie produktów
> Po zalogowaniu przeglądaj dalej stronę. Dodawaj różne produkty do ulubionych i koszyka.

### Krok 5: Wybór produktu
> Przejdź do zakładki Ulubione i wybierz produkty, które chcesz zamówić (jedną lub dwie pary butów). Następnie przejdź do płatności.

### Krok 6: Wypełnienie danych
> Podaj losowe dane (imię, nazwisko, adres), ale dopasuj kod pocztowy z adresu faktury do kodu pocztowego punktu odbioru.
> Wybierz punkt odbioru, najlepiej np. Żabka. Unikaj miejsc, które wymagają dowodu osobistego przy odbiorze (np. epaka).

### Krok 7: Odbiór przesyłki
> Po odebraniu paczki od razu napisz na czacie Nike.de. Powiedz, że paczka przyszła pusta, choć była nieuszkodzona. Wymyśl jakąś historię, która brzmi wiarygodnie.

### Krok 8: Zwrot pieniędzy
> Masz dwie możliwości:
> Instant Refund: Otrzymujesz zwrot pieniędzy od razu.
> Dochodzenie: Jeśli sprawa zostanie przekazana do działu dochodzeń, to najczęściej w ten sam dzień dostaniesz e-maila z przeprosinami i informacją, że zwrot pieniędzy został zatwierdzony.

### Krok 9: Co jeśli zwrot nie przyjdzie?
> Jeżeli tego samego dnia nie dostaniesz pieniędzy, napisz do nich ponownie, pytając o status dochodzenia. Zaznacz, że sprawa jest dla Ciebie pilna.`, ephemeral: true})
            
        } else if(interaction.values[0] === "10") {
                       interaction.reply({content: `### **Krok 1: Zakup telefonów**
> Kupuj używane iPhone’y po niższej cenie, a sprzedawaj drożej, zarabiając 200-300 zł na transakcji.
> Najlepiej kupować na Allegro lokalnie, Facebook Marketplace, OLX.

### **Krok 2: Sprzedaż telefonów**
> Sprzedawaj iPhone’y na OLX i Facebook Marketplace.  
> Zadbaj o dobrej jakości zdjęcia i szczegółowy opis produktu.

### **Krok 3: Wybór modelu**
> Najlepszy do flippingu jest model iPhone X (64 GB i wyższy). Choć to starszy telefon, cieszy się dużym popytem dzięki technologii i atrakcyjnej cenie.  
> Cena zakupu powinna wynosić 700-900 zł, a bateria powinna mieć około 85% pojemności.

### **Krok 4: Unikaj podejrzanych ofert**
> Nie kupuj telefonów w podejrzanie niskich cenach, np. iPhone 11 za 700 zł – najprawdopodobniej to scam.

### **Krok 5: Metody płatności**
> Zawsze płać gotówką lub za pobraniem z możliwością sprawdzenia zawartości paczki. Unikaj przelewów, chyba że zamawiasz przez Allegro.

### **Krok 6: Weryfikacja telefonu**
> Zawsze sprawdzaj IMEI i kod seryjny telefonu, aby upewnić się, że nie było w nim żadnych wymienianych części.  
> Nie kupuj iPhone’ów z niedziałającym Face ID.

### **Krok 7: Negocjacje i dodatkowe akcesoria**
> Zawsze próbuj wynegocjować chociaż 50 zł z ceny.  
> Poproś sprzedawcę o pudełko oraz, jeśli to możliwe, o ładowarkę i słuchawki.`, ephemeral: true})
            
        } else if(interaction.values[0] === "11") {
                       interaction.reply({content: `### Aplikacja APK
> - https://apkbigs.com/pl/spotify-premium-mod-apk/`, ephemeral: true})
            
        }   else if(interaction.values[0] === "12") {
            interaction.reply({content: `### Darmowy Adobe Pro 2022
> - https://mega.nz/file/9Rl0hJZA#P-oapw_q1HNPOxCvsy1SSzLTrwvpbtYtr3L1EESRkXU`, ephemeral: true})
            
        } else if(interaction.values[0] === "13") {
            interaction.reply({content: `### 1. Dropshipping
> Załóż sklep na Shopify i znajdź produkty na stronach takich jak CJdropshipping. Promuj sklep na TikToku czy Facebooku, pozyskuj klientów i zarabiaj na różnicy w cenach (np. kupujesz za 60 zł, sprzedajesz za 100 zł).

### 2. Odsprzedaż używanych ubrań
> Kupuj markowe ciuchy w second-handach, a sprzedawaj je na Vinted lub OLX. Skup się na sezonowych produktach, np. kurtki zimą, bluzy jesienią. Klucz do sukcesu? Dobre zdjęcia i opis!

### 3. Handel używanymi przedmiotami
> Znajduj ciekawe rzeczy w sklepach z używanymi rzeczami i sprzedawaj je z zyskiem.

### 4. Darmowe przedmioty z OLX
> Wyszukuj przedmioty oddawane za darmo na OLX i inne platformy – odsprzedaj je za gotówkę!

### 5. Pośrednictwo w transakcjach
> Zostań pośrednikiem, np. znajdź rower za 500 zł, sprzedaj za 550 zł i zarób różnicę.

### 6. Monetyzacja umiejętności
> Masz talent? Oferuj swoje usługi na Fiverr, OLX lub lokalnie (np. korepetycje, grafika, rękodzieło).

### 7. Marketing afiliacyjny
> Reklamuj produkty innych firm i zarabiaj na prowizjach od sprzedaży.

### 8. Tworzenie treści w social mediach
> Zacznij publikować na TikToku, Instagramie czy YouTube. Popularność pozwoli Ci zarabiać na reklamach lub promowaniu własnych produktów.

### 9. Testowanie gier i stron internetowych
> Zostań testerem – wiele firm płaci za opinię na temat ich gier czy stron.

### 10. Inwestowanie w kryptowaluty
> Obejrzyj poradniki na YouTube, np. [Ten film](https://youtu.be/lGhFX4Pwj6Y), i zacznij inwestować w kryptowaluty.

### 11. Obstawianie zakładów sportowych
> Spróbuj obstawiania pewnych zakładów, np. boksu, gdzie wyniki są często przewidywalne.

### 12. Renowacja przedmiotów
> Kupuj tanie rzeczy (np. rowery, meble, telefony), odnawiaj je i sprzedawaj z zyskiem. Możesz również odnawiać domy – zyski mogą sięgać nawet 500 000 zł!

### 13. Wykorzystanie talentów
> Pomyśl, co umiesz robić lub co posiadasz. Gotowanie, malowanie, udzielanie korepetycji – monetyzuj to, co potrafisz najlepiej.`, ephemeral: true})
            
        } else if(interaction.values[0] === "14") {
            interaction.reply({content: `### Darmowy autobumer do Disboard.org
> - https://github.com/Deelite34/PD2-AutoBumper`, ephemeral: true})
            
        } else if(interaction.values[0] === "15") {
            interaction.reply({content: `### Darmowy Nuk3r Discord
> - https://github.com/TT-Tutorials/GANG-Nuker`, ephemeral: true})
            
        }
    }
    if(interaction.customId === "PROWIZJA_SELECTED1") {
        if(interaction.values[0] === "1") {
                                   interaction.reply({content: `### Strony z darmowymi walkami Freakfight MMA:
> - https://strimov.site
> - https://strimov.site`, ephemeral: true})
            
        } else if(interaction.values[0] === "2") {
   interaction.reply({content: `### **1. Ustawienia karty graficznej NVIDIA**
- Włącz **tryb wysokiej wydajności** w panelu sterowania NVIDIA, w zakładce ustawień 3D.

### **2. Wyłącz zbędne programy w tle**
- W **Menedżerze zadań** zakończ niepotrzebne aplikacje i wyłącz zbędne programy w **Uruchamianiu**.

### **3. Przeinstalowanie systemu**
- Format dysku i instalacja systemu mogą poprawić wydajność.

### **4. Aktualizacja sterowników**
- Zainstaluj najnowsze sterowniki karty graficznej ze strony NVIDIA.

### **5. Skanowanie antywirusem**
- Przeskanuj komputer programem antywirusowym lub **Malwarebytes**.

### **6. Przeczyszczenie systemu**
- Użyj **CCleaner** do usunięcia zbędnych plików.

### **7. Opcje wydajności systemu**
- Ustaw wysoki priorytet gry w **Menedżerze zadań** i używaj **Razer Cortex**.

### **8. Chłodzenie i wentylacja**
- Przeczyść komputer z kurzu i zapewnij odpowiednią wentylację.

### **9. Ustawienia gry**
- Obniż rozdzielczość i jakość grafiki w ustawieniach gry.

### **10. Podkręcanie podzespołów**
- Tylko dla zaawansowanych użytkowników – podkręć procesor lub kartę graficzną ostrożnie.

### **11. Usuwanie plików tymczasowych**
- Usuń pliki z folderów:  
  - \`C:\Windows\Prefetch\`  
  - \`C:\Windows\Temp\`

### **12. Zmiana antywirusa**
- Zmień antywirus na lżejszy, np. **Panda** lub **ESET**.

### **13. Odinstalowanie zbędnych programów**
- Usuń aplikacje producenta sprzętu i domyślnie zainstalowane programy Windows.

### **14. Aktualizacje**
- Zaktualizuj system Windows i sterowniki.

### **15. Zmiana wersji systemu**
- Przejdź na **Windows 8.1** dla lepszej wydajności.

### **16. Wymiana pasty termoprzewodzącej**
- Wymień pastę na procesorze i karcie graficznej, jeśli komputer się przegrzewa.

### **17. Podłącz laptopa do ładowarki**
- W trybie zasilania sieciowego wydajność laptopa jest wyższa niż w trybie bateryjnym.`, ephemeral: true})
            
        } else if(interaction.values[0] === "3") {
                    interaction.reply({content: `### Strony z wymianami PSC:
> - https://wymienpsc.pl/ (Prowizja: 47%)
> - https://psc.wtf/ (Prowizja: 30%)
> - https://pscwymiana.pl/ (Prowizja: 20-70%)`, ephemeral: true})
            
        } else if(interaction.values[0] === "4") {
                       interaction.reply({content: `### Krok 1: Przeglądanie strony
> Przejdź do strony [serveroffer.lt](https://serveroffer.lt/) i przeglądaj ofertę przez chwilę, aż pojawi się taka [wiadomość](https://gyazo.com/c4...b2a6f5b77cc9d68)
> Odpowiedz grzecznie na wiadomość, którą otrzymasz.

### Krok 3: Wybór pakietu
> Zapytają Cię, jakiego pakietu potrzebujesz. Wybierz jeden z oferowanych, np. VDS-10 (może być zbyt duży), ale możesz rozważyć VDS-3 lub inny mniejszy plan, jeśli to możliwe.

### Krok 4: Testowanie różnych serwerów
> Spróbuj wybrać różne opcje serwerów, aby zobaczyć, który najbardziej Ci odpowiada.

### Krok 5: Podanie danych konta
> Poproszą o dane do konta. Użyj fałszywych danych, aby nie podawać swoich prawdziwych informacji.

### Krok 6: Wybór systemu operacyjnego
> Poproszą również o wybór systemu operacyjnego. Wybierz Debian 9, ponieważ Windows może wymagać większych zasobów, co nie jest efektywne.

### Krok 7: Otrzymanie informacji o serwerze
> Po zakończeniu procesu otrzymasz szczegóły dotyczące serwera w wiadomości e-mail.`, ephemeral: true})
            
        } else if(interaction.values[0] === "5") {
                       interaction.reply({content: `### Darmowe portfele nie wymagające weryikacji:
> - https://www.exodus.com/
> - https://trustwallet.com/
> - https://phantom.com/ (Głównie pod Solane)`, ephemeral: true})
            
        } else if(interaction.values[0] === "6") {
                       interaction.reply({content: `### **Krok 1: Wyszukiwanie kont**
> Wejdź na Snapchat i wyszukaj konta takie jak "spam", "Ddddddd", "aaaaa" lub inne podobne.

### **Krok 2: Dodawanie kont**
> Dodaj wszystkie te konta. Pamiętaj, że im więcej kont dodasz, tym wyższy Snapscore uzyskasz.

### **Krok 3: Tworzenie skrótu**
> Stwórz skrót z tymi dodanymi kontami.

### **Krok 4: Nagrywanie filmu**
> Nagraj film składający się z 10 slajdów, gdzie każdy slajd ma maksymalnie 1 sekundę.

### **Krok 5: Wysyłanie filmu**
> Wyślij ten film do skrótu z dodanymi kontami.

### **Krok 6: Powtarzanie czynności**
> Po wysłaniu filmu wyjdź i ponownie wejdź na Snapchata, a następnie powtórz te same kroki.`, ephemeral: true})
            
        } else if(interaction.values[0] === "7") {
                       interaction.reply({content: `### Linki do wycieków danych z PandaBuy:
> - https://drive.google.com/file/d/1nzx0sebNrgdsJs2IubgrnVshz5Gu6iyZ/view?usp=sharing
> - https://drive.google.com/file/d/1dEIrc0TrScKnqVwEk-DMkUBA0pUXyG3c/view?usp=sharing
> - https://drive.google.com/file/d/1fd1hYSFnsmLst08Y-p2jw-nWyST9gniA/view?usp=sharing`, ephemeral: true})
            
        } else if(interaction.values[0] === "8") {
                       interaction.reply({content: `### Linki do darmowych dysków z leakiem OnlyFansa Fagaty:
> - https://direct-link.net/960064/fagata-onlyfans
> - https://link-hub.net/960064/fagata-onlyfans-2`, ephemeral: true})
            
        } else if(interaction.values[0] === "9") {
                       interaction.reply({content: `### Krok 1: Zainstaluj VPN
> Pobierz i zainstaluj VPN, aby ukryć swoje prawdziwe IP i uniknąć wykrycia. Możesz skorzystać z różnych dostępnych darmowych lub płatnych VPN-ów.

### Krok 2: Rejestracja na stronie
> Wejdź na stronę oferującą darmowe domeny dla firm, np. ut.pl (lub inną firmę oferującą podobne promocje).
> Zarejestruj konto na firmę, nie na osobę prywatną, używając danych istniejącej firmy. Możesz znaleźć te dane w Internecie, np. NIP i adres firmy.

### Krok 3: Rejestracja domeny
> Zarejestruj domenę na konto firmy. Na jednym koncie przypadają 3 darmowe domeny.
> Upewnij się, że podajesz fałszywe dane firmy i używasz VPN, aby ukryć swoje IP.

### Krok 4: Rejestracja kolejnych domen
> Po zarejestrowaniu pierwszej partii domen, wyloguj się i zmień swoje IP (np. przez VPN).
> Używaj innych danych (np. innej firmy, innego NIP-u) i zarejestruj kolejne domeny.

### Krok 5: Powtarzaj proces
> Powtarzaj proces rejestracji, aby zarejestrować jeszcze więcej domen. Możesz w ten sposób zarejestrować nawet 15 domen na jednym VPN-ie, zmieniając dane i IP za każdym razem.

### Krok 6: Uważaj na wykrycie
> Zawsze upewnij się, że używasz innych danych i zmieniasz IP. Jeśli będziesz tego przestrzegać, unikniesz wykrycia i blokady konta.`, ephemeral: true})
            
        } else if(interaction.values[0] === "10") {
                       interaction.reply({content: `**Jak odebrać 3-miesięczną subskrypcję Nitro na Discordzie?**
### Krok 1: Kup Xbox Game Pass Ultimate
> Wejdź na poniższą stronę i zakup Xbox Game Pass Ultimate za 4 PLN:
> [Microsoft Xbox Game Pass Ultimate](https://www.xbox.com/pl-pl/games/store/xbox-game-pass-ultimate/cfq7ttc0khs0?irgwc=1&OCID=AID2000142_aff_7811_1246483&tduid=&=active&SilentAuth=1&wa=wsignin1.0)

### Krok 2: Aktywacja Nitro
> Po zakupie Xbox Game Pass Ultimate, będziesz mieć możliwość odebrania 3-miesięcznej subskrypcji Discord Nitro.

-# **<a:ALERT2:1317539272760361092> METODA DZIAŁA TYLKO, GDY NIE MIAŁEŚ N!TR0 NA SWOIM KONCIE <a:ALERT2:1317539272760361092>**`, ephemeral: true})
            
        } else if(interaction.values[0] === "11") {
                       interaction.reply({content: `### 1. Disboard.org
> Disboard to platforma, na której łatwo promujesz swój serwer Discord. Wymaga jednak ręcznej weryfikacji, która może zająć do dwóch miesięcy.
> Aby zacząć, dodaj swój serwer na stronie Disboard, dodaj ich bota do swojego serwera i wpisz komendę /invite na kanale weryfikacyjnym, aby umożliwić ludziom dołączenie przez link.
> Co dwie godziny używaj komendy /bump, aby podbić swoją pozycję na liście serwerów. Dzięki temu Twój serwer zyskuje większą widoczność i przyciąga nowych użytkowników.

### 2. Partnerstwa
> Twórz na swoim serwerze specjalny kanał, np. o nazwie "Partnerstwa", i wymieniaj się reklamami z innymi serwerami.
> W zamian za reklamę na Twoim serwerze, Ty promujesz inne serwery. Upewnij się, że spełniasz wymagania niektórych serwerów, np. minimalną liczbę członków (np. 50 osób).

### 3. Real M3mbers
> Możesz kupić prawdziwych członków na swój serwer, którzy będą aktywnymi użytkownikami.
> Można ich kupić u nas! -> <#1277652964621811825> 

### 4. Reklama na Serwerach Discord Przeznaczonych do Promocji
> Dołącz do serwerów przeznaczonych do reklamowania innych serwerów, gdzie możesz promować swój.
> Oto kilka linków do takich serwerów:
> - https://discord.gg/shadershub
> - https://discord.gg/shadersy
> - https://discord.gg/shadersgg

### 5. Reklama na Prywatnych Wiadomościach
> Rozważ reklamowanie swojego serwera bezpośrednio poprzez wiadomości prywatne do użytkowników. Pamiętaj jednak, by nie nadużywać tej metody, aby nie zostać uznanym za spamera.

### 6. Link w Statusie na Discordzie
> Dodaj link do swojego serwera w opisie swojego profilu na Discordzie. Dzięki temu osoby odwiedzające Twój profil mogą łatwo znaleźć i dołączyć do Twojego serwera.

### 7. Konkursy
> Rób konkursy na dobre nagrody z takimi wymaganiami jak:
> - Zapraszanie osób
> - Ustawienie waszego linku w statusie`, ephemeral: true})
            
        }   else if(interaction.values[0] === "12") {
            interaction.reply({content: `### Krok 1: Konto
> Najpierw potrzebujesz konto z 5000 lub więcej obserwacjami, jeżeli chcesz zbanować konto z ok. 1000 obserwacjami.

### Krok 2: Pobierz profilowe ofiary
> Wejdź na instadp.io i pobierz profilowe twojego celu.

### Krok 3: Zmień swoje profilowe
> Zmień swoje profilowe, na te same co ma twoja ofiara.

### Krok 4: Zgłoszenie
> Wejdź na jego profil i zgłoś go za podszywanie się pod ciebie.

### Krok 5: Dalsze działania
> Po zgłoszeniu, opuść profil i w ciągu 24h konto ofiary powinno być zbanowane.

-# Uwaga: im więcej masz followersów, tym większa jest szansa na udane zbanowanie konta ofiary.`, ephemeral: true})
            
        }
    }
})