import {
    RESOURCE_ERROR,
    RESOURCE_LOADED,
    RESOURCE_LOADING,
    CLEAR_RESOURCE,
    TOGGLE_RESOURCE_FORM,
    RESOURCE_DELETED,
    QUEUE_RESOURCE_TO_DELETE,
} from '../constants';
import { KNDocumentResource } from '../interfaces/resources';

export interface ResourceState {
    loading: boolean;
    loaded: boolean;
    form: boolean;
    deleting: boolean;
    resource?: KNDocumentResource | null;
    error?: Error;
}

export const initialState: ResourceState = {
    loading: false,
    loaded: false,
    form: false,
    deleting: false,
    resource: null,
    error: undefined,
};

export const resource = (state = initialState, action: any): ResourceState => {
    switch (action.type) {
        case TOGGLE_RESOURCE_FORM:
            return {
                ...state,
                form: action.data,
            };
        case RESOURCE_LOADING:
            return {
                ...state,
                loading: true,
            };
        case RESOURCE_LOADED:
            return {
                ...state,
                loading: false,
                loaded: true,
                resource: action.data,
            };
        case CLEAR_RESOURCE:
            return {
                ...state,
                resource: null,
                error: null,
                loading: false,
                loaded: false,
            };
        case QUEUE_RESOURCE_TO_DELETE:
            return {
                ...state,
                resource: action.data,
                deleting: true,
            };
        case RESOURCE_DELETED:
            return {
                ...state,
                resource: null,
                deleting: false,
            };
        case RESOURCE_ERROR:
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
