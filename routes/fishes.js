import { Router } from 'express'
import * as fishesCtrl from '../controllers/fishes.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

//GET localhost:3000/fishes
router.get('/', fishesCtrl.index)

//
router.post('/', isLoggedIn, fishesCtrl.create)

export {
  router
}