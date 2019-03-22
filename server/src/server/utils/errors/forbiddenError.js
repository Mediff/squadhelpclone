
import ApplicationError from './applicationError';

export default class ForbiddenError extends ApplicationError {
    constructor(message) {
        super(message || 'Operation Forbidden', 403);
    }
}
