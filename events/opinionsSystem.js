const { EmbedBuilder } = require('discord.js');
const config = require('../config.js');
const chalk = require("chalk-v2");
const client = require('../main.js');
const { connectToDatabase_opinie } = require('./mongodbSystem.js');

client.on('messageCreate', async (message) => {
    const targetChannelIdOpinions = config["opinie"].channel;

    if (message.channel.id === targetChannelIdOpinions && !message.author.bot) {
        await message.delete().catch(() => { });
    }

    if (message.channel.id === targetChannelIdOpinions && message.webhookId) {
        const isReminderEmbed = message.embeds.some(embed =>
            embed.description === (config["opinie"].sticked_description)
        );

        if (isReminderEmbed) return;

        const embed = new EmbedBuilder()
            .setDescription(config["opinie"].sticked_description)
            .setColor(config["Ogólne"].kolor);

        try {
            const collection = await connectToDatabase_opinie();
            const existingMessage = await collection.findOne({ channelId: message.channel.id });

            if (existingMessage) {
                const oldMessage = await message.channel.messages.fetch(existingMessage.messageId).catch(() => null);
                if (oldMessage) {
                    await oldMessage.delete();
                }
            }

            const sentMessage = await message.channel.send({ embeds: [embed] });

            await collection.updateOne(
                { channelId: message.channel.id },
                { $set: { messageId: sentMessage.id } },
                { upsert: true }
            );
        } catch (error) {
            console.error(chalk.redBright('[BOT ERROR]'), error);
        }
    }
});