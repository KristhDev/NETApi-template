import { Request, Response } from 'express';

/* Constants */
import { serverMessages } from '@application/constants';

/* Contracts */
import { BaseController } from './base.controller';

export class UpController extends BaseController {
    public constructor () {
        super();
    }

    /**
     * @swagger
     * /up:
     *   get:
     *     summary: Up
     *     description: Check if the API is up and running
     *     tags: [System]
     *     parameters:
     *       - $ref: '#/components/parameters/AcceptLanguageHeader'
     *     responses:
     *       200:
     *         $ref: '#/components/responses/UpResponse'
     *       500:
     *         $ref: '#/components/responses/InternalServerErrorResponse'
     */
    public handle(req: Request, res: Response): void {
        const message = this.translationAdapter.translate(serverMessages.HEALTH_CHECK);
        this.jsonResponse.success(res, { message });
    }
}