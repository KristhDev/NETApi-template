/* Contracts */
import { OpenApiFacadeContract } from '@domain/contracts/facedes/docs';
import { GenerateOpenApiYamlFileUseCaseContract } from '@domain/contracts/usecases/docs';

export class GenerateOpenApiYamlFileUseCase implements GenerateOpenApiYamlFileUseCaseContract {
    public constructor(
        private readonly openApiFacade: OpenApiFacadeContract,
    ) {}

    public async execute(): Promise<void> {
        await this.openApiFacade.generateOpenApiYamlFile();
    }
}