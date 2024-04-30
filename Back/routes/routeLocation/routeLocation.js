const express = require("express");
const { ctrlAddLocation, ctrlReadArticleByIdUser, ctrlLocUpdate, ctrlLocDelete, ctrlLocAddArticle, ctrlReadAllLoc } = require("../../Controllers/controllersLocation");
const { middlDate } = require("../../utils/middlewares/middlewaresEmail");


const router = express.Router();
router.post('/addLocation/:id',ctrlAddLocation)
router.get('/afficherLocation',ctrlReadArticleByIdUser)
router.patch('/validerLocation/:id', middlDate,ctrlLocUpdate)
router.delete('/supprLoc/:id',ctrlLocDelete)
router.patch('/addArticle/:id', ctrlLocAddArticle)
router.get('/allLoc',ctrlReadAllLoc)


module.exports=router