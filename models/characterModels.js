const mongoose = require('mongoose');

const  characterSchema = mongoose.Schema({
    name: String,
    class: String,
    level: Number,
    player: String,
    story: String
});
const Character = mongoose.model('Character', characterSchema);

module.exports = Character