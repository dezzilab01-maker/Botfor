const { MongoClient } = require('mongodb');
const config = require('../config.js');
const chalk = require("chalk-v2");


const client = new MongoClient(config.mongodb.uri, {
});

async function connectToDatabase_ready() {
    try {
        await client.connect();
        console.log(chalk.greenBright("[ BAZA DANYCH ]") + ` Połączono z bazą danych MongoDB!`);
    } catch (error) {
        console.log(chalk.redBright("[ BAZA DANYCH ]") + `Błąd połączenia z MongoDB!`, error);
        process.exit(1);
    }
}

async function connectToDatabase_legitcheck() {
    try {
        await client.connect();
        const db = client.db(config.mongodb.database);
        return db.collection(config.mongodb.collection1);
    } catch (error) {
        console.error('Błąd połączenia z MongoDB:', error);
        throw error;
    }
}

async function connectToDatabase_opinie() {
    try {
        await client.connect();
        const db = client.db(config.mongodb.database);
        return db.collection(config.mongodb.collection3);
    } catch (error) {
        console.error('Błąd połączenia z MongoDB:', error);
        throw error;
    }
}

async function connectToDatabase_methods() {
    try {
        await client.connect();
        const db = client.db(config.mongodb.database);
        return db.collection(config.mongodb.collection6);
    } catch (error) {
        console.error('Błąd połączenia z MongoDB:', error);
        throw error;
    }
}

async function connectToDatabase_claimTicket() {
    try {
        await client.connect();
        const db = client.db(config.mongodb.database);
        return db.collection(config.mongodb.collection2);
    } catch (error) {
        console.error('Błąd połączenia z MongoDB:', error);
        throw error;
    }
}

async function connectToDatabase_balanceexchanger() {
    try {
        await client.connect();
        const db = client.db(config.mongodb.database);
        return db.collection(config.mongodb.collection4);
    } catch (error) {
        console.error('Błąd połączenia z MongoDB:', error);
        throw error;
    }
}

async function connectToDatabase_balanceexchangerzarobki() {
    try {
        await client.connect();
        const db = client.db(config.mongodb.database);
        return db.collection(config.mongodb.collection7);
    } catch (error) {
        console.error('Błąd połączenia z MongoDB:', error);
        throw error;
    }
}

async function connectToDatabase_balanceclient() {
    try {
        await client.connect();
        const db = client.db(config.mongodb.database);
        return db.collection(config.mongodb.collection5);
    } catch (error) {
        console.error('Błąd połączenia z MongoDB:', error);
        throw error;
    }
}

async function connectToDatabase_boosty() {
    try {
        await client.connect();
        const db = client.db(config.mongodb.database);
        return db.collection(config.mongodb.collection8);
    } catch (error) {
        console.error('Błąd połączenia z MongoDB:', error);
        throw error;
    }
}


module.exports = {
    connectToDatabase_ready,
    connectToDatabase_legitcheck,
    connectToDatabase_balanceclient,
    connectToDatabase_balanceexchanger,
    connectToDatabase_claimTicket,
    connectToDatabase_balanceexchangerzarobki,
    connectToDatabase_methods,
    connectToDatabase_opinie,
    connectToDatabase_boosty,
    client,
};
