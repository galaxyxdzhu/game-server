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
 * 获取游戏类型列表
 * @returns
 */
async function getGameTypes() {
  const resluts = await query(`
  select distinct genre from game where game.genre is not null;`)
  return resluts
}

/**
 * 添加游戏
 * @returns
 */
async function addGame(name, size, genre, letter, added, pinyin, src, no) {
  const results = await query(
    `insert into game (name, size, genre, letter, added, pinyin, src, no) values(?,?,?,?,?,?,?,?)`,
    [name, size, genre, letter, added, pinyin, src, no]
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

module.exports = {
  getGames,
  addGame,
  updateGame,
  getGameTypes
}
