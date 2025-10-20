import express, { Application } from 'express';
import cors from 'cors';

/* Config */
import { env } from '@config/env';

/* Contracts */
import { LoggerAdapterContract } from '@domain/contracts/adapters';

class Server {
    private readonly port: number;
    private app: Application;

    public constructor(
        private readonly loggerAdapter: LoggerAdapterContract
    ) {
        this.port = env.APP_PORT;
        this.app = express();
    }

    private middlewares(): void {
        this.app.use(cors());
        this.app.use(express.json());
    }

    private routes(): void {
        
    }

    public listen(): void {
        this.app.listen(this.port, () => {
            this.loggerAdapter.info(`Server running on port ${ this.port }`);
        });
    }
}

export default Server;