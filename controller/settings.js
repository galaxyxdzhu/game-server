const { query } = require('../db')

/**
 * 获取指定配置
 */
async function getSettingByName(name) {
  const results = await query('select value from setting where name = ?', [name])
  return results
}

/**
 * 更新配置
 */
async function setSettingByName(name, value) {
  const results = await query('update setting set value = ? where name = ?', [value, name])
  return results
}

module.exports = {
  getSettingByName,
  setSettingByName
}
