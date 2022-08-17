const express = require('express')
const { getSettingByName, setSettingByName } = require('../controller/settings')

const router = express.Router()

router.get('/name', async (req, res) => {
  const { name } = req.query
  if (name) {
    const ret = await getSettingByName(name)
    if (ret) {
      res.json({
        code: 1,
        data: ret[0],
        status: 'ok'
      })
    } else {
      res.json({
        code: 0,
        msg: '获取失败'
      })
    }
  }
})

/**
 * 添加平台
 */
router.post('/update', async (req, res) => {
  const { name, value } = req.body
  if (name && value) {
    const ret = await setSettingByName(name, value)
    if (ret) {
      res.json({
        code: 1,
        status: 'ok'
      })
    } else {
      res.json({
        code: 0,
        msg: '更新失败'
      })
    }
  } else {
    res.json({
      code: 0,
      msg: '参数不匹配'
    })
  }
})
/**
 * 删除平台
 */
router.post('/delete', async (req, res) => {
  const { id } = req.body
  const ret = await deletePlatform(id)
  if (ret) {
    res.json({
      code: 1,
      status: 'ok'
    })
  } else {
    res.json({
      code: 0,
      msg: '删除失败'
    })
  }
})

module.exports = router
