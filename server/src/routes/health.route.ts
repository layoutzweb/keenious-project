import { Express, Router } from 'express';
import { checkHealth } from '../services/health.service';

export const healthRoute = () => {
    const health = Router({ mergeParams: true });
    health.get('/', checkHealth);
    return health;
};
