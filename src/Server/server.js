const express = require('express')
const app = express()
const data='data.json'
const port = 3000


app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})