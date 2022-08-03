const express = require('express')
const { login, getUsers } = require('../controller/user')

const router = express.Router()

router.post('/login', async (req, res) => {
  const { username, password } = req.body
  const ret = await login(username, password)
  if (ret && ret.length) {
    res.json({
      code: 1,
      status: 'ok'
    })
  } else {
    res.json({
      code: 0,
      msg: '登录失败'
    })
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
