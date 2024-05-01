const express= require('express')
const app = express()
const cors = require('cors')

const routerUser = require('./routes/routeUser/routeUser')
const routerArticle = require('./routes/routeArticle/routeArticle')
const routerLocation = require('./routes/routeLocation/routeLocation')
const routerMailer = require('./routes/routeMailer/routeMailer')

require('dotenv').config()


app.use(cors())
app.use(express.static('public'))
app.use(express.json());

const PORT = 3444;
app.use("/", routerUser);
app.use("/", routerArticle);
app.use("/",routerLocation)
app.use("/",routerMailer)

app.listen(PORT, () => {
  console.log("im listening on port", PORT);
});
