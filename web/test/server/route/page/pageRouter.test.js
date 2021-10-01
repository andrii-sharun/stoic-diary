import express from 'express'
import supertest from 'supertest'
import path from 'path'
import http from 'http'
import exphbs from 'express-handlebars'
import pageRouter from '../../../../server/route/page/pageRouter.js'

const __dirname = path.resolve()

const app = express()
const server = http.createServer(app)
const router = supertest(server)

beforeAll(() => {
  app.engine('handlebars', exphbs({
    defaultLayout: false
  }))
  app.set('view engine', 'handlebars')
  app.set('views', `${__dirname}/web/server/views`)
  app.use(pageRouter)
})

afterAll(() => {
  server.close()
})

describe('pageRouter', () => {
  describe('"/" route', () => {
    it('should return statusCode 200', async () => {
      const response = await router.get('/')
      expect(response.statusCode).toBe(200)
    })

    it('should return html page', async () => {
      const response = await router.get('/')
      expect(response.header).toHaveProperty('content-type', 'text/html; charset=utf-8')
    })
  })
})