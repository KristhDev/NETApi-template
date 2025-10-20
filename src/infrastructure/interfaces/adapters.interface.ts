export interface LoggerAdapterOptions {
    logFileName?: string;
    logsDir?: string;
    writeLogsToConsole?: boolean;
    writeLogsToFile?: boolean;
    writeLogsFilePerDay?: boolean;
}

export interface CreateFileTargetOptions {
    logFileName: string;
    logsDir: string;
    writeLogsFilePerDay: boolean;
}