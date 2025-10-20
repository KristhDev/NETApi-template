import { Request, Response } from 'express';

import { httpStatus } from '@application/constants';

import { JsonResponseUtil } from '@server/utils';

/**
 * @swagger
 * tags:
 *   name: System
 *   description: This tag is used to group all the system endpoints. Currently, the only system endpoint is /up.
 *
 * @swagger
 * components:
 *   responses:
 *     UpResponse:
 *       description: API is up and running
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 example: API is up and running
 *               status:
 *                 type: number
 *                 example: 200
 */
export abstract class BaseController {
    protected readonly jsonResponse: JsonResponseUtil;
    protected readonly httpStatus = httpStatus;

    public constructor (
    ) {
        this.jsonResponse = new JsonResponseUtil();
    }

    public abstract handle(req: Request, res: Response): void;
}