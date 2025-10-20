/* Dependencies */
import { translationAdapter } from '@config/di';

/* Constants */
import { httpStatus, serverMessages } from '@application/constants';

/* Errors */
import { BaseError } from './base.error';

export interface HttpErrorJson {
    message: string;
    status: number;
}

export class HttpError extends BaseError<HttpErrorJson> {
    constructor(message: string, public status: number) {
        super(message);
        this.name = 'HttpError';
    }

    public toJSON(): HttpErrorJson {
        return {
            message: this.message,
            status: this.status
        }
    }

    /**
     * @swagger
     * components:
     *   responses:
     *     BadRequestResponse:
     *       description: Bad Request
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               message:
     *                 type: string
     *                 example: Bad Request
     *               status:
     *                 type: number
     *                 example: 400
     */
    public static badRequest(message: string): HttpError {
        return new HttpError(message, httpStatus.BAD_REQUEST);
    }

    /**
     * @swagger
     * components:
     *   responses:
     *     NotFoundResponse:
     *       description: Not Found
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               message:
     *                 type: string
     *                 example: Not Found
     *               status:
     *                 type: number
     *                 example: 404
     */
    public static notFound(message?: string): HttpError {
        const defaultMessage = translationAdapter.translate(serverMessages.NOT_FOUND);
        return new HttpError(message || defaultMessage, httpStatus.NOT_FOUND);
    }

    /**
     * @swagger
     * components:
     *   responses:
     *     InternalServerErrorResponse:
     *       description: Internal Server Error
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               message:
     *                 type: string
     *                 example: Internal Server Error
     *               status:
     *                 type: number
     *                 example: 500
     */
    public static internalServerError(message?: string): HttpError {
        const defaultMessage = translationAdapter.translate(serverMessages.INTERNAL_SERVER_ERROR);
        return new HttpError(message || defaultMessage, httpStatus.INTERNAL_SERVER_ERROR);
    }
}