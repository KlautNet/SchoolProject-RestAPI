import { Server } from '../server';
import consoleLogger from './console-logger';

var startTime: Date;

export function getUptime() {
    var time = new Date().getTime() - startTime.getTime();
    return time;
}

export function msToTime(duration: number) {
    var milliseconds = Math.floor((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = Number(hours < 10 ? '0' + hours : hours);
    minutes = Number(minutes < 10 ? '0' + minutes : minutes);
    seconds = Number(seconds < 10 ? '0' + seconds : seconds);

    return hours + ':' + minutes + ':' + seconds + '.' + milliseconds;
}

export function startUptime() {
    startTime = new Date();
    consoleLogger.info(`Started uptime counter! [${startTime.toISOString()}]`);
}
