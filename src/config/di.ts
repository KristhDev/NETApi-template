import { env } from './env';

/* Contracts */
import { FileSystemAdapterContract, LoggerAdapterContract } from '@domain/contracts/adapters';
import { OpenApiFacadeContract } from '@domain/contracts/facedes/docs';
import { GenerateOpenApiJsonFileUseCaseContract } from '@domain/contracts/usecases/docs';

/* Adapters */
import { FileSystemAdapter, LoggerAdapter } from '@infrastructure/adapters';

/* Facades */
import { OpenApiFacade } from '@infrastructure/facades/docs';

/* Use Cases */
import { GenerateOpenApiJsonFileUseCase } from '@application/usecases/docs';

export const fileSystemAdapter: FileSystemAdapterContract = new FileSystemAdapter();

export const loggerAdapter: LoggerAdapterContract = new LoggerAdapter({
    logFileName: env.LOGS_FILE_NAME,
    logsDir: env.LOGS_DIR,
    writeLogsFilePerDay: true
});

export const openApiFacade: OpenApiFacadeContract = new OpenApiFacade(fileSystemAdapter, loggerAdapter);

export const generateOpenApiJsonFileUseCase: GenerateOpenApiJsonFileUseCaseContract = new GenerateOpenApiJsonFileUseCase(openApiFacade);