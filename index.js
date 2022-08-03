const express = require('express')
const bodyParser = require('body-parser')
const route = require('./routes')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'))

route(app)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`is listening at port ${port}`)
})
