
import ApplicationError from './applicationError';

export default class UnAuthorizedError extends ApplicationError {
    constructor(message) {
        super(message || 'Authorization required', 401);
    }
}