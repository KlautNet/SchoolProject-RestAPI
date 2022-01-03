//import configFile from './config.json';
const configFile = require('./config.json');

export class Config {
    SERVER_HOSTNAME: string;
    SERVER_PORT: number;
    MYSQL_HOST: string;
    MYSQL_DATABASE: string;
    MYSQL_USER: string;
    MYSQL_PASSWORD: string;
    MYSQL_CONNECTION_LIMIT: string;
    CONSOLE_MUTE: string;
    CONSOLE_HTTP_NOTIFICATIONS: string;

    constructor() {
        this.SERVER_HOSTNAME = configFile.SERVER_HOSTNAME || 'localhost';
        this.SERVER_PORT = configFile.SERVER_PORT || 1087;
        this.MYSQL_HOST = configFile.MYSQL_HOST || 'localhost';
        this.MYSQL_DATABASE = configFile.MYSQL_DATABASE || 'dyedsystems';
        this.MYSQL_USER = configFile.MYSQL_USER || 'teddy';
        this.MYSQL_PASSWORD = configFile.MYSQL_PASSWORD || 'teddy';
        this.MYSQL_CONNECTION_LIMIT = configFile.MYSQL_CONNECTION_LIMIT || 10;
        this.CONSOLE_MUTE = configFile.CONSOLE_MUTE || false;
        this.CONSOLE_HTTP_NOTIFICATIONS = configFile.CONSOLE_HTTP_NOTIFICATIONS || false;
    }
}

export default configFile;
