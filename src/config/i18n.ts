import i18next from 'i18next';

/* Locales */
import en from '@locales/en.json';
import es from '@locales/es.json';

export const resources = {
    en: { translation: en },
    es: { translation: es }
}

export const defaultNS = 'translation';

type Join<K, P> = K extends string | number
    ? P extends string | number
    ? `${K}.${P}`
    : K
    : never;

type ObjectKeys<T> = T extends object
    ? {
        [K in keyof T]: T[K] extends object
        ? Join<K, ObjectKeys<T[K]>>
        : K;
    }[keyof T]
    : never;

export type Resources = typeof resources;
export type TranslationKeys = ObjectKeys<Resources["es"]["translation"]>;

i18next.init({
    defaultNS,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    lng: 'en',
    resources
});

export { i18next }