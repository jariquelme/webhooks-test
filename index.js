const express = require('express')
const bodyParser = require('body-parser');

const app = express()
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.post('/', (req, res) => {  
  console.log("headers")
  console.log(JSON.parse(JSON.stringify(req.headers)))
  console.log("method")
  console.log(JSON.parse(JSON.stringify(req.method)))
  console.log("body")
  console.log(JSON.parse(JSON.stringify(req.body)))
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
