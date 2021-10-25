const router = require('express').Router();
const characterController = require('../controllers/character.controller');
const storyController = require('../controllers/story.controller');

router.get("/", characterController.home)
router.get("/characters", characterController.getAll)
router.post("/characters", characterController.addOne);
router.get("/characters/:id", characterController.getOne)
router.put("/characters/:id", characterController.updateOne);
router.delete("/characters/:id", characterController.deleteOne);

/*
router.get('/story', storyController.tellParty);
router.get('/story/:id', storyController.tellCharacter);
*/


module.exports = router