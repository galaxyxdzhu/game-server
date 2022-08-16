const express = require('express')
const bodyParser = require('body-parser')
const route = require('./routes')
const { jwtSecret } = require('./config')
const jwt = require('jsonwebtoken')

const app = express()
const port = 3000

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  // res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

const whiteList = ['/user/login']

app.use((req, res, next) => {
  if (whiteList.includes(req.path) || req.method === 'GET') {
    return next()
  }
  const { token } = req.headers
  if (!token) {
    res.json({
      code: 1,
      status: 401,
      msg: '没有token'
    })
  } else {
    jwt.verify(token, jwtSecret, function (err, decoded) {
      if (err) {
        res.json({
          code: 0,
          status: 401,
          msg: 'token验证失败'
        })
      } else {
        next()
      }
    })
  }
})

app.use('/img/', express.static('./public/'))

app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }))
app.use(bodyParser.json({ limit: '50mb' }))
app.use(express.static('public'))

route(app)

app.listen(port, () => {
  console.log(`is listening at port ${port}`)
})
