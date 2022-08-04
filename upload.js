const multerConfig = require('./multerConfig')

const fileName = 'file'
const baseUploadUrl = 'http://127.0.0.1:3000'
const imgPath = '/img/images'

function upload(req, res) {
  return new Promise((resolve, reject) => {
    multerConfig.single(fileName)(req, res, (err) => {
      if (err) {
        reject(err)
      } else {
        const filePath = baseUploadUrl + imgPath + '/' + req.file.filename
        resolve(filePath)
      }
    })
  })
}

module.exports = upload
