import { Request, Response, NextFunction } from 'express';
import { connect } from '../db/mysql';
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
        const posts = await conn.query('SELECT * FROM postsdev');
        return res.status(200).json(posts[0]);
    } catch (error: unknown) {
        if (typeof error == 'string') {
            //consoleLogger.error(error, 'MYSQL');
        }
        return res.status(200).json({ error: error });
    }
}
