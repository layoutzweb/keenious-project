import { Request, Response } from 'express';
import { KNDocumentResource, KNDocumentResourceModel } from '../models/resource.model';

export const getResource = (req: Request, res: Response): void => {
    KNDocumentResourceModel.findById(req.params.id)
        .exec()
        .then((results) => {
            res.status(200).json(results);
        });
};

export const getResources = (req: Request, res: Response): void => {
    KNDocumentResourceModel.find({ documentId: req.params.id })
        .exec()
        .then((results) => {
            res.status(200).json(results);
        });
};

export const getDocumentResources = (req: Request, res: Response): void => {
    KNDocumentResourceModel.find({ documentId: req.params.documentId })
        .exec()
        .then((results: KNDocumentResource[]) => res.status(200).json(results));
};

export const createResource = (req: Request, res: Response): void => {
    new KNDocumentResourceModel(req.body).save().then((document: KNDocumentResource) => {
        res.status(201).json(document);
    });
};

export const updateResource = (req: Request, res: Response): void => {
    KNDocumentResourceModel.updateOne({ _id: req.params.id }, req.body)
        .exec()
        .then((document: KNDocumentResource) => {
            res.status(200).json(document);
        });
};

export const deleteResource = (req: Request, res: Response): void => {
    KNDocumentResourceModel.findOneAndDelete({ _id: req.params.id })
        .exec()
        .then((document: KNDocumentResource) => {
            res.status(204).json(document);
        });
};
