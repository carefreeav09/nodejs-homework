import multer from 'multer';
import fs from 'fs';
import express from 'express';

interface IFileUploader {
    upload(filter: any): multer.Multer | any;
}

class FileUploader implements IFileUploader {
    private storage = multer.diskStorage({
        destination: (_req, _file, cb) => {
            const path = `./uploads`;
            fs.mkdirSync(path, { recursive: true });
            cb(null, path);
        },
        filename: (_req, file, cb) => {
            cb(null, `${file.originalname.split(' ').join('-')}`);
        },
    });

    upload(filter: any) {
        return multer({ storage: this.storage, fileFilter: filter });
    }
}


//
export const upload = (filter: any = null): multer.Multer => {
    return new FileUploader().upload(filter);
};


