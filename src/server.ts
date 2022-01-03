import express, { Application } from 'express';
import http from 'http';
import config from './config/config';
import consoleLogger from './utils/console-logger';
import apiRoutes, { route } from './routes/index';
import bodyParser from 'body-parser';
import { startUptime } from './utils/uptime';

export class Server {
    router: Application;

    constructor() {
        this.router = express();
        this.listeners();
        this.middlewares();
        this.rules();
        this.routes();
    }

    private listeners() {
        this.router.use((req, res, next) => {
            if (config.CONSOLE_HTTP_NOTIFICATIONS || !config.CONSOLE_MUTE) {
                consoleLogger.info(`REQUEST - IP: [${req.socket.remoteAddress}] - URL: [${req.url}] - METHOD: [${req.method}]`);
            }

            res.on('finish', () => {
                if (config.CONSOLE_HTTP_NOTIFICATIONS || !config.CONSOLE_MUTE) {
                    consoleLogger.info(`FINISHED REQUEST - IP: [${req.socket.remoteAddress}] - URL: [${req.url}] - METHOD: [${req.method}] - STATUS: [${res.statusCode}]`);
                }
            });

            next();
        });
    }

    private middlewares() {
        this.router.use(bodyParser.json());
        this.router.use(
            bodyParser.urlencoded({
                extended: true
            })
        );
    }

    private rules() {
        this.router.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

            if (req.method == 'OPTIONS') {
                res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
                return res.status(200).json({});
            }

            next();
        });
    }

    private routes() {
        this.router.use('/api', apiRoutes);
    }

    private notFound() {
        this.router.use((req, res, next) => {
            const error = new Error('Not found');

            res.status(404).json({
                message: error.message
            });
        });
    }

    async listen(): Promise<void> {
        const httpServer = http.createServer(this.router);
        await httpServer.listen(config.SERVER_PORT, () => consoleLogger.info(`Server is listening at ${config.SERVER_HOSTNAME}:${config.SERVER_PORT}`));
        startUptime();
    }
}

//Roules
