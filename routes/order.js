const express = require('express')
const { addOrder, getOrders, getOrderDetail } = require('../controller/order')

const router = express.Router()

router.get('/orderDetail', async (req, res) => {
  const { id } = req.query
  const ret = await getOrderDetail(id)
  if (ret && ret.length) {
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
})

router.get('/getOrders', async (req, res) => {
  const ret = await getOrders()
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
 * 批量添加游戏
 */
router.post('/addOrder', async (req, res) => {
  const { name, phone, games, size } = req.body
  const createAt = Date.now()
  const ret = await addOrder(name, phone, games, size, createAt)
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

module.exports = router
