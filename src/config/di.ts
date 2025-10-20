import { env } from './env';

import { LoggerAdapterContract } from '@domain/contracts/adapters';

import { LoggerAdapter } from '@infrastructure/adapters';

export const loggerAdapter: LoggerAdapterContract = new LoggerAdapter({
    logFileName: env.LOGS_FILE_NAME,
    logsDir: env.LOGS_DIR,
    writeLogsFilePerDay: true
});
