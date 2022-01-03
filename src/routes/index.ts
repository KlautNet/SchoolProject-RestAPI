import express from 'express';
import { getPost, getPosts } from '../controllers/postController';
import getUptimeRequest from '../controllers/uptimeController';

const router = express.Router();

router.get('/getPost', getPost);
router.get('/getPosts', getPosts);

router.get('/uptime', getUptimeRequest);

export = router;
