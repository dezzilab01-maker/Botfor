const config = require("../config.js");
const client = require('../main');

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    const allowedRoles = config["antylink"].dostęp;

    const hasAllowedRole = message.member.roles.cache.some(role => allowedRoles.includes(role.id));

    if (/https?:\/\/[^\s]+/.test(message.content) && !hasAllowedRole) {
        try {
            await message.delete();
        } catch (error) {
            console.error(`Nie udało się usunąć wiadomości od ${message.author.tag}: ${error.message}`);
        }
    }
});
