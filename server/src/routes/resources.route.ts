import { Express, Router } from 'express';
import {
    getResources,
    getResource,
    createResource,
    updateResource,
    deleteResource,
} from '../services/resource.service';

export const resourcesRoute = () => {
    const documents = Router({ mergeParams: true });
    documents.get('/:id', getResource);
    documents.get('/', getResources);
    documents.post('/', createResource);
    documents.patch('/:id', updateResource);
    documents.delete('/:id', deleteResource);
    return documents;
};
