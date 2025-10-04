import { atom } from 'nanostores';
import type { Lang, TranslationKey } from './types';
import translations from './translations.json';

const getInitialLang = (): Lang => {
    if (typeof localStorage !== 'undefined') {
        const storedLang = localStorage.getItem('language');
        if (storedLang === 'en' || storedLang === 'id') {
            return storedLang;
        }
    }
    return 'id';
};

export const language = atom<Lang>(getInitialLang());

export const t = (key: TranslationKey, lang: Lang = language.get()) => {
    return translations[lang][key] || key;
};