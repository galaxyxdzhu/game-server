const { query } = require('../db')

/**
 * 获取游戏列表
 * @returns
 */
async function getGames() {
  const results = await query(`select * from game`)
  return results
}
/**
 * 添加游戏
 * @returns
 */
async function addGame(name, size, genre, letter, added, pinyin, src) {
  const results = await query(
    `insert into game (name, size, genre, letter, added, pinyin, src) values(?,?,?,?,?,?,?)`,
    [name, size, genre, letter, added, pinyin, src]
  )
  return results
}

module.exports = {
  getGames,
  addGame
}
