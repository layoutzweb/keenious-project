import mongoose, { Schema, Document } from 'mongoose';

export interface KNDocument extends Document {
    _id: string;
    title: string;
    body?: string;
}

const KNDocumentSchema = new Schema({
    title: { type: String, require: true },
    body: { type: String },
});

export const KNDocumentModel = mongoose.model<KNDocument>('Document', KNDocumentSchema);
