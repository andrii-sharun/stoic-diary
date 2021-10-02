import { Router } from 'express'
import pageController from '../../controller/pageController.js'

const router = new Router()

router.get('/app', pageController.renderPage('app'))

export default router