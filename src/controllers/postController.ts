import { Request, Response, NextFunction } from 'express';
import { connect } from '../db/mysql';
import { post } from '../types/post';
import consoleLogger from '../utils/console-logger';

export async function getPost(req: Request, res: Response, next: NextFunction) {
    const conn = await connect();
    let query = `SELECT * FROM posts where id = ?`;
    const result = await conn.query(query, [req.query.post_id]);
    return res.status(200).json(result[0]);
}

export async function getPosts(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn = await connect();
        const posts = await conn.query('SELECT * FROM posts');
        return res.status(200).json(posts[0]);
    } catch (error: unknown) {
        if (typeof error == 'string') {
            consoleLogger.error(error, 'MYSQL');
        }
        return res.status(200).json({ error: error });
    }
}

export async function createPost(req: Request, res: Response) {
    const conn = await connect();
    const newPost: post = req.body;
    try {
        const result = await conn.query(`INSERT INTO posts SET ?`, [newPost]);
        return res.status(200).json({ message: 'Created post successfully!', result: result });
    } catch (error: unknown) {
        if (typeof error == 'string') {
            consoleLogger.error(error, 'MYSQL');
        }
        return res.status(200).json({ error: error });
    }
}
