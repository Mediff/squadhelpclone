
export const uploadFile = async (req, res, next) => {
    try {
        res.send(req.file.path);
    } catch (e) {
        next(e);
    }
};


