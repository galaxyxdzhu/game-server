const express = require('express')
const { getPlatforms, addPlatform, deletePlatform } = require('../controller/platform')

const router = express.Router()

router.get('/platforms', async (req, res) => {
  const ret = await getPlatforms()
  if (ret) {
    res.json({
      code: 1,
      data: ret,
      status: 'ok'
    })
  } else {
    res.json({
      code: 0,
      msg: '获取失败'
    })
  }
})
/**
 * 添加平台
 */
router.post('/add', async (req, res) => {
  const { name, src } = req.body
  const ret = await addPlatform(name, src)
  if (ret) {
    res.json({
      code: 1,
      status: 'ok'
    })
  } else {
    res.json({
      code: 0,
      msg: '添加失败'
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
