const multer = require('multer')
const md5 = require('md5')
const path = require('path')

const resolve = (dir) => {
  return path.join(__dirname, './', dir)
}

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, resolve('./public/images'))
    } else {
      cb({ error: 'mime type not support' })
    }
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

const multerConfig = multer({
  storage
})

module.exports = multerConfig
