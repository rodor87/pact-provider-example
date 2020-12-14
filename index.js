const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser")

const json = {
  "sku": 1,
  "name": "Bosche Washing Machine"
}

const app = express()
const port = 3001
app.use(cors())
app.use(bodyParser.json())

app.get('/product', (req, res) => {
  res.json(json);
})

const server = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = server;
