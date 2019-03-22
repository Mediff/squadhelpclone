
import ApplicationError from './applicationError';

export default class UnknownError extends ApplicationError {
    constructor(message) {
        super(message || 'Bad things happens. That is all we know', 400);
    }
}
