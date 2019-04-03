
import jwt from 'jsonwebtoken';
import {secretToken} from "../../../utils/constants/constants";

export const validateToken = async (req, res, next) => {
    const token =  req.headers.authorization;
    try {
        req.decoded = await jwt.verify(token, secretToken);
        next();
    } catch (e) {
        next(e);
    }

};