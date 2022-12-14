const express = require('express')
const upload = require('../upload')
const indexRouter = express.Router()

const userRouter = require('./user')
const gameRouter = require('./game')
const orderRouter = require('./order')
const platformRouter = require('./platform')
const gameTypeRouter = require('./gameType')
const sizeRouter = require('./sizes')
const settingRouter = require('./setting')

// 图片上传
indexRouter.post('/upload', async (req, res) => {
  const path = await upload(req, res)
  if (path) {
    res.json({
      code: 1,
      data: path,
      status: 'ok'
    })
  } else {
    res.json({
      code: 0,
      msg: '上传失败'
    })
  }
})

function router(app) {
  app.use('/', indexRouter)
  app.use('/user', userRouter)
  app.use('/game', gameRouter)
  app.use('/order', orderRouter)
  app.use('/platform', platformRouter)
  app.use('/gameType', gameTypeRouter)
  app.use('/size', sizeRouter)
  app.use('/set', settingRouter)
}

module.exports = router
