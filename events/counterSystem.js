const client = require('..');
const config = require('../config.js');

client.on('ready', () => {
    async function countMessages(channel) {
        let totalCount = 0;
        let lastMessageId = null;

        while (true) {
            const options = { limit: 100 };
            if (lastMessageId) {
                options.before = lastMessageId;
            }

            const messages = await channel.messages.fetch(options);
            const filteredMessages = messages.filter(msg => !msg.author.bot || msg.webhookId);
            const messageCount = filteredMessages.size;

            totalCount += messageCount;

            if (messages.size < 100) {
                break;
            }

            lastMessageId = messages.last().id;
        }

        return totalCount;
    }

    setInterval(async () => {
        try {
            const channel = client.channels.cache.get(config["licznik"].channel);
            if (!channel) return console.error("Kanał nie został znaleziony.");

            const totalMessageCount = await countMessages(channel);

            await channel.setName(`${config["licznik"].name}${totalMessageCount}`);
        } catch (error) {
            console.error("Wystąpił błąd:", error);
        }
    }, 10000);
});