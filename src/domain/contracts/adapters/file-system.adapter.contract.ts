export abstract class FileSystemAdapterContract {
    public abstract mkdirIfNotExists(path: string): Promise<void>;
    public abstract writeFile(path: string, data: string): Promise<void>;
}