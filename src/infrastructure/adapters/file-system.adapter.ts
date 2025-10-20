import fs from 'fs';

/* Contracts */
import { FileSystemAdapterContract } from '@domain/contracts/adapters';

/* Errors */
import { FileSystemError } from '@domain/errors';

export class FileSystemAdapter implements FileSystemAdapterContract {

    /**
     * Creates a directory if it does not exist.
     *
     * @param {string} path - The path to the directory.
     * @returns {Promise<void>} A promise that resolves when the directory is created.
     */
    public async mkdirIfNotExists(path: string): Promise<void> {
        try {
            const existsDir = fs.existsSync(path);
            if (existsDir) return;

            await fs.promises.mkdir(path, { recursive: true });
        } 
        catch (error) {
            const fileSystemError = new FileSystemError((error as Error)?.message || 'Error creating directory');
            throw fileSystemError;
        }
    }

    /**
     * Writes data to a file.
     *
     * @param {string} path - The path to the file.
     * @param {string} data - The data to write to the file.
     * @returns {Promise<void>} A promise that resolves when the data is written.
     */
    public async writeFile(path: string, data: string): Promise<void> {
        try {
            await fs.promises.writeFile(path, data);
        } 
        catch (error) {
            const fileSystemError = new FileSystemError((error as Error)?.message || 'Error writing file');
            throw fileSystemError;
        }
    }
}