const express = require("express");
const { ctrlAddLocation, ctrlReadArticleByIdUser, ctrlLocUpdate, ctrlLocDelete } = require("../../Controllers/controllersLocation");

const router = express.Router();
router.post('/addLocation/:id',ctrlAddLocation)
router.get('/afficherLocation',ctrlReadArticleByIdUser)
router.patch('/validerLocation/:id',ctrlLocUpdate)
router.delete('/supprLoc',ctrlLocDelete)

module.exports=router