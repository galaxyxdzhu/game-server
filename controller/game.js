const { query } = require('../db')

/**
 * 获取游戏列表
 * @returns
 */
async function getGames() {
  const results = await query(`select * from game order by isTop desc , createAt desc, id`)
  return results
}

/**
 * 获取游戏列表
 * @returns
 */
async function findGameByName(name) {
  const results = await query(`select * from game where name = ?`, [name])
  return results
}

/**
 * 添加游戏
 * @returns
 */
async function addGame(name, size, genre, letter, added, pinyin, src, no, rate, createAt) {
  const results = await query(
    `insert into game (name, size, genre, letter, added, pinyin, src, no, rate, createAt) values(?,?,?,?,?,?,?,?,?,?)`,
    [name, size, genre, letter, added, pinyin, src, no, rate, createAt]
  )
  return results
}

/**
 * 更新游戏内容
 * @returns
 */
async function updateGame(id, params) {
  let queryString = `update game set `
  const paramsKeys = Object.keys(params)
  const values = paramsKeys.map((key, index) => {
    if (index === paramsKeys.length - 1) {
      queryString += `${key}=?`
    } else {
      queryString += `${key}=?,`
    }
    return params[key]
  })
  queryString += ' where id= ?'
  values.push(id)
  const results = await query(queryString, values)
  return results
}

async function deleteGame(id) {
  const results = query('delete from game where id = ?', [id])
  return results
}

module.exports = {
  getGames,
  addGame,
  updateGame,
  deleteGame,
  findGameByName
}
