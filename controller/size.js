const { query } = require('../db')

/**
 * 获取全部平台
 */
async function getSizes() {
  const results = await query('select * from sizes')
  return results
}

/**
 * 添加平台
 * @returns
 */
async function addSize(normalSize, actualSize) {
  const results = await query(`insert into sizes (normalSize,actualSize ) values(?,?)`, [normalSize, actualSize])
  return results
}

/**
 * 删除平台
 * @returns
 */
async function deleteSize(id) {
  const results = await query(`delete from sizes  where id = ?`, [id])
  return results
}

module.exports = {
  getSizes,
  addSize,
  deleteSize
}
