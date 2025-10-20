import { env } from './env';

/* Contracts */
import { LoggerAdapterContract } from '@domain/contracts/adapters';

/* Adapters */
import { LoggerAdapter } from '@infrastructure/adapters';

export const loggerAdapter: LoggerAdapterContract = new LoggerAdapter({
    logFileName: env.LOGS_FILE_NAME,
    logsDir: env.LOGS_DIR,
    writeLogsFilePerDay: true
});
