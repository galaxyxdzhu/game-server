const userRouter = require('./user')
const gameRouter = require('./game')

function router(app) {
  app.use('/user', userRouter)
  app.use('/game', gameRouter)
}

module.exports = router
