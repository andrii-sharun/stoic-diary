import express from 'express'
import { config } from 'dotenv'
import MongoDB from './server/database/mongoDB.js'
import startServer from './server/server.js'

config()

const port = process.env.PORT
const dbConfig = {
  dbName: process.env.DB_NAME,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD
}

const db = new MongoDB(dbConfig)

const app = express()

app.get('/', (_, res) => {
  res.send('Server working')
})

startServer(app, port, db)
