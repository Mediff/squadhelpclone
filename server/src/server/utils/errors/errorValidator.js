
import NotFoundError from './notFoundError';
import ValidationError from './validationError';
import BadRequestError from './badRequestError';
import ForbiddenError from './forbiddenError';
import UnAuthorizedError from './unAuthorizedError';

export const errorValidator = (error) => {

    console.log(error);

    if(error.name) {
        switch(error.name) {
            case 'ValidationError':
                return new ValidationError(error.message);
            case 'CastError':
                return new NotFoundError(error.message);
            case 'MongoError':
                return new BadRequestError(error.message);
            case 'SyntaxError':
                return new BadRequestError('Syntax error in passed data');
            case 'JsonWebTokenError':
            case 'TokenExpiredError':
                return new UnAuthorizedError('Token not valid');
            case 'SequelizeUniqueConstraintError':
                return new ValidationError('Email already taken');
        }
    }
    return error;
};