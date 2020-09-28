import { Router } from 'express'
import controllers from './blog.controllers';

const router = Router()

router
  .route('/')
  .get(controllers.getMany)

  router
  .route('/create')
  .post(controllers.createOne)

  router
  .route('/:id')
  .get(controllers.getOne)

  export default router