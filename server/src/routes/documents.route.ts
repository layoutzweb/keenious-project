import { Express, Router } from 'express';
import {
    getDocuments,
    getDocument,
    createDocument,
    updateDocument,
    deleteDocument,
} from '../services/documents.service';
import { getResources } from '../services/resource.service';

export const documentsRoute = () => {
    const documents = Router({ mergeParams: true });
    documents.get('/:id/resources', getResources);
    documents.get('/:id', getDocument);
    documents.get('/', getDocuments);
    documents.post('/', createDocument);
    documents.patch('/:id', updateDocument);
    documents.delete('/:id', deleteDocument);
    return documents;
};
