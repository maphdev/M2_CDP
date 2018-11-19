const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProjectSchema = new Schema({
    name: String,
    description: String,
    durationSprint: Number,
    startingDay: String,
    devList: [String]
});

module.exports = mongoose.model('Project', ProjectSchema);
