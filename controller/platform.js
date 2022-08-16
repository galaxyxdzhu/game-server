const { query } = require('../db')

/**
 * 获取全部平台
 */
async function getPlatforms() {
  const results = await query('select * from platform')
  return results
}

/**
 * 添加平台
 * @returns
 */
async function addPlatform(name, src) {
  const results = await query(`insert into platform (name, src) values(?, ?)`, [name, src])
  return results
}

/**
 * 添加平台
 * @returns
 */
async function updatePlatform(id, name, src) {
  const results = await query(`update platform  set name =?, src =?  where id = ?`, [name, src, id])
  return results
}

/**
 * 删除平台
 * @returns
 */
async function deletePlatform(id) {
  const results = await query(`delete from platform  where id = ?`, [id])
  return results
}

module.exports = {
  getPlatforms,
  addPlatform,
  deletePlatform,
  updatePlatform
}
