export enum KNResourceType {
    URL = 'url',
    TEXT = 'text',
    FILE = 'file',
}
export type KNResourceTypeProp = 'url' | 'text' | 'file' | null;

export interface KNDocumentResource {
    _id?: string;
    documentId?: string;
    title?: string;
    type: KNResourceType;
    body?: string;
}
