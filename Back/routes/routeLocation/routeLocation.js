const express = require("express");
const { ctrlAddLocation, ctrlReadArticleByIdUser, ctrlLocUpdate, ctrlLocDelete, ctrlLocAddArticle, ctrlReadAllLoc, ctrlLocUpdateNotsupprArticle } = require("../../Controllers/controllersLocation");
const { middlDate } = require("../../utils/middlewares/middlewaresEmail");


const router = express.Router();
router.post('/addLocation/:id',ctrlAddLocation)
router.get('/afficherLocation',ctrlReadArticleByIdUser)
router.patch('/validerLocation/:id', middlDate,ctrlLocUpdate)
router.patch('/updateLoc/:id',middlDate,ctrlLocUpdateNotsupprArticle)
router.delete('/supprLoc/:id',ctrlLocDelete)
router.patch('/addArticle/:id', ctrlLocAddArticle)
router.get('/allLoc',ctrlReadAllLoc)


module.exports=router