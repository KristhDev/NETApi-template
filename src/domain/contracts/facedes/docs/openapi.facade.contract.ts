export abstract class OpenApiFacadeContract {
    public abstract generateOpenApiJsonFile(): Promise<void>;
    public abstract generateOpenApiYamlFile(): Promise<void>;
}