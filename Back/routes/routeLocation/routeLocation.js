const express = require("express");
const { ctrlAddLocation, ctrlReadArticleByIdUser, ctrlUpdate } = require("../../Controllers/controllersLocation");

const router = express.Router();
router.post('/addLocation/:id',ctrlAddLocation)
router.get('/afficherLocation',ctrlReadArticleByIdUser)
router.patch('/validerLocation',ctrlUpdate)

module.exports=router