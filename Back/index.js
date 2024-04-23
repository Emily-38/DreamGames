const express= require('express')
const app = express()
const cors = require('cors')
const { route } = require('./routes/routeUser/routeUser')
const router = require('./routes/routeUser/routeUser')

require('dotenv').config()

app.use(express.json())
app.use(cors())

app.use(express.json());

const PORT = 3444;
app.use("/", router);

app.listen(PORT, () => {
  console.log("im listening on port", PORT);
});
