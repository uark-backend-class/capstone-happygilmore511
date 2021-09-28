const router = require('express').Router();
const characters = require('../controllers/character.controller');




router.get("/characters", characters.getAll)
router.get("/characters/:id", characters.getOne)
router.post("/characters", characters.addOne);
router.put("/characters/:id", characters.updateOne);
router.delete("/characters/:id", characters.deleteOne);

/*router.get("/characters/:id/items", characters.allItems);
router.post("characters/:id/items", characters.addItem);
router.delete("characters/:id/items", characters.deleteItem);*/


module.exports = router
