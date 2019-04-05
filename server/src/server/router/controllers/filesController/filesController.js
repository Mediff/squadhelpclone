
import multer from 'multer';


const storage = multer.diskStorage({
    destination: './files',
    filename(req, file, cb) {
        cb(null, `${new Date().toISOString()}-${file.originalname}`);
    },
});

export const upload = multer({storage}).single('file');

export const uploadFile = async (req, res, next) => {
    try {
        res.send(req.file.path);
    } catch (e) {
        next(e);
    }
};


