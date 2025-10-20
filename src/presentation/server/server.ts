import express, { Application } from 'express';
import cors from 'cors';

/* Config */
import { env } from '@config/env';

/* Contracts */
import { LoggerAdapterContract, TranslationAdapterContract } from '@domain/contracts/adapters';

/* Middlewares */
import { LogRequestsMiddleware } from './middlewares/logs';
import { LocalizationMiddleware } from './middlewares/localization';

/* Controllers */
import { NotFoundController, UpController } from './controllers';

/* Routes */
import { docsRouter } from '@docs/routes';

class Server {
    private readonly port: number;
    private app: Application;

    public constructor(
        private readonly loggerAdapter: LoggerAdapterContract,
        private readonly translationAdapter: TranslationAdapterContract,
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
        const localizationMiddleware = new LocalizationMiddleware(this.translationAdapter);

        this.app.use(cors());
        this.app.use(express.json());
        this.app.use((req, res, next) => logRequestsMiddleware.handle(req, res, next));
        this.app.use((req, res, next) => localizationMiddleware.handle(req, res, next));
    }

    /**
     * Initializes the server routes.
     * 
     * @return {void} - Returns nothing.
     */
    private routes(): void {
        const upController = new UpController();
        const notFoundController = new NotFoundController();

        this.app.get('/up', (req, res) => upController.handle(req, res));
        this.app.use('/api', docsRouter);
        this.app.use((req, res) => notFoundController.handle(req, res));
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