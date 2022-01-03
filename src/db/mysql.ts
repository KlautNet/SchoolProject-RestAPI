import { createPool, Pool } from 'mysql2/promise';
import consoleLogger from '../utils/console-logger';
import config from '../config/config';

const params = {
    user: config.MYSQL_USER,
    password: config.MYSQL_PASSWORD,
    host: config.MYSQL_HOST,
    database: config.MYSQL_DATABASE,
    connectionLimit: config.MYSQL_CONNECTION_LIMIT
};

export async function connect(): Promise<Pool> {
    const connection = await createPool(params);
    return connection;
}
