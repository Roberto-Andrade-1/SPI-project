const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://admin:Y7mWlC5uNDUVx9Ud@travelapp.1f36bf7.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

const database = client.db('Social');
const flights = database.collection('Flights');
const users = database.collection('Users');

module.exports = {
    flights,
    users,
};