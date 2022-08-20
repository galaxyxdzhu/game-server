const { query } = require('../db')

/**
 * 获取全部订单
 */
async function getOrders() {
  const results = await query('select * from orders')
  return results
}

async function getOrderDetail(id) {
  const results = await query('select * from orders where id = ?', [id])
  return results
}

/**
 * 添加订单
 * @returns
 */
async function addOrder(name, phone, games, size, platform, createAt) {
  const results = await query(`insert into orders (name, phone, games, size,platform, createAt) values(?,?,?,?,?,?)`, [
    name,
    phone,
    games,
    size,
    platform,
    createAt
  ])
  return results
}

module.exports = {
  addOrder,
  getOrders,
  getOrderDetail
}
