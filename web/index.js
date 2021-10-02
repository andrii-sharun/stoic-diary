import express from 'express'
import { config } from 'dotenv'
import path from 'path'
import exphbs from 'express-handlebars'
import MongoDB from './server/database/mongoDB.js'
import startServer from './server/server.js'
import pageRouter from './server/route/page/pageRouter.js'

config()

const __dirname = path.resolve()
const port = process.env.PORT
const dbConfig = {
  dbName: process.env.DB_NAME,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD
}

const db = new MongoDB(dbConfig)

const app = express()

app.engine('handlebars', exphbs({
  defaultLayout: false
}))
app.set('view engine', 'handlebars')
app.set('views', `${__dirname}/web/server/views`)

app.use(express.static(`${__dirname}/web/client/public`))
app.use(pageRouter)

startServer(app, port, db)
