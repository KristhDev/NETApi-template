import 'module-alias/register';
import './paths';

/* Dependencies */
import { loggerAdapter, translationAdapter } from '@config/di';

/* Server */
import { Server } from '@server';

const server = new Server(loggerAdapter, translationAdapter);
server.listen();
