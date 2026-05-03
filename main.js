const fs = require('fs');
const { Client, GatewayIntentBits, Collection } = require('discord.js')
const mongoose = require(`mongoose`)
const config = require(`./config.js`)

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildPresences,
		GatewayIntentBits.GuildMessageReactions,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildVoiceStates,
	],
});
process.on('uncaughtException', (error, origin) => {
    console.log(origin);
    console.log(error);
});

process.on('unhandledRejection', (error, origin) => {    
    console.log(origin);
    console.log(error);
});
client.setMaxListeners(30);
mongoose.connect(config.mongodb.uri, {
    
}).then(() => {
    console.log("połączono")
})

client.commands = new Collection();

module.exports = client;

fs.readdirSync('./handlers').forEach((handler) => {
	require(`./handlers/${handler}`)(client);
});

client.login(config["Opcje"].token);