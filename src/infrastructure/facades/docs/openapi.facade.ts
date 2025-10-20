import path from 'path';

/* Config */
import { env } from '@config/env';
import swaggerSpec from '@config/swagger';

/* Constants */
import { scriptMessages } from '@application/constants';

/* Contracts */
import { FileSystemAdapterContract, LoggerAdapterContract, YamlAdapterContract } from '@domain/contracts/adapters';
import { OpenApiFacadeContract } from '@domain/contracts/facedes/docs';

/* Errors */
import { BaseError } from '@domain/errors';

export class OpenApiFacade implements OpenApiFacadeContract {
    public constructor(
        private readonly fileSystemAdapter: FileSystemAdapterContract,
        private readonly loggerAdapter: LoggerAdapterContract,
        private readonly yamlAdapter: YamlAdapterContract,
    ) {}

    /**
     * Generates an OpenAPI JSON file.
     *
     * @returns {Promise<void>} A promise that resolves when the file is generated.
     */
    public async generateOpenApiJsonFile(): Promise<void> {
        try {
            this.loggerAdapter.info(scriptMessages.GENERATE_OPEN_API_JSON_FILE);

            this.loggerAdapter.info(scriptMessages.CREATE_DIRECTORY_IF_NOT_EXISTS);
            const dirPath = `${ process.cwd() }/${ env.SWAGGER_OPEN_API_FILE_DIR }`;
            await this.fileSystemAdapter.mkdirIfNotExists(dirPath);

            this.loggerAdapter.info(scriptMessages.WRITE_FILE);
            const filePath = path.join(dirPath, `${ env.SWAGGER_OPEN_API_FILE_NAME }.json`);
            await this.fileSystemAdapter.writeFile(filePath, JSON.stringify(swaggerSpec, null, 2));

            this.loggerAdapter.info(scriptMessages.OPENAPI_JSON_FILE_GENERATED_SUCCESSFULLY);
        } 
        catch (error) {
            const errorData = (error as BaseError<{}>).toJSON(); 
            this.loggerAdapter.error(scriptMessages.FAILED_TO_GENERATE_OPENAPI_JSON_FILE, errorData);
        }
    }

    /**
     * Generates an OpenAPI YAML file.
     *
     * @returns {Promise<void>} A promise that resolves when the file is generated.
     */
    public async generateOpenApiYamlFile(): Promise<void> {
        try {
            this.loggerAdapter.info(scriptMessages.GENERATE_OPEN_API_YAML_FILE);

            this.loggerAdapter.info(scriptMessages.CREATE_DIRECTORY_IF_NOT_EXISTS);
            const dirPath = `${ process.cwd() }/${ env.SWAGGER_OPEN_API_FILE_DIR }`;
            await this.fileSystemAdapter.mkdirIfNotExists(dirPath);

            this.loggerAdapter.info(scriptMessages.WRITE_FILE);
            const filePath = path.join(dirPath, `${ env.SWAGGER_OPEN_API_FILE_NAME }.yaml`);
            const yamlData = this.yamlAdapter.fromObject(swaggerSpec);

            await this.fileSystemAdapter.writeFile(filePath, yamlData);

            this.loggerAdapter.info(scriptMessages.OPENAPI_YAML_FILE_GENERATED_SUCCESSFULLY);
        } 
        catch (error) {
            const errorData = (error as BaseError<{}>).toJSON(); 
            this.loggerAdapter.error(scriptMessages.FAILED_TO_GENERATE_OPENAPI_YAML_FILE, errorData);
        }
    }
}