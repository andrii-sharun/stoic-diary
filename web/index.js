import express from 'express'
import { config } from 'dotenv'
config()

const port = process.env.PORT

const app = express()

app.get('/', (_, res) => {
  res.send('Server working')
})

app.listen(port, () => {
  console.log(`Server listen on port ${port}`)
})
