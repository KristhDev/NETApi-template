/* Contracts */
import { TranslationKeys } from '@config/i18n';

/* Interfaces */
import { Locales } from '@infrastructure/interfaces';

export abstract class TranslationAdapterContract {
    public abstract changeLanguage(language: Locales): void;
    public abstract translate(key: TranslationKeys, replacements?: Record<string, any>): string;
}