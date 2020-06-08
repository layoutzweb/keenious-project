import {
    DOCUMENT_ERROR,
    DOCUMENT_LOADED,
    DOCUMENT_LOADING,
    CLEAR_DOCUMENT,
    TOGGLE_DOCUMENT_FORM,
    DOCUMENT_DELETED,
    QUEUE_DOCUMENT_TO_DELETE,
} from '../constants';
import { KNDocument } from '../interfaces';

export interface DocumentState {
    loading: boolean;
    loaded: boolean;
    form: boolean;
    deleting: boolean;
    document?: KNDocument | null;
    error?: Error;
}

export const initialState: DocumentState = {
    loading: false,
    loaded: false,
    form: false,
    deleting: false,
    document: null,
    error: undefined,
};

export const document = (state = initialState, action: any): DocumentState => {
    switch (action.type) {
        case TOGGLE_DOCUMENT_FORM:
            return {
                ...state,
                form: action.data,
            };
        case DOCUMENT_LOADING:
            return {
                ...state,
                loading: true,
            };
        case DOCUMENT_LOADED:
            return {
                ...state,
                loading: false,
                loaded: true,
                document: action.data,
            };
        case CLEAR_DOCUMENT:
            return {
                ...state,
                document: null,
                error: null,
                loading: false,
                loaded: false,
                deleting: true,
            };
        case QUEUE_DOCUMENT_TO_DELETE:
            return {
                ...state,
                document: action.data,
                deleting: true,
            };
        case DOCUMENT_DELETED:
            return {
                ...state,
                document: null,
                deleting: false,
            };
        case DOCUMENT_ERROR:
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
