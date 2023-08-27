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

export const upload = (filter: any = null) => {
    const multerUpload = multer({ storage: storage, fileFilter: filter });

    console.log(multerUpload, 'multer upload')

    // return (req: Request, res: Response, next: NextFunction) => {
    //     multerUpload.single('file')(req, res, (err) => {
    //         if (err instanceof multer.MulterError) {
    //             return res.status(400).json({ error: err.message });
    //         } else if (err) {
    //             return res.status(500).json({ error: "An error occurred" });
    //         }

    //         // Retrieve the public_id of the uploaded file from the Cloudinary response
    //         // const publicId = req.file.public_id;
    //         // const fileName = req.file.originalname;

    //         // // Call the callback function with the public_id and file name
    //         // if (callback) {
    //         //     callback(publicId, fileName);
    //         // }

    //         next();
    //     });
    // };

    return multer({ storage: storage, fileFilter: filter });

};