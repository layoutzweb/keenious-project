import { Request, Response } from 'express';
import { KNDocumentModel, KNDocument } from '../models/document.model';

export const getDocuments = (req: Request, res: Response): void => {
    KNDocumentModel.find()
        .exec()
        .then((results) => {
            res.status(200).json(results);
        });
};

export const getDocument = (req: Request, res: Response): void => {
    KNDocumentModel.findOne({ _id: req.params.id })
        .exec()
        .then((results) => {
            res.status(200).json(results);
        });
};

export const createDocument = (req: Request, res: Response): void => {
    console.log(req.body);
    new KNDocumentModel(req.body).save().then((document: KNDocument) => {
        res.status(201).json(document);
    });
};

export const updateDocument = (req: Request, res: Response): void => {
    KNDocumentModel.updateOne({ _id: req.params.id }, req.body)
        .exec()
        .then((document: KNDocument) => {
            res.status(200).json(document);
        });
};

export const deleteDocument = (req: Request, res: Response): void => {
    KNDocumentModel.findOneAndDelete({ _id: req.params.id })
        .exec()
        .then((document: KNDocument) => {
            res.status(204).json(document);
        });
};
