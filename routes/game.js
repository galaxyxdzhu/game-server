const express = require('express')
const { getGames, addGame, updateGame } = require('../controller/game')

const upload = require('../upload')
const router = express.Router()

/**
 * 获取游戏列表
 */
router.get('/games', async (req, res) => {
  const ret = await getGames()
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

router.post('/uploadGame', async (req, res) => {
  console.log(req.body)
  const path = await upload(req, res)
  console.log(path)
})

/**
 * 更新游戏
 */
router.post('/updateGame', async (req, res) => {
  const { id, ...rest } = req.body
  const ret = await updateGame(id, rest)
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
 * 添加游戏
 */
router.post('/addGame', async (req, res) => {
  const { name, size, genre, letter, added, pinyin, src, no } = req.body
  const ret = await addGame(name, size, genre, letter, added, pinyin, src, no)

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
 * 批量添加游戏
 */
router.post('/addGames', async (req, res) => {
  const { games } = req.body
  if (Array.isArray(games)) {
    games.forEach(async (item) => {
      const { name, size, genre, letter, added, pinyin, src, no } = item
      await addGame(name, size, genre, letter, added, pinyin, src, no)
    })

    res.json({
      code: 1,
      status: 'ok'
    })
  }
})

module.exports = router
