import { Request, Response, NextFunction } from 'express';
import { getUptime, msToTime } from '../utils/uptime';

const getUptimeRequest = (req: Request, res: Response, next: NextFunction) => {
    var uptime = getUptime();
    return res.status(200).json({ uptime: uptime, uptimeConverted: msToTime(uptime) });
};

export default getUptimeRequest;
