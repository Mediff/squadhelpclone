
import ApplicationError from './applicationError';

export default class ValidationError extends ApplicationError {
    constructor(message) {
        super(message || 'Validation Error', 400);
    }
}
