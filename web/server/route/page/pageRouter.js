import { Router } from 'express'

const router = new Router()

router.get('/', (_, res) => {
  res.render('index')
})

export default router