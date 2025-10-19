import dotenv from 'dotenv';
import { get } from 'env-var';

dotenv.config();

export const env = {
    APP_PORT: get('APP_PORT').required().asPortNumber(),
    APP_ENV: get('APP_ENV').required().asEnum([ 'local', 'production', 'testing' ])
}
