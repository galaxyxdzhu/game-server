const mysql = require('mysql2')

const pool = mysql.createPool({
  host: '82.156.202.155',
  prot: '3306',
  user: 'root',
  password: 'ZHU_xd215110',
  database: 'game'
})

const query = function (sql, values) {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) {
        reject(err)
      } else {
        connection.query(sql, values, (err, resluts) => {
          if (err) {
            reject(err)
          } else {
            resolve(resluts)
          }
          connection.release()
        })
      }
    })
  })
}

module.exports = {
  query
}
