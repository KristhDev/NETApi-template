import dotenv from 'dotenv';
import { get } from 'env-var';

dotenv.config();

export const env = {
    APP_ENV: get('APP_ENV').required().asEnum([ 'local', 'production', 'testing' ]),
    APP_PORT: get('APP_PORT').required().asPortNumber(),

    LOGS_DIR: get('LOGS_DIR').default('logs').asString(),
    LOGS_FILE_NAME: get('LOGS_FILE_NAME').default('application').asString(),
}
