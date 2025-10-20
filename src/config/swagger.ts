import swaggerJsDoc from 'swagger-jsdoc';

/* Environment variables */
import { env } from './env';

/* Package */
import packageJson from '@package';

export default swaggerJsDoc({
    definition: {
        openapi: env.SWAGGER_OPEN_API_VERSION,
        info: {
            title: `${ env.APP_NAME } API Documentation`,
            version: packageJson.version,
            description: `${ env.APP_NAME } API Documentation`,
        },
        servers: [
            {
                url: `http://localhost:${ env.APP_PORT }`,
                description: 'Local server'
            }
        ]
    },
    apis: [ './src/**/*.ts' ]
});