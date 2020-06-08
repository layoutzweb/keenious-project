import { DOCUMENTS_ERROR, DOCUMENTS_LOADED, DOCUMENTS_LOADING } from '../constants';
import { KNDocument } from '../interfaces';

export interface DocumentsState {
    documents: KNDocument[];
    loading: boolean;
    loaded: boolean;
    error?: Error;
}

export const initialState: DocumentsState = {
    documents: [],
    loading: false,
    loaded: false,
    error: undefined,
};

export const documents = (state = initialState, action: any): DocumentsState => {
    switch (action.type) {
        case DOCUMENTS_LOADING:
            return {
                ...state,
                loading: true,
            };
        case DOCUMENTS_LOADED:
            return {
                ...state,
                loading: false,
                loaded: true,
                documents: action.data,
            };
        case DOCUMENTS_ERROR:
            return {
                ...state,
                loading: false,
                loaded: true,
                error: action.data,
            };
        default:
            return state;
    }
};
