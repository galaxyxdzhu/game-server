const express = require('express')
const { login, getUsers, changePassword } = require('../controller/user')
const { jwtSecret } = require('../config')
const jwt = require('jsonwebtoken')

const router = express.Router()

router.post('/login', async (req, res) => {
  const { username, password } = req.body
  const ret = await login(username, password)

  const token = jwt.sign(
    {
      username,
      password
    },
    jwtSecret,
    {
      expiresIn: 24 * 7 * 60 * 60 * 1000
    }
  )
  if (ret && ret.length) {
    res.json({
      code: 1,
      data: {
        token
      },
      status: 'ok'
    })
  } else {
    res.json({
      code: 0,
      msg: '登录失败'
    })
  }
})

router.post('/password', async (req, res) => {
  const { username, password } = req.body
  if (username && password) {
    const ret = await changePassword(username, password)
    if (ret) {
      res.json({
        code: 1,
        msg: '修改成功'
      })
    } else {
      res.json({
        code: 0,
        msg: '获取用户失败'
      })
    }
  }
})

/**
 * 获取用户列表
 */
router.get('/users', async (req, res) => {
  const ret = await getUsers()
  if (ret.length) {
    res.json({
      code: 1,
      data: ret
    })
  } else {
    res.json({
      code: 0,
      msg: '获取用户失败'
    })
  }
})

module.exports = router
