import express from 'express';
import userRouter from '../user/user.router';
import projectRouter from '../projects/projects.router';

const router = express.Router();

router.use('/user', userRouter);
router.use('/projects', projectRouter);

router.get('/health', (req: express.Request, res: express.Response) => {
    res.status(200).json({
        message: "Success",
        data: 'GREAT SUCCESS BABY',
        code: 200
    });
})

export default router;