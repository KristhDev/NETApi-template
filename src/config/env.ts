import dotenv from 'dotenv';
import { get } from 'env-var';

dotenv.config({ quiet: true });

export const env = {
    APP_ENV: get('APP_ENV').required().asEnum([ 'local', 'production', 'testing' ]),
    APP_NAME: get('APP_NAME').required().asString(),
    APP_PORT: get('APP_PORT').default(9000).asPortNumber(),

    LOGS_DIR: get('LOGS_DIR').default('logs').asString(),
    LOGS_FILE_NAME: get('LOGS_FILE_NAME').default('application').asString(),

    SWAGGER_CONTACT_EMAIL: get('SWAGGER_CONTACT_EMAIL').required().asString(),
    SWAGGER_CONTACT_URL: get('SWAGGER_CONTACT_URL').required().asString(),
    SWAGGER_LICENSE_URL: get('SWAGGER_LICENSE_URL').required().asString(),
    SWAGGER_OPEN_API_FILE_DIR: get('SWAGGER_OPEN_API_FILE_DIR').default('docs').asString(),
    SWAGGER_OPEN_API_FILE_NAME: get('SWAGGER_OPEN_API_FILE_NAME').default('openapi').asString(),
    SWAGGER_OPEN_API_VERSION: get('SWAGGER_OPEN_API_VERSION').required().asString(),
}