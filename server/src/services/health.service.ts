import { Request, Response } from 'express';

export const checkHealth = (req: Request, res: Response) => {
    res.status(200).json({ name: 'Keenious Api', status: 'ok' });
};
