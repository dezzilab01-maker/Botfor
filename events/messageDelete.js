const config = require('../config.js');
const chalk = require("chalk-v2");
const client = require('../main.js');
const { connectToDatabase_claimTicket } = require('./mongodbSystem.js');

client.on('messageCreate', async (message) => {
    const requiredRoleId = '1313958786108620974';
    const bypassRoleIds = ['1315430725935300690', '1313958781792682065', '1313958782723952641', '1313958778793889882'];
    const allowedCategoryIds = config["allowedCategories"].ticketCategories;

    if (allowedCategoryIds.includes(message.channel.parentId)) {
        const hasBypassRole = bypassRoleIds.some(roleId => message.member.roles.cache.has(roleId));
        if (message.member.roles.cache.has(requiredRoleId) && !hasBypassRole) {
            try {
                const collection = await connectToDatabase_claimTicket();
                const ticket = await collection.findOne({ channelId: message.channel.id });

                if (!ticket) {
                    await message.delete().catch(() => { });
                }
            } catch (error) {
                console.error(chalk.redBright('[BOT ERROR]'), error);
            }
        }
    }
});