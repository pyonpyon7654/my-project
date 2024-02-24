// models/User.js

const mongoose = require('mongoose');

// Switch to a different database
const myDb = mongoose.connection.useDb('my-react-app');


const userSchema = new mongoose.Schema({
    name: String,
    address: String,
    postalCode: String,
    phone: String
});

const User = myDb.model('User', userSchema);

module.exports = User;