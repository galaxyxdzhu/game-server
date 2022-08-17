const { query } = require('../db')

async function login(username, password) {
  const results = await query(`select * from user where username = ? and password = ?`, [username, password])
  return results
}

async function changePassword(username, password) {
  const results = await query(`update user set password= ? where username = ?`, [password, username])
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
  changePassword,
  getUsers
}
