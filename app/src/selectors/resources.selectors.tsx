import { RootState } from '../reducers';
import { ResourcesState } from '../reducers/resources.reducer';
import { ResourceState } from '../reducers/resource.reducer';

export const resourcesSelector = (state: RootState): ResourcesState => state.resources;
export const resourceSelector = (state: RootState): ResourceState => state.resource;
