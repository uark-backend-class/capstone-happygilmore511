const router = require('express').Router();
const characterController = require('../controllers/character.controller');


router.get("/", characterController.home)
router.get("/characters", characterController.getAll)
router.post("/characters", characterController.addOne);
router.get("/characters/:id", characterController.getOne)
router.put("/characters/:id", characterController.updateOne);
router.delete("/characters/:id", characterController.deleteOne);

/*
router.get("/characters/:id/items", characters.allItems);
router.post("characters/:id/items", characters.addItem);
router.delete("characters/:id/items", characters.deleteItem);
*/


module.exports = router
