import { RESOURCES_ERROR, RESOURCES_LOADED, RESOURCES_LOADING } from '../constants';
import { KNDocumentResource } from '../interfaces/resources';

export interface ResourcesState {
    resources: KNDocumentResource[];
    loading: boolean;
    loaded: boolean;
    error?: Error;
}

export const initialState: ResourcesState = {
    resources: [],
    loading: false,
    loaded: false,
    error: undefined,
};

export const resources = (state = initialState, action: any): ResourcesState => {
    switch (action.type) {
        case RESOURCES_LOADING:
            return {
                ...state,
                loading: true,
            };
        case RESOURCES_LOADED:
            return {
                ...state,
                loading: false,
                loaded: true,
                resources: action.data,
            };
        case RESOURCES_ERROR:
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
