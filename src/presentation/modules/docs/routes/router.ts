import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import { apiReference as scalarApiReference } from '@scalar/express-api-reference';

/* Swagger */
import swaggerSpec from '@config/swagger';

/* Env */
import { env } from '@config/env';

const docsRouter: Router = Router();

docsRouter.use('/docs/swagger', swaggerUi.serve);

docsRouter.get('/docs/swagger', swaggerUi.setup(swaggerSpec, {
    explorer: true,
    swaggerOptions: {
        urls: [
            {
                name: `${ env.APP_NAME } OpenAPI`,
                url: '/api/docs/openapi.json'
            }
        ]
    }
}));

docsRouter.use('/docs/scalar', scalarApiReference({
    cdn: 'https://cdn.jsdelivr.net/npm/@scalar/api-reference',
    url: `/api/docs/openapi.json`
}));

docsRouter.get('/docs/openapi.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json(swaggerSpec);
});

export default docsRouter;