/* Config */
import { i18next, TranslationKeys } from '@config/i18n';

/* Contracts */
import { TranslationAdapterContract } from '@domain/contracts/adapters';

/* Interfaces */
import { Locales } from '@infrastructure/interfaces';

export class TranslationAdapter implements TranslationAdapterContract {

    /**
     * Changes the language of the application
     *
     * @param {Locales} language - The language to change to
     * @return {void} This function does not return a value
     */
    public changeLanguage(language: Locales): void {
        i18next.changeLanguage(language);
    }

    /**
     * Translates a key to a string
     *
     * @param {TranslationKeys} key - The key to translate
     * @param {Record<string, any>} replacements - The replacements to make in the translation
     * @return {string} The translated string
     */
    public translate(key: TranslationKeys, replacements?: Record<string, any>): string {
        return i18next.t(key, { ...replacements });
    }
}
