const express = require('express')
const { getGames, addGame, updateGame, getGameTypes, deleteGame } = require('../controller/game')

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

/**
 * 获取游戏列表
 */
router.get('/gameTypes', async (req, res) => {
  let ret = await getGameTypes()
  if (ret) {
    ret = Object.values(ret)
      .map((item) => item.genre)
      .filter((item) => !!item)
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

/**
 * 删除游戏
 */
router.post('/delete', async (req, res) => {
  const { id } = req.body
  const ret = await deleteGame(id)
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
