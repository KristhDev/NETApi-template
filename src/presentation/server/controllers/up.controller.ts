import { Request, Response } from 'express';

import { BaseController } from './base.controller';

export class UpController extends BaseController {
    public constructor () {
        super();
    }

    public handle(req: Request, res: Response): void {
        this.jsonResponse.success(res, { message: 'API is up and running' });
    }
}