import { env } from './env';

/* Contracts */
import { FileSystemAdapterContract, LoggerAdapterContract, YamlAdapterContract } from '@domain/contracts/adapters';
import { OpenApiFacadeContract } from '@domain/contracts/facedes/docs';
import { GenerateOpenApiJsonFileUseCaseContract, GenerateOpenApiYamlFileUseCaseContract } from '@domain/contracts/usecases/docs';

/* Adapters */
import { FileSystemAdapter, LoggerAdapter, YamlAdapter } from '@infrastructure/adapters';

/* Facades */
import { OpenApiFacade } from '@infrastructure/facades/docs';

/* Use Cases */
import { GenerateOpenApiJsonFileUseCase, GenerateOpenApiYamlFileUseCase } from '@application/usecases/docs';

export const fileSystemAdapter: FileSystemAdapterContract = new FileSystemAdapter();

export const loggerAdapter: LoggerAdapterContract = new LoggerAdapter({
    logFileName: env.LOGS_FILE_NAME,
    logsDir: env.LOGS_DIR,
    writeLogsFilePerDay: true
});

export const yamlAdapter: YamlAdapterContract = new YamlAdapter();

export const openApiFacade: OpenApiFacadeContract = new OpenApiFacade(fileSystemAdapter, loggerAdapter, yamlAdapter);

export const generateOpenApiJsonFileUseCase: GenerateOpenApiJsonFileUseCaseContract = new GenerateOpenApiJsonFileUseCase(openApiFacade);
export const generateOpenApiYamlFileUseCase: GenerateOpenApiYamlFileUseCaseContract = new GenerateOpenApiYamlFileUseCase(openApiFacade);