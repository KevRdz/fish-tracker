import { Router } from 'express'
import * as fishesCtrl from '../controllers/fishes.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

//GET localhost:3000/fishes
router.get('/', fishesCtrl.index)

router.get('/new', fishesCtrl.new)

router.post('/', isLoggedIn, fishesCtrl.create)

router.get('/:id', fishesCtrl.show)


export {
  router
}