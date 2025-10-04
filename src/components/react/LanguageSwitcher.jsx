import { useStore } from '@nanostores/preact';
import { language } from '../../i18n/store';

export function LanguageSwitcher() {
    const lang = useStore(language);

    const setLanguage = (newLang) => {
        language.set(newLang);
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('language', newLang);
        }
    };

    return (
        <div className="lang-switcher">
            <button 
                className={lang === 'id' ? 'active' : ''}
                onClick={() => setLanguage('id')}
            >
                ID
            </button>
            <span className="separator">/</span>
            <button 
                className={lang === 'en' ? 'active' : ''}
                onClick={() => setLanguage('en')}
            >
                EN
            </button>
        </div>
    );
}