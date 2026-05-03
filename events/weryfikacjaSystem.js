const config = require("../config.js");
const client = require('../main');


client.on("guildMemberUpdate", async (oldMember, newMember) => {
    const targetRoleId = (config["weryfikacja"].ping_rola);
    if (!oldMember.roles.cache.has(targetRoleId) && newMember.roles.cache.has(targetRoleId)) {

        const channel1 = newMember.guild.channels.cache.get("1331204630931308597");
        const channel2 = newMember.guild.channels.cache.get("1331219649655996450");
        const channel3 = newMember.guild.channels.cache.get("1331209107662704670");

        const messageContent = `<@${newMember.user.id}>`;

        try {
            const message1 = await channel1.send({ content: messageContent });
            const message2 = await channel2.send({ content: messageContent });
            const message3 = await channel3.send({ content: messageContent });

            setTimeout(async () => {
                await message1.delete();
                await message2.delete();
                await message3.delete();
            }, 3000);
        } catch (error) {
            console.error("Wystąpił błąd przy wysyłaniu wiadomości:", error);
        }
    }
});
