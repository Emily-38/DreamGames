const { pool } = require("../Connexion/db");
const bcrypt = require('bcrypt')
const jwt= require('jsonwebtoken')
require('dotenv').config()


//function crée un utilisateur et l'integret a la base de donnée avec le mot de passe hasher
const ctrlCreateUser = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const{firstname,lastname}= req.body
        const email= req.email
       let data=[]
       
if(!email||!firstname||!lastname||!hashedPassword){
    res.json({message: "les champs ne sont pas remplis"})
}else{
     data.push(`"${email}","${firstname}","${lastname}","${hashedPassword}"`);

    console.log(data)


        const sql = `INSERT INTO users (email,first_name, last_name, password)
                    VALUES (${data})`;

                    
     const[rows]=await pool.execute(sql);
      
      res.json(rows);
    }
    } catch (err) {
      console.log(err.stack);
    }
  };

  //login avec compare password hash et creation de jwt
  const login = async (req, res) => {
    if (!req.email || !req.body.password) {
        res.status(400).json({ error: 'il manque des champs' })
        return
    }
   
    const email=req.email
    const sql =`SELECT * FROM users WHERE email=?`
    const values = [email]
    const [rows] = await pool.execute(sql, values)

    
if(rows.length === 0){
    res.status(401).json({ error: 'utilisateur existe pas' })
    return
}

const isValidPassword = bcrypt.compareSync(req.body.password, rows[0].password)
if (!isValidPassword) {
    res.status(401).json({ error: 'le mot de passe est pas valide' })

    return
} else {
    const token = jwt.sign(
        {
            email: rows[0].email,
            id: rows[0].id,
            role: rows[0].role,
            firstName: rows[0].first_name,
            lastName: rows[0].last_name,
        },

            process.env.SECRET_KEY,
            { expiresIn: '20d'}
    )


 res.status(200).json({ jwt: token})
    }

}

  module.exports={ctrlCreateUser, login}