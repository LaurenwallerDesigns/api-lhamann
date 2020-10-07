import { Router } from 'express'
import { create } from './comment.controllers';

const router = Router()

  router
  .route('/')
  .post(create)


  export default router