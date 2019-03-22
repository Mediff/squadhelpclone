
import ApplicationError from './applicationError';

export default class NotFoundError extends ApplicationError {
    constructor(message) {
        super(message || 'Not found', 404);
    }
}
