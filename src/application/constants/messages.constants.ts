import { TranslationKeys } from '@config/i18n';

export type ServerMessagesKeys = 
    'HEALTH_CHECK' 
    | 'INTERNAL_SERVER_ERROR' 
    | 'NOT_FOUND';

export const serverMessages: Record<ServerMessagesKeys, TranslationKeys> = {
    HEALTH_CHECK: 'server.responses.healthCheck',
    INTERNAL_SERVER_ERROR: 'server.responses.internalServerError',
    NOT_FOUND: 'server.responses.notFound'
}

export const scriptMessages = {
    GENERATE_OPEN_API_JSON_FILE: 'Generating OpenAPI JSON file...',
    GENERATE_OPEN_API_YAML_FILE: 'Generating OpenAPI YAML file...',
    CREATE_DIRECTORY_IF_NOT_EXISTS: 'Creating directory if it does not exist...',
    WRITE_FILE: 'Writing file...',
    OPENAPI_JSON_FILE_GENERATED_SUCCESSFULLY: 'OpenAPI JSON file generated successfully',
    OPENAPI_YAML_FILE_GENERATED_SUCCESSFULLY: 'OpenAPI YAML file generated successfully',
    FAILED_TO_GENERATE_OPENAPI_JSON_FILE: 'Failed to generate OpenAPI JSON file',
    FAILED_TO_GENERATE_OPENAPI_YAML_FILE: 'Failed to generate OpenAPI YAML file'
} as const;