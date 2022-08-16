const express = require('express')
const { getSizes, addSize, deleteSize, updateSize } = require('../controller/size')

const router = express.Router()

router.get('/sizes', async (req, res) => {
  const ret = await getSizes()
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
 * 添加size
 */
router.post('/add', async (req, res) => {
  const { normalSize, actualSize } = req.body
  const ret = await addSize(normalSize, actualSize)
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
 * 更新size
 */
router.post('/update', async (req, res) => {
  const { id, normalSize, actualSize } = req.body
  const ret = await updateSize(id, normalSize, actualSize)
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
})
/**
 * 删除平台
 */
router.post('/delete', async (req, res) => {
  const { id } = req.body
  const ret = await deleteSize(id)
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
