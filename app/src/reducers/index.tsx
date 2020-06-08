import { combineReducers } from 'redux';
import { documents, DocumentsState } from './documents.reducer';
import { document, DocumentState } from './document.reducer';
import { resources, ResourcesState } from './resources.reducer';
import { resource, ResourceState } from './resource.reducer';

export interface RootState {
    documents: DocumentsState;
    resources: ResourcesState;
    document: DocumentState;
    resource: ResourceState;
}

export default combineReducers<RootState>({
    documents,
    resources,
    document,
    resource,
});
