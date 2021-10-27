const Character = require('../models/characterModels');
const Story = require('../models/storyModels');

exports.storyParty = async (req, res) => {
    let story = await Story.findById(req.params.id);
    res.json(story);
}

exports.storyCharacter = async (req, res) => {
    try {
        const character = await Character.findById(req.params.id);
        if (!character) {
          res.status(404).send();
        }
        res.json(character.story);
      }
      catch(error) {
        res.status(500).send();
      }
}
