const Character = require('../models/characterModels');

exports.home = async (req, res) => {
  res.send("I work perfectly, nothing to see here")
}//practice round passed

exports.getAll = async (req, res) => {
  const characters = await Character.find();
  res.json(characters);
}//retrieves new object ids, but no props

exports.addOne = async (req, res) => {
  const character = new Character(req.body);
  await character.save();
  res.json(character);
}//just adding json objects with id, no other model props(standby)

exports.getOne = async (req, res) => {
  try {
    const character = await Character.findById(req.params.id);
    if (!character) {
      res.status(404).send();
    }
    res.jason(character);
  }
  catch(error) {
    res.status(500).send();
  }
}//no body returned

exports.updateOne = async (req, res) => {
    const character = await Character.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!character) {
      res.status(404).send();
    }
    res.json(character);
  }//changing "_id" doesn't show in res.body, neither does changing "name", a should-be-there prop

exports.deleteOne = async (req, res) => {
  const deletedCharacter = await Character.findByIdAndDelete(req.params.id);
  if (!deletedCharacter) {
    res.status(404).send();
  }
  res.json(deletedCharacter);
}//functional, but still no props on inserted docs