
import {userScheme} from './validationSchemes';

export const validateUser = async (req, res, next) => {
    try {
        await userScheme.validate(req.body);
        next();
    }
    catch(e) {
        next(e);
    }
};