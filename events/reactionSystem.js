const client = require('../main');
const config = require('../config.js');

client.on('ready', async () => {
    const channel = await client.channels.fetch(config["reaction_timeout"].channel);
    const messages = await channel.messages.fetch({ limit: 100 });

    messages.forEach(message => {
        message.reactions.cache.forEach(async reaction => {
            if (reaction.emoji.id === config["reaction_timeout"].emoji) {
                const users = await reaction.users.fetch();
                users.forEach(async user => {
                    if (!user.bot) {
                        const member = await message.guild.members.fetch(user.id);
                        try {
                            const timeoutDuration = 7 * 24 * 60 * 60 * 1000;
                            await member.timeout(timeoutDuration, "Timeout za reakcję z emoji NIE");
                        } catch (error) {
                            console.error(`Błąd podczas nadawania timeouta dla ${user.tag}:`, error);
                        } finally {
                            await reaction.users.remove(user.id).catch(err => {
                                console.error(`Nie udało się usunąć reakcji użytkownika ${user.tag}:`, err);
                            });
                        }
                    }
                });
            }
        });
    });
});

client.on('messageReactionAdd', async (reaction, user) => {
    if (user.bot) return;

    const guild = reaction.message.guild;
    const member = guild.members.cache.get(user.id);

    const targetChannelId = config["reaction_timeout"].channel;
    const targetEmojiId = config["reaction_timeout"].emoji;

    if (reaction.message.channel.id === targetChannelId) {
        if (reaction.emoji.id !== targetEmojiId) {
            return;
        }

        try {
            const timeoutDuration = 7 * 24 * 60 * 60 * 1000;
            await member.timeout(timeoutDuration, "Timeout za reakcję z emoji NIE");
        } catch (error) {
            console.error(`Błąd podczas nadawania timeouta dla ${user.tag}:`, error);
        } finally {
            await reaction.users.remove(user.id).catch(err => {
                console.error(`Nie udało się usunąć reakcji użytkownika ${user.tag}:`, err);
            });
        }
    }
});
