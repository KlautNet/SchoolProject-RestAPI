import express from 'express';
import checkAPIToken from '../auth/auth';
import { createPost, getPost, getPosts } from '../controllers/postController';
import getUptimeRequest from '../controllers/uptimeController';

const router = express.Router();

router.param('token', (req, res, next, token) => {
    if (checkAPIToken(token)) {
        next();
    } else {
        return res.status(401).json({
            message: 'Access Denied'
        });
    }
});

router.get('/:token/getPost', getPost);
router.get('/:token/getPosts', getPosts);
router.post('/:token/createPost', createPost);

router.get('/uptime', getUptimeRequest);

export = router;
