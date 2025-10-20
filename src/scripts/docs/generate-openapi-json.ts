import 'module-alias/register';
import '../../../paths';

/* Dependencies */
import { generateOpenApiJsonFileUseCase } from '@config/di';

const main = async () => {
    await generateOpenApiJsonFileUseCase.execute();
}

main();
