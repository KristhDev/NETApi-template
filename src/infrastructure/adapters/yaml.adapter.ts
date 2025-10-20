import jsYaml from 'js-yaml';

/* Contracts */
import { YamlAdapterContract } from '@domain/contracts/adapters';

export class YamlAdapter implements YamlAdapterContract {

    /**
     * Converts an object to a YAML string.
     *
     * @param {object} data - The object to convert.
     * @returns {string} The YAML string representation of the object.
     */
    public fromObject(data: object): string {
        return jsYaml.dump(data, { noRefs: true });
    }
}