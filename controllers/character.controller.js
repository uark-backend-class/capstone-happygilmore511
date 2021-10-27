const Character = require('../models/characterModels');

exports.home = async (req, res) => {
  res.send("I work perfectly, nothing to see here")
}//success

exports.getAll = async (req, res) => {
  const characters = await Character.find();
  res.json(characters);
}//success

exports.addOne = async (req, res) => {
  const character = new Character(req.body);
  await character.save();
  res.json(character);
}//success

exports.getOne = async (req, res) => {
  try {
    const character = await Character.findById(req.params.id);
    if (!character) {
      res.status(404).send();
    }
    res.json(character);
  }
  catch(error) {
    res.status(500).send();
  }
}//success

exports.updateOne = async (req, res) => {
  console.log(req.body)
    const character = await Character.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!character) {
      res.status(404).send();
    }
    res.json(character);
  }

exports.deleteOne = async (req, res) => {
  const deletedCharacter = await Character.findByIdAndDelete(req.params.id);
  if (!deletedCharacter) {
    res.status(404).send();
  }
  res.json(deletedCharacter);
}//success

