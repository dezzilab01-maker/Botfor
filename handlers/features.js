const fs = require('fs');
const chalk = require("chalk-v2");

module.exports = (client) => {
    console.log(`-----------` + chalk.cyan("[ FUNKCJE ]") + ` -----------`);
    fs.readdirSync('./features').filter((file) => file.endsWith('.js')).forEach((event) => {
        require(`../features/${event}`);
        console.log(chalk.greenBright("[ FUNKCJA ]") + ` Załadowano:` + chalk.cyan(` ${event.split('.js')[0]}.js`));
    });
}