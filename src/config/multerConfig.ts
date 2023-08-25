import multer from "multer";
import dotenv from "dotenv";
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');


dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'products',
        // format: async (_req: any, file: any) => 'png',
        // public_id: (req: any, file: any) => 'computed-filename-using-request',
    },
});

export const upload = (filter: any = null): multer.Multer => {
    return multer({ storage: storage, fileFilter: filter });
};