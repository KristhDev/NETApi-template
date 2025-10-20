import 'module-alias/register';
import '../../../paths';

/* Dependencies */
import { generateOpenApiYamlFileUseCase } from '@config/di';

const main = async () => {
    await generateOpenApiYamlFileUseCase.execute();
}

main();
