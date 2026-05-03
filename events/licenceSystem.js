const client = require('../main.js');
const chalk = require("chalk-v2");
const config = require('../config.js');

client.once('ready', async () => {
    try {

        console.log(`-----------` + chalk.cyan("[ INFORMACJE ]") + ` -----------`);
        console.log(chalk.cyan("STUDIO:") + ` M4CODE.PL`);
        console.log(chalk.cyan("DEVELOPER:") + ` ScreamMaster1337`);
        console.log(chalk.cyan("BOT WYKONANY DLA:") + ` DreamShop™`);
        console.log(`-----------` + chalk.cyan("[ INNE ]") + ` -----------`);
        console.log(chalk.greenBright("[ LICENCJA ]") + ` Twoja Licencja jest prawidłowa!`);
        console.log(chalk.greenBright("[ LOGOWANIE ]") + ` Zalogowano jako: ${client.user.tag}`);

    } catch (error) {
        console.error(chalk.red("[ BŁĄD ]") + ` Wystąpił błąd: ${error.message}`);
        client.destroy();
        process.exit(1);
    }
});