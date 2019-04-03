
import {contestsScheme} from './validationSchemes';

export const validateContest = async (req, res, next) => {
    try {
        const {contests} = req.body;
        await contestsScheme.validate(contests);
        next();
    }
    catch(e) {
        console.log(e);
        next(e);
    }
};