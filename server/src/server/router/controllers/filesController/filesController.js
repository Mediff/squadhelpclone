
import axios from 'axios';


export const uploadFile = async (req, res, next) => {
    try {
        res.send(req.file.path);
    } catch (e) {
        next(e);
    }
};

export const contestFileUpload = async (req, res, next) => {
    try {
        const contests = req.body;
        for (let contest of contests) {
            const {file} = contest;
            console.log(file);
            const data = await axios.post('http://localhost:9632/api/files', file);
            console.log(data);
            contest.file = data;
        }
        next();
    }
    catch (e){
        next(e);
    }
};
