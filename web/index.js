import express from 'express'

const port = 4242

const app = express()

app.get('/', (_, res) => {
  res.send('Server working')
})

app.listen(port, () => {
  console.log(`Server listen on port ${port}`)
})
