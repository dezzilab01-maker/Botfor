const { EmbedBuilder } = require('discord.js');
config = require("../config.js");
const client = require('../main');

client.on('guildMemberAdd', (guildMember) => {
    const guildId = config["Opcje"].guild;
    const channel = guildMember.guild.channels.cache.get(config["powitanie"].channel)

    const embed = new EmbedBuilder()
        .setTitle(config["powitanie"].title)
        .setColor(config["Ogólne"].kolor)
        .setDescription(config["powitanie"].description.replace("{member}", guildMember.user.username).replace("{server}", config["Opcje"].nazwa).replace("{counter}", client.guilds.cache.get(guildId).memberCount))
        .setImage(config["powitanie"].image)
        .setThumbnail(guildMember.displayAvatarURL())
        .setFooter({ text: config["powitanie"].footer.replace("{counter}", client.guilds.cache.get(guildId).memberCount) })
    channel.send({ content: "<@" + guildMember.user.id + ">", embeds: [embed] })
})