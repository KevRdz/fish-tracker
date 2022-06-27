import { Router } from 'express'
import * as fishesCtrl from '../controllers/fishes.js'

const router = Router()

//GET localhost:3000/fishes
router.get('/', fishesCtrl.index)

export {
  router
}