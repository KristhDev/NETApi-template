import pino, { Logger, ThreadStream, TransportTargetOptions } from 'pino';

/* Contracts */
import { LoggerAdapterContract } from '@domain/contracts/adapters';

/* Interfaces */
import { CreateFileTargetOptions, LoggerAdapterOptions } from '@infrastructure/interfaces';

export class LoggerAdapter implements LoggerAdapterContract {
    private readonly logger: Logger;

    private readonly defaultOptions: Required<LoggerAdapterOptions> = {
        logFileName: 'application',
        logsDir: 'logs',
        writeLogsToConsole: true,
        writeLogsToFile: true,
        writeLogsFilePerDay: false
    };

    public constructor(options?: LoggerAdapterOptions) {
        const mergedOptions = { ...this.defaultOptions, ...options }
        const transport = this.createTransport(mergedOptions);

        this.logger = pino(transport);
    }

    /**
     * Creates a console target for the logger.
     *
     * @returns {TransportTargetOptions} The console target.
     */
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

    /**
     * Creates a file target for the logger.
     *
     * @param {CreateFileTargetOptions} options - The options for the file target.
     * @returns {TransportTargetOptions} The file target.
     */
    private createFileTarget(options: CreateFileTargetOptions): TransportTargetOptions {
        let fileName = options.logFileName;

        if (options.writeLogsFilePerDay) {
            fileName += `-${ new Date().toISOString().split('T')[0] }`;
        }

        return {
            target: 'pino/file',
            options: {
                destination: `${ options.logsDir }/${ fileName }.log`,
                mkdir: true
            }
        }
    }

    /**
     * Creates a transport for the logger.
     *
     * @param {Required<LoggerAdapterOptions>} options - The options for the transport.
     * @returns {ThreadStream} The transport.
     */
    private createTransport(options: Required<LoggerAdapterOptions>): ThreadStream {
        const fileTarget = this.createFileTarget({
            logFileName: options.logFileName,
            logsDir: options.logsDir,
            writeLogsFilePerDay: options.writeLogsFilePerDay
        });

        const consoleTarget = this.createConsoleTarget();

        const targets: TransportTargetOptions[] = [];

        if (options.writeLogsToFile) targets.push(fileTarget);
        if (options.writeLogsToConsole) targets.push(consoleTarget);

        return pino.transport({ targets });
    }

    /**
     * Logs an error message.
     *
     * @param {string} message - The error message.
     * @param {Record<string, any>} [context] - The context.
     */
    public error(message: string, context?: Record<string, any>): void {
        this.logger.error(context, message);
    }

    /**
     * Logs an info message.
     *
     * @param {string} message - The info message.
     * @param {Record<string, any>} [context] - The context.
     */
    public info(message: string, context?: Record<string, any>): void {
        this.logger.info(context, message);
    }
}