import 'module-alias/register';
import './paths';

import supertest from 'supertest';

/* Dependencies */
import { loggerAdapter, translationAdapter } from '@config/di';

/* Server */
import { Server } from '@server';

const server = new Server(loggerAdapter, translationAdapter);
export const request = supertest(server.getAppForTesting());

jest.mock('@scalar/express-api-reference', () => ({
    apiReference: jest.fn(() => (req: any, res: any, next: any) => next())
}));