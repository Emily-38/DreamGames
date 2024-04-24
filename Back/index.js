const express= require('express')
const app = express()
const cors = require('cors')

const routerUser = require('./routes/routeUser/routeUser')
const routerArticle = require('./routes/routeArticle/routeArticle')

require('dotenv').config()

app.use(express.json())
app.use(cors())

app.use(express.json());

const PORT = 3444;
app.use("/", routerUser);
app.use("/", routerArticle);

app.listen(PORT, () => {
  console.log("im listening on port", PORT);
});
