const mongoose = require('mongoose');

const storySchema = mongoose.Schema({
    partyname: String,
    history: String
});

const Story = mongoose.model('Story', storySchema);

module.exports = Story