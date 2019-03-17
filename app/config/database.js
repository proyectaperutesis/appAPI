const { Client } = require('pg');
const CONFIG = require('./config');

const connectionData = {
    user: CONFIG.USERDB,
    host: CONFIG.HOSTDB,
    database: CONFIG.DB,
    password: CONFIG.PASSWORDDB,
    port: CONFIG.PORTDB
}

const client = new Client(connectionData);

module.exports = client;