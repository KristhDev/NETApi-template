import { Request, Response } from 'express';

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
     *     responses:
     *       200:
     *         $ref: '#/components/responses/UpResponse'
     *       500:
     *         $ref: '#/components/responses/InternalServerErrorResponse'
     */
    public handle(req: Request, res: Response): void {
        this.jsonResponse.success(res, { message: 'API is up and running' });
    }
}