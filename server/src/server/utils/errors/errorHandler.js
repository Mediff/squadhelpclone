
import {errorValidator} from './errorValidator';

export const errorHandler = (err, req, res, next) => {
    const {status, message} = errorValidator(err);
    res.status(status).send(message);
};
