import express, { Application } from 'express';
import cors from 'cors';

/* Config */
import { env } from '@config/env';

/* Contracts */
import { LoggerAdapterContract } from '@domain/contracts/adapters';

/* Middlewares */
import { LogRequestsMiddleware } from './middlewares';

/* Controllers */
import { UpController } from './controllers';

class Server {
    private readonly port: number;
    private app: Application;

    public constructor(
        private readonly loggerAdapter: LoggerAdapterContract
    ) {
        this.port = env.APP_PORT;
        this.app = express();
    }

    /**
     * Initializes the server middlewares.
     * 
     * @return {void} - Returns nothing.
     */
    private middlewares(): void {
        const logRequestsMiddleware = new LogRequestsMiddleware(this.loggerAdapter);

        this.app.use(cors());
        this.app.use(express.json());
        this.app.use((req, res, next) => logRequestsMiddleware.handle(req, res, next));
    }

    /**
     * Initializes the server routes.
     * 
     * @return {void} - Returns nothing.
     */
    private routes(): void {
        const upController = new UpController();

        this.app.get('/up', (req, res) => upController.handle(req, res));
    }

    /**
     * Initializes the server for testing.
     * 
     * @return {Application} - Returns the initialized server application.
     */
    public getAppForTesting(): Application {
        this.middlewares();
        this.routes();

        return this.app;
    }

    /**
     * Initializes the server for production.
     * 
     * @return {void} - Returns nothing.
     */
    public listen(): void {
        this.middlewares();
        this.routes();

        this.app.listen(this.port, () => {
            this.loggerAdapter.info(`Server running on port ${ this.port }`);
        });
    }
}

export default Server;