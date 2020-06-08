import mongoose, { Schema, Document } from 'mongoose';

export interface KNDocumentResource extends Document {
    _id: string;
    documentId: string;
    type: string;
    title: string;
    body?: string;
    file?: {
        fileName: string;
        originalName: string;
    };
}

const KNDocumentResourceSchema = new Schema({
    documentId: String,
    type: { type: String, require: true },
    title: { type: String, require: true },
    body: { type: String },
    file: {
        fileName: { type: String },
        originalName: { type: String },
    },
});

export const KNDocumentResourceModel = mongoose.model<KNDocumentResource>('DocumentResource', KNDocumentResourceSchema);
