import { Request, Response } from 'express';

/* Contracts */
import { BaseController } from './base.controller';

export class NotFoundController extends BaseController {
    public constructor () {
        super();
    }

    public handle(req: Request, res: Response): void {
        this.jsonResponse.notFound(res);
    }
}