const { pool } = require("../Connexion/db");
const jwt= require('jsonwebtoken');
const { extractToken } = require("../utils/token");
require('dotenv').config()

//export des test upload
const express = require('express')
const path = require('path')
const multer = require('multer')
const app = express()
const uploadDirectory = path.join(__dirname, '../public/uploads')
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


const insertArticlePicture = async (req, res) => {
  let newFileName
  let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uploadDirectory)
    },
    filename: function (req, file, cb) {
      newFileName = `${file.fieldname}-${Date.now()}.jpg`
      cb(null, newFileName)
    },
  })

  const maxSize = 3 * 1000 * 1000

  let upload = multer({
    storage: storage,
    limits: { fileSize: maxSize },
    fileFilter: function (req, file, cb) {
      var filetypes = /jpeg|jpg|png/
      var mimetype = filetypes.test(file.mimetype)

      var extname = filetypes.test(
        path.extname(file.originalname).toLowerCase()
      )

      if (mimetype && extname) {
        return cb(null, true)
      }

      cb(
        'Error: File upload only supports the ' +
          'following filetypes - ' +
          filetypes
      )
    },
  }).single('image')

  upload(req, res, function (err) {
    if (err) {
      res.send(err)
    } else {
      res.send({ newFileName: newFileName })
    }
  })
}



// crée un produit 
const ctrlCreateArticle = async (req, res) => {
  //debut de ma fonction
  const token = await extractToken(req)
  jwt.verify( 
    token,
  process.env.SECRET_KEY,
  async (err, authData) => {
      if (err) {

        console.log(err)
        res.status(401).json({ err: 'Unauthorized' })
        return
    } else {
    try {
        const{title,description,category,quantity,quantityMax,prix,image}= req.body
        
       let data=[]
       
if(!title||!description||!category||!quantity|| !quantityMax||!prix){
    res.json({message: "les champs ne sont pas remplis"})
}else{
     data.push(`"${title}","${description}","${category}","${quantity}","${quantityMax}","${prix}","${image}"`);

        const sql = `INSERT INTO articles (title,description, category, quantity , quantityMax, prix, image)
                    VALUES (${data})`;
           
     const[rows]=await pool.execute(sql);
      res.json({message: "tout est bon"});
    }
    } catch (err) {
      console.log(err.stack);
      res.json({message: "ce nest pas bon"})
    }
    }

  })
  };

  //afficher tout les articles
  const ctrlReadArticle = async (req, res) => {
try{
    const [rows, fields] = await pool.execute("SELECT*, CONCAT('/uploads/', image) as link FROM articles ")
    res.json(rows);
} catch (err) {
  console.log(err.stack);
}
}

//affiche les articles par id
const ctrlReadArticleById = async (req, res) => {
  try{
    const id =req.params.id
      const [rows, fields] = await pool.execute(`SELECT* FROM articles WHERE id=${id} `)
      res.json(rows);
  } catch (err) {
    console.log(err.stack);
  }
  }
// update un article par id
const ctrlUpdate= async (req,res)=>{
  const token = await extractToken(req)
  jwt.verify( 
    token,
  process.env.SECRET_KEY,
  async (err, authData) => {
      if (err) {

        console.log(err)
        res.status(401).json({ err: 'Unauthorized' })
        return
    } else {
    try{

        const id= req.params.id
        const{title, description, category,quantity ,quantityMax , prix}= req.body
         
         
       

        const sql =`UPDATE articles SET title=?, description=?, category=?, quantity=?, quantityMax=?, prix=? WHERE id="${id}" `
        const values = [title,description,category,quantity,quantityMax, prix];
        ;
        const [rows] = await pool.execute(sql, values);
        
        res.json(rows);
        console.log(values)
   } catch (err) {
        console.log(err.stack);
      }
    }
  })
}

//supprimer un articles par son id 
const ctrlDelete= async (req,res)=>{
  const token = await extractToken(req)
  jwt.verify( 
    token,
  process.env.SECRET_KEY,
  async (err, authData) => {
      if (err) {

        console.log(err)
        res.status(401).json({ err: 'Unauthorized' })
        return
    } else {
    try{
        const id= req.params.id
        const [rows, fields] = await pool.execute(`DELETE FROM articles WHERE id="${id}" `)
        res.json(rows);
    } catch (err) {
      console.log(err.stack);
    }
  }
})
}

const ctrlReadArticleNotLoc = async (req, res) => {
  try{
      const [rows, fields] = await pool.execute(`SELECT *,CONCAT('/uploads/', articles.image) as link FROM articles LEFT JOIN location ON location.article_id = articles.id WHERE location.article_id IS NULL`)
      res.json(rows);
  } catch (err) {
    console.log(err.stack);
  }
  }
  
  const ctrlSearchByName= async(req, res)=>{
    const title=req.params.name
    try{
      
      const sql =`SELECT *, CONCAT('/uploads/', image) as link FROM articles WHERE title LIKE '%${title}%' `
     
      const [rows] = await pool.execute(sql);
      res.json(rows)
    }catch(err){
      console.log(err)
    }
  }


  module.exports={insertArticlePicture ,ctrlCreateArticle,ctrlReadArticle, ctrlUpdate, ctrlDelete, ctrlReadArticleById, ctrlReadArticleNotLoc, ctrlSearchByName}