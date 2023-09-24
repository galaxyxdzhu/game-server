const multerConfig = require('./multerConfig')

const fileName = 'file'
const baseUploadUrl = 'http://82.156.202.155'
const imgPath = '/images'

function upload(req, res) {
  return new Promise((resolve, reject) => {
    multerConfig.single(fileName)(req, res, (err) => {
      if (err) {
        reject(err)
      } else {
        const filePath = imgPath + '/' + req.file.filename
        resolve(filePath)
      }
    })
  })
}

module.exports = upload
