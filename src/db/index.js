const dotenv = require('dotenv');

dotenv.config();

const mongoose = require('mongoose');
const environment = process.env.NODE_ENV;
const dbUrl = process.env.DB_URL;

const connect = () => {
    mongoose.connect(dbUrl, null, (err) => {
        if (err) {
            console.log(`An error occured while connecting to db on ${environment} environment`, err)
        }
    });
}
const disconnect = () => { mongoose.connection.close() }
module.exports = { connect, disconnect }