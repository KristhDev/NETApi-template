export abstract class OpenApiFacadeContract {
    public abstract generateOpenApiJsonFile(): Promise<void>;
}