import { Express, Router } from 'express';
import multer from 'multer';
import { saveFileToResource } from '../services/file.service';

const upload = multer({
    dest: process.env.UPLOAD_PATH,
    limits: { fileSize: 1000000, files: 100 },
});

export const fileRoute = () => {
    const files = Router();
    files.post('/', upload.single('resource'), saveFileToResource);
    return files;
};
