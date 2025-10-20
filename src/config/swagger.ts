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
            contact: {
                name: packageJson.author,
                email: env.SWAGGER_CONTACT_EMAIL,
                url: env.SWAGGER_CONTACT_URL
            },
            license: {
                name: packageJson.license,
                url: env.SWAGGER_LICENSE_URL
            }
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