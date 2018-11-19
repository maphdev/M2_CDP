const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    mail: String,
    userName: String
});

module.exports = mongoose.model('User', UserSchema);
