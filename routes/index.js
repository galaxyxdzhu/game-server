const express = require('express')
const upload = require('../upload')
const indexRouter = express.Router()

const userRouter = require('./user')
const gameRouter = require('./game')

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
}

module.exports = router
