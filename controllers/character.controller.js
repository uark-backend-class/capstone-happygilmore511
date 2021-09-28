const charactersdb = require('../characters')



exports.getAll = (req, res) => {
  res.json(charactersdb);
}


exports.addOne = (req, res) => {
  const character = req.body;
  character.id = id;
  id++;
  charactersdb.push(character);
  res.json(character);
}//server says id isn't defined

exports.getOne = (req, res) => {
  let id = req.params.id;
  let foundCharacter; // undefined
  for (let i = 0; i < charactersdb.length; i++) {
    if (charactersdb[i].id == id) {
      foundCharacter = charactersdb[i];
    }
  }

  if (foundCharacter) {
    res.json(foundCharacter); // 200
  }
  else {
    res.status(404).send(); // 404 if not found
  }
}

exports.updateOne = (req, res) => {
  let id = req.params.id;
  let foundCharacter = charactersdb.find(character => character.id == id);

  if(foundCharacter) {
    let updatedProps = req.body;

    for (let key in updatedProps) {
      foundCharacter[key] = updatedProps[key];
    }
    res.json(foundCharacter);
  }
  else {
    res.status(404).send();
  }
}

exports.deleteOne = (req, res) => {
  let id = req.params.id;
  let foundIndex = charactersdb.findIndex(character => character.id == id);

  if (foundIndex >= 0) {
    let deletedCharacters = charactersdb.splice(foundIndex, 1);
    res.json(deletedCharacters[0]);
  }
  else {
    res.status(404).send(); // 404 if not found
  }
}