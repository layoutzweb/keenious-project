import { Request, Response } from 'express';
import { KNDocumentResource, KNDocumentResourceModel } from '../models/resource.model';

export const saveFileToResource = (req: Request, res: Response) => {
    const { filename: fileName, originalname: originalName } = req.file;
    const file = { fileName, originalName };

    KNDocumentResourceModel.updateOne({ id: req.params.id }, { file })
        .exec()
        .then((resource: KNDocumentResource) => {
            res.status(201).json(resource);
        });
};
