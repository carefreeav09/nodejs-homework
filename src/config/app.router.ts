import express from 'express';
import userRouter from '../user/user.router';
import projectRouter from '../projects/projects.router';

const router = express.Router();

router.use('/user', userRouter);
router.use('/projects', projectRouter);

export default router;