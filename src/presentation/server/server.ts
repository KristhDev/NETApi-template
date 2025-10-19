import express, { Application } from 'express';
import cors from 'cors';

/* Config */
import { env } from '@config/env';

class Server {
    private readonly port: number;
    private app: Application;

    public constructor() {
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
            console.log(`Server running on port ${this.port}`);
        });
    }
}

export default Server;