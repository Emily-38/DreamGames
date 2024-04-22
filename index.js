const express= require('express')
const app = express()
const cors = require('cors')

require('dotenv').config()

app.use(express.json())
app.use(cors())

app.use(express.json());

const PORT = 3444;
app.use("/api");

app.listen(PORT, () => {
  console.log("im listening on port", PORT);
});
