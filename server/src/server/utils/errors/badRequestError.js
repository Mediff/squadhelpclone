
import ApplicationError from './applicationError';

export default class BadRequestError extends ApplicationError {
    constructor(message) {
        super(message || 'Bad request error', 400);
    }
}

