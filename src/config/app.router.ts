import express from 'express';
import userRouter from '../user/user.router';
import projectRouter from '../projects/projects.router';

const router = express.Router();

router.use('/user', userRouter);
router.use('/projects', projectRouter);

router.get('/health', (req: express.Request, res: express.Response) => res.send('OK'))

export default router;