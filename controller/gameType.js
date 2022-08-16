const { query } = require('../db')

/**
 * 获取全部平台
 */
async function getGameTypes() {
  const results = await query('select * from gameType')
  return results
}

/**
 * 添加平台
 * @returns
 */
async function addGameType(name) {
  const results = await query(`insert into gameType (name) values(?)`, [name])
  return results
}

/**
 * 更新平台
 * @returns
 */
async function updateGameType(id, name) {
  const results = await query(`update gameType set name = ? where id = ?`, [name, id])
  return results
}

/**
 * 删除平台
 * @returns
 */
async function deleteGameType(id) {
  const results = await query(`delete from gameType  where id = ?`, [id])
  return results
}

module.exports = {
  getGameTypes,
  addGameType,
  deleteGameType,
  updateGameType
}
