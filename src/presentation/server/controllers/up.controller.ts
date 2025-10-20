import { Request, Response } from 'express';

/* Contracts */
import { BaseController } from './base.controller';

export class UpController extends BaseController {
    public constructor () {
        super();
    }

    /**
     * Up
     *
     * This method is the handler for the route '/up'.
     * It responds with a success message indicating that the API is up and running.
     *
     * @param {Request} req - The incoming request object.
     * @param {Response} res - The outgoing response object.
     * @returns {void} This function does not return a value.
     */
    public handle(req: Request, res: Response): void {
        this.jsonResponse.success(res, { message: 'API is up and running' });
    }
}