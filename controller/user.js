const { query } = require('../db')

async function login(username, password) {
  const results = await query(`select * from user where username = ? and password = ?`, [username, password])
  return results
}

/**
 * 获取所有用户
 * @returns
 */
async function getUsers() {
  const results = await query(`select * from user`)
  return results
}

module.exports = {
  login,
  getUsers
}
