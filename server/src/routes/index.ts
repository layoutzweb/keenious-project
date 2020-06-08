import { Express, Router } from 'express';
import { healthRoute } from './health.route';
import { documentsRoute } from './documents.route';
import { resourcesRoute } from './resources.route';
import { fileRoute } from './file.route';

export default () => {
    const knRouter = Router({ mergeParams: true });
    knRouter.use('/health', healthRoute());
    knRouter.use('/documents', documentsRoute());
    knRouter.use('/resources', resourcesRoute());
    knRouter.use('/file', fileRoute());
    return knRouter;
};
