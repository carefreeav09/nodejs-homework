import multer from 'multer';
import fs from 'fs';
import cloudinary from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

const cloudinaryV2 = cloudinary.v2;

cloudinaryV2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})


interface IFileUploader {
    upload(filter: any): multer.Multer | any;
}

class FileUploader implements IFileUploader {
    private storage = multer.diskStorage({
        destination: async (_req, _file, cb) => {
            try {
                //@ts-ignore
                const result = await cloudinaryV2.uploader.upload(_file.path, (error, result) => {
                    console.log(error, 'rrors');
                });

                console.log(result, 'result')
            }
            catch (error) {
                console.log(error, 'error inside the catch block');
            }

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


