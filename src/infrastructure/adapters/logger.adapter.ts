import pino, { Logger, ThreadStream, TransportTargetOptions } from 'pino';

import { LoggerAdapterContract } from '@domain/contracts/adapters';

import { LoggerAdapterOptions } from '@infrastructure/interfaces';

export class LoggerAdapter implements LoggerAdapterContract {
    private readonly logger: Logger;

    private readonly defaultOptions: Required<LoggerAdapterOptions> = {
        logFileName: 'application',
        logsDir: 'logs',
        writeLogsToFile: true,
        writeLogsToConsole: true
    };

    public constructor(options?: LoggerAdapterOptions) {
        const mergedOptions = { ...this.defaultOptions, ...options }
        const transport = this.createTransport(mergedOptions);

        this.logger = pino(transport);
    }

    private createConsoleTarget(): TransportTargetOptions {
        return {
            target: 'pino-pretty',
            options: {
                colorize: true,
                levelFirst: true,
                singleLine: true,
                translateTime: 'yyyy-mm-dd HH:MM:ss'
            }
        }
    }

    private createFileTarget(logFileName: string, logsDir: string): TransportTargetOptions {
        return {
            target: 'pino/file',
            options: {
                destination: `${ logsDir }/${ logFileName }.log`,
                mkdir: true
            }
        }
    }

    private createTransport(options: Required<LoggerAdapterOptions>): ThreadStream {
        const fileTarget = this.createFileTarget(options.logFileName, options.logsDir);
        const consoleTarget = this.createConsoleTarget();

        const targets: TransportTargetOptions[] = [];

        if (options.writeLogsToFile) targets.push(fileTarget);
        if (options.writeLogsToConsole) targets.push(consoleTarget);

        return pino.transport({ targets });
    }

    public error(message: string, context?: Record<string, any>): void {
        this.logger.error(context, message);
    }

    public info(message: string, context?: Record<string, any>): void {
        this.logger.info(context, message);
    }
}