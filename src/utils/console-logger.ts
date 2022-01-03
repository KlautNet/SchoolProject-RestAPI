import config from '../config/config';

const getDate = (): string => {
    return new Date().toISOString();
};

const info = (message: string) => {
    if (!config.CONSOLE_MUTE) console.log(`[INFO - ${getDate()}] ${message}`);
};

const debug = (message: string) => {
    if (!config.CONSOLE_MUTE) console.debug(`[DEBUG - ${getDate()}] ${message}`);
};

const warn = (message: string) => {
    if (!config.CONSOLE_MUTE) console.warn(`[WARNING - ${getDate()}] ${message}`);
};

const error = (message: string, type: string) => {
    if (!config.CONSOLE_MUTE) console.error(`[${type}] [ERROR - ${getDate()}] ${message}`);
};

export default {
    info,
    debug,
    warn,
    error
};
