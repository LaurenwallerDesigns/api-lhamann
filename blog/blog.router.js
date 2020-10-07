import { Router } from 'express'
import { getMany, createOne, getOne, updateOne, removeOne } from './blog.controllers';
import { create } from '../comment/comment.controllers';

const router = Router()

router
  .route('/')
  .get(getMany)

  router
  .route('/create')
  .post(createOne)

  router
  .route('/:id')
  .get(getOne)
  .put(updateOne)
  .delete(removeOne)
  .post(create)

  export default router