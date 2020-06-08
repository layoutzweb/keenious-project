import client from '../httpClient';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import {
    DOCUMENTS_LOADING,
    DOCUMENTS_LOADED,
    DOCUMENTS_ERROR,
    DOCUMENT_LOADING,
    DOCUMENT_LOADED,
    DOCUMENT_ERROR,
    CLEAR_DOCUMENT,
    TOGGLE_DOCUMENT_FORM,
    DOCUMENT_DELETED,
    QUEUE_DOCUMENT_TO_DELETE,
} from '../constants';
import { KNDocument } from '../interfaces';

export const documentsLoading = () => ({
    type: DOCUMENTS_LOADING,
});

export const documentsLoaded = (data: KNDocument[]) => ({
    type: DOCUMENTS_LOADED,
    data,
});

export const documentsError = (data: Error) => ({
    type: DOCUMENTS_ERROR,
    data,
});

export const getDocuments = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch(documentsLoading());
        try {
            const response = await client.get<KNDocument[]>('/documents').catch();
            console.log(response);
            dispatch(documentsLoaded(response.data));
        } catch (error) {
            dispatch(documentsError(error));
        }
    };
};

export const documentLoading = () => ({
    type: DOCUMENT_LOADING,
});

export const documentLoaded = (data: KNDocument) => ({
    type: DOCUMENT_LOADED,
    data,
});

export const documentError = (data: Error) => ({
    type: DOCUMENT_ERROR,
    data,
});

export const queueDocumentToDelete = (data: KNDocument) => ({
    type: QUEUE_DOCUMENT_TO_DELETE,
    data,
});

export const documentDeleted = () => ({
    type: DOCUMENT_DELETED,
});

export const clearDocument = () => ({
    type: CLEAR_DOCUMENT,
});

export const toggleDocumentForm = (data: boolean) => ({
    type: TOGGLE_DOCUMENT_FORM,
    data,
});

export const getDocument = (id: string): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch(documentLoading());
        try {
            const response = await client.get<KNDocument>(`/documents/${id}`);
            dispatch(documentLoaded(response.data));
        } catch (error) {
            dispatch(documentError(error));
        }
    };
};

export const createDocument = (
    document: KNDocument,
    callback?: (data: KNDocument) => void,
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch(documentLoading());
        try {
            const response = await client.post<KNDocument>(`/documents/`, document);

            dispatch(clearDocument());
            dispatch(toggleDocumentForm(false));
            dispatch(getDocuments());

            if (typeof callback === 'function') {
                callback(response.data);
            }
        } catch (error) {
            dispatch(documentError(error));
        }
    };
};

export const updateDocument = (document: KNDocument): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch(documentLoading());
        try {
            await client.patch<KNDocument>(`/documents/${document._id}`, document);

            dispatch(toggleDocumentForm(false));
            dispatch(documentLoaded(document));
            dispatch(getDocuments());
        } catch (error) {
            dispatch(documentError(error));
        }
    };
};

export const deleteDocument = (id: string): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch(documentLoading());
        try {
            await client.delete<KNDocument>(`/documents/${id}`);

            dispatch(documentDeleted());
            dispatch(getDocuments());
        } catch (error) {
            dispatch(documentError(error));
        }
    };
};
