const express = require('express')
const bodyParser = require('body-parser')
const route = require('./routes')
const app = express()
const port = 3000

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

app.use('/img/', express.static('./public/'))

app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ extended: false, limit: '50mb' }))

// app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }))
// app.use(bodyParser.json({ limit: '50mb' }))
app.use(express.static('public'))

route(app)

app.listen(port, () => {
  console.log(`is listening at port ${port}`)
})
