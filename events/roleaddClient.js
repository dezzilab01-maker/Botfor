const client = require('..');
const config = require('../config.js');

const { connectToDatabase_balanceclient } = require('./mongodbSystem.js');
const { progiZarobkow } = require('../config.js');

client.on('ready', () => {
    const monitorZarobkow = async () => {
        try {
            const collection = await connectToDatabase_balanceclient();

            const users = await collection.find({}).toArray();

            for (const user of users) {
                const userId = user.userId;
                const balance = user.balance;
                let rolesAssigned = false;

                for (const { threshold, roleId } of progiZarobkow) {
                    if (balance >= threshold) {
                        const guild = client.guilds.cache.get(config["Opcje"].guild);
                        if (!guild) continue;

                        const member = await guild.members.fetch(userId).catch(() => null);
                        if (!member) continue;

                        if (!member.roles.cache.has(roleId)) {
                            try {
                                await member.roles.add(roleId);
                                rolesAssigned = true;
                            } catch (error) {
                                console.error(`Błąd podczas nadawania roli ${roleId} użytkownikowi ${userId}:`, error);
                            }
                        } else {
                        }
                    }
                }

                if (!rolesAssigned) {
                }
            }
        } catch (error) {
            console.error('Błąd w monitorowaniu zarobków:', error);
        }
    };

    setInterval(monitorZarobkow, 300000);
});
