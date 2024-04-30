const validator=require('validator')
const middlEmail = (req, res, next) => {
    const email = req.body.email;
    if (!validator.isEmail(email)) {
      return res.status(400).json({ msg: "mettre un email" });
    }
    req.email = email;
    next();
  };

 
const middlDate = (req, res, next) => {
    const {date_start,date_end} = req.body;
    if (!validator.isDate(date_start)) {
      return res.status(400).json({ msg: "mettre une date" });
    } if (!validator.isDate(date_end)) {
      return res.status(400).json({ msg: "mettre une date" });
    }
    req.date_start = date_start;
    req.date_end= date_end;
    next();
  };


  
    
  module.exports= {middlEmail, middlDate}
