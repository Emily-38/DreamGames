const { pool } = require("../Connexion/db");
const jwt= require('jsonwebtoken');
const { extractToken } = require("../utils/token");
require('dotenv').config()

// crée un produit 
const ctrlCreateArticle = async (req, res) => {
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
        const{title,description,category,quantity,quantityMax,prix}= req.body
       let data=[]
       
if(!title||!description||!category||!quantity|| !quantityMax||!prix){
    res.json({message: "les champs ne sont pas remplis"})
}else{
     data.push(`"${title}","${description}","${category}","${quantity}","${quantityMax}","${prix}"`);

        const sql = `INSERT INTO articles (title,description, category, quantity , quantityMax, prix)
                    VALUES (${data})`;
           
     const[rows]=await pool.execute(sql);
      res.json(rows);
    }
    } catch (err) {
      console.log(err.stack);
    }
    }

  })
  };

  //afficher tout les articles
  const ctrlReadArticle = async (req, res) => {
try{
    const [rows, fields] = await pool.execute("SELECT* FROM articles ")
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
        const{title, description, category, quantity, quantityMax, prix }= req.body
        const sql =`UPDATE articles SET title=?, description=?, category=?, quantity=?, quantityMax=?, prix=? WHERE id="${id}" `
        const values = [title,description,category,quantity,quantityMax, prix];
        const [rows] = await pool.execute(sql, values);
        console.log(rows);
        res.json(rows);
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

  


  module.exports={ctrlCreateArticle,ctrlReadArticle, ctrlUpdate, ctrlDelete}