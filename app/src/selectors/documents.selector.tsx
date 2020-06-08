// import { createSelector } from 'reselect'
import { RootState } from '../reducers';
import { DocumentState } from '../reducers/document.reducer';
import { DocumentsState } from '../reducers/documents.reducer';

export const documentsSelector = (state: RootState): DocumentsState => state.documents;
export const documentSelector = (state: RootState): DocumentState => state.document;
