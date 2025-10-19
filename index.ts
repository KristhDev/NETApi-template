import 'module-alias/register';
import './paths';

import { Server } from '@server';

const server = new Server();
server.listen();
