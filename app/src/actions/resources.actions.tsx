import client from '../httpClient';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import {
    RESOURCES_LOADING,
    RESOURCES_LOADED,
    RESOURCES_ERROR,
    RESOURCE_LOADING,
    RESOURCE_LOADED,
    RESOURCE_ERROR,
    QUEUE_RESOURCE_TO_DELETE,
    RESOURCE_DELETED,
    CLEAR_RESOURCE,
    TOGGLE_RESOURCE_FORM,
} from '../constants';
import { KNDocument } from '../interfaces';
import { KNDocumentResource } from '../interfaces/resources';

export const resourcesLoading = () => ({
    type: RESOURCES_LOADING,
});

export const resourcesLoaded = (data: any) => ({
    type: RESOURCES_LOADED,
    data,
});

export const resourcesError = (data: any) => ({
    type: RESOURCES_ERROR,
    data,
});

export const getResources = (documentId: string): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch(resourcesLoading());
        try {
            const response = await client.get(`/documents/${documentId}/resources`);
            console.log('resourcesLoaded', response);
            dispatch(resourcesLoaded(response.data));
        } catch (error) {
            dispatch(resourcesError(error));
        }
    };
};

export const resourceLoading = () => ({
    type: RESOURCE_LOADING,
});

export const resourceLoaded = (data: any) => ({
    type: RESOURCE_LOADED,
    data,
});

export const resourceError = (data: any) => ({
    type: RESOURCE_ERROR,
    data,
});

export const queueResourceToDelete = (data: KNDocumentResource) => ({
    type: QUEUE_RESOURCE_TO_DELETE,
    data,
});

export const resourceDeleted = () => ({
    type: RESOURCE_DELETED,
});

export const clearResource = () => ({
    type: CLEAR_RESOURCE,
});

export const toggleResourceForm = (data: boolean) => ({
    type: TOGGLE_RESOURCE_FORM,
    data,
});

export const getResource = (id: string): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch(resourceLoading());
        try {
            const response = await client.get(`/resources/${id}}`);
            dispatch(resourceLoaded(response.data));
        } catch (error) {
            dispatch(resourceError(error));
        }
    };
};

export const createResource = (resource: KNDocumentResource): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch(resourceLoading());
        try {
            await client.post<KNDocument>(`/resources/`, resource);

            dispatch(toggleResourceForm(false));
            dispatch(getResources(resource.documentId));
        } catch (error) {
            dispatch(resourceError(error));
        }
    };
};

export const updateResource = (resource: KNDocumentResource): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch(resourceLoading());
        try {
            await client.patch<KNDocument>(`/resources/${resource._id}`, resource);

            dispatch(toggleResourceForm(false));
            dispatch(getResources(resource.documentId));
        } catch (error) {
            dispatch(resourceError(error));
        }
    };
};

export const deleteResource = (resource: KNDocumentResource): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch(resourceLoading());
        try {
            await client.delete<KNDocument>(`/resources/${resource._id}`);
            dispatch(resourceDeleted());
            dispatch(getResources(resource.documentId));
        } catch (error) {
            dispatch(resourceError(error));
        }
    };
};
