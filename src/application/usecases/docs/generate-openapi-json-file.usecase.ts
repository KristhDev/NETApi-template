/* Contracts */
import { OpenApiFacadeContract } from '@domain/contracts/facedes/docs';
import { GenerateOpenApiJsonFileUseCaseContract } from '@domain/contracts/usecases/docs';

export class GenerateOpenApiJsonFileUseCase implements GenerateOpenApiJsonFileUseCaseContract {
    public constructor(
        private readonly openApiFacade: OpenApiFacadeContract,
    ) {}

    public async execute(): Promise<void> {
        await this.openApiFacade.generateOpenApiJsonFile();
    }
}