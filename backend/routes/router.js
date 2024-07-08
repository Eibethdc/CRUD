import express from 'express';
import { controllers } from '../controllers/controller.js';

const router = express.Router();

router.get('/posts', controllers.getData);
router.post('/posts', controllers.create);
router.put('/posts/:id', controllers.editPost);
router.delete('/posts/:id', controllers.deletePost);

export default router;