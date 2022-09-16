const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');
app.get('/', (req, res) => {
  
  const data=fs.readFileSync('index.html');
  res.send(data.toString())
})

https://runkit.com/embed/save
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})