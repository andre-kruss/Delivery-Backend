import express from 'express'
import routes from './routes'
import database from './config/mongo'
import mongoose from 'mongoose'

class App {
  constructor() {
    this.server = express()

    this.database()
    this.middlewares()
    this.routes()
  }

  database() {
    mongoose.connect(database.uri, { useNewUrlParser: true })
  }

  middlewares() {
    this.server.use(express.json())
  }

  routes() {
    this.server.use(routes)
  }
}

export default new App().server
