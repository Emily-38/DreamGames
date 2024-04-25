const { pool } = require("../Connexion/db");
const jwt= require('jsonwebtoken');
const { extractToken } = require("../utils/token");
require('dotenv').config()

// crée une location d'article avec l'id articles en ajoutant l'id utilisateur courant avec le jwt 
const ctrlAddLocation = async (req, res) => {
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
          const idArticle= req.params.id
         let data=[]
         
  
       data.push(`"${idArticle}","${authData.id}"`);
  
          const sql = `INSERT INTO location (article_id,user_id)
                      VALUES (${data})`;
             
       const[rows]=await pool.execute(sql);
        res.json(rows);
      
      } catch (err) {
        console.log(err.stack);
      }
      }
  
    })
    };


// afficher tout les article louer en fonction du user courant
const ctrlReadArticleByIdUser = async (req, res) => {
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
       

        const [rows, fields] = await pool.execute(`SELECT * FROM articles JOIN location ON location.article_id=articles.id WHERE location.user_id=${authData.id} `)
        res.json(rows);
        // if(rows.quantity === 0){
        //     const [result] = await pool.execute(`UPDATE articles SET disponibilité = 0 WHERE id=${rows.id}`)
        //     console.log(result)
        // }
    } catch (err) {
      console.log(err.stack);
    }
    }
    }
    )
 }

 //update article lors de la validation 

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
        
          const{date_start,date_end }= req.body
          const sql =`UPDATE location
          JOIN articles ON articles.id = location.article_id
          SET location.date_start = ?,
              location.date_end = ?,
              location.status = 'en cours',
              articles.quantity = articles.quantity - 1
          WHERE location.user_id = ${authData.id}; `
          const values = [date_start,date_end];
          const [rows] = await pool.execute(sql, values);
          
          res.json(rows);
          
     } catch (err) {
          console.log(err.stack);
        }
      }
    })
  }
  
    module.exports={ ctrlAddLocation, ctrlReadArticleByIdUser,ctrlUpdate}