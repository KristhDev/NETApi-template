import path from 'path';

/* Config */
import { env } from '@config/env';
import swaggerSpec from '@config/swagger';

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
            this.loggerAdapter.info('Generating OpenAPI JSON file...');

            this.loggerAdapter.info('Creating directory if it does not exist...');
            const dirPath = `${ process.cwd() }/${ env.SWAGGER_OPEN_API_FILE_DIR }`;
            await this.fileSystemAdapter.mkdirIfNotExists(dirPath);

            this.loggerAdapter.info('Writing file...');
            const filePath = path.join(dirPath, `${ env.SWAGGER_OPEN_API_FILE_NAME }.json`);
            await this.fileSystemAdapter.writeFile(filePath, JSON.stringify(swaggerSpec, null, 2));

            this.loggerAdapter.info('OpenAPI JSON file generated successfully');
        } 
        catch (error) {
            const errorData = (error as BaseError<{}>).toJSON(); 
            this.loggerAdapter.error('Failed to generate OpenAPI JSON file', errorData);
        }
    }

    /**
     * Generates an OpenAPI YAML file.
     *
     * @returns {Promise<void>} A promise that resolves when the file is generated.
     */
    public async generateOpenApiYamlFile(): Promise<void> {
        try {
            this.loggerAdapter.info('Generating OpenAPI YAML file...');

            this.loggerAdapter.info('Creating directory if it does not exist...');
            const dirPath = `${ process.cwd() }/${ env.SWAGGER_OPEN_API_FILE_DIR }`;
            await this.fileSystemAdapter.mkdirIfNotExists(dirPath);

            this.loggerAdapter.info('Writing file...');
            const filePath = path.join(dirPath, `${ env.SWAGGER_OPEN_API_FILE_NAME }.yaml`);
            const yamlData = this.yamlAdapter.fromObject(swaggerSpec);

            await this.fileSystemAdapter.writeFile(filePath, yamlData);

            this.loggerAdapter.info('OpenAPI YAML file generated successfully');
        } 
        catch (error) {
            const errorData = (error as BaseError<{}>).toJSON(); 
            this.loggerAdapter.error('Failed to generate OpenAPI YAML file', errorData);
        }
    }
}