const mongoose = require('mongoose');

const  characterSchema = mongoose.Schema({
    name: String,
    class: String,
    level: Number,
    player: String
});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character