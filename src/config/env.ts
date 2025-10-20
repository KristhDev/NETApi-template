import dotenv from 'dotenv';
import { get } from 'env-var';

dotenv.config({ quiet: true });

export const env = {
    APP_ENV: get('APP_ENV').required().asEnum([ 'local', 'production', 'testing' ]),
    APP_NAME: get('APP_NAME').required().asString(),
    APP_PORT: get('APP_PORT').required().asPortNumber(),

    LOGS_DIR: get('LOGS_DIR').default('logs').asString(),
    LOGS_FILE_NAME: get('LOGS_FILE_NAME').default('application').asString(),

    SWAGGER_OPEN_API_VERSION: get('SWAGGER_OPEN_API_VERSION').required().asString(),
}