const { ActivityType } = require('discord.js');
const client = require('..');
const config = require('../config.js');

client.on('ready', () => {
  const activityList = [
    { name: config["Opcje"].nazwa, type: ActivityType.Watching }
  ];

  let i = 0;
  setInterval(() => {
    if (i >= activityList.length) i = 0;
    client.user.setActivity(activityList[i]);
    i++;
  }, 1000);
})