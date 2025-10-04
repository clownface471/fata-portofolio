import type translations from './translations.json';

export type Lang = keyof typeof translations;
export type TranslationKey = keyof (typeof translations)['id'];