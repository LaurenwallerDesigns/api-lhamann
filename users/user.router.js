import { Router } from 'express'
import controllers from './user.controllers';

const router = Router()

  router
  .route('/create')
  .post(controllers.createOne)


  export default router