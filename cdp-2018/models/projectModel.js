const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProjectSchema = new Schema({
    name: String,
    description: String,
    durationSprint: Number,
    startingDay: String,
    devList: [String],
    backlog : [{
        id: Number,
        description: String,
        difficulty: String,
        priority: String
    }],
    usCount : Number,
    sprints : [{
        id: Number,
        tasks : [{
          id: String,
          description: String,
          cost: String,
          dependencies: String,
          link_to_us: String,
          state: String
        }]
    }],
    sprintsCount : Number
});

module.exports = mongoose.model('Project', ProjectSchema);
