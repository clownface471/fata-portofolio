import { useStore } from '@nanostores/preact';
import { language } from '../../i18n/store';
import translations from '../../i18n/translations.json';

export function NavLinks() {
    const lang = useStore(language);
    const t = (key) => translations[lang][key] || key;

    return (
        <nav className="main-nav">
            <a href="/#projects">{t('nav_projects')}</a>
            <a href="/#about">{t('nav_about')}</a>
            <a href="/cv.pdf" target="_blank">CV</a>
            <a href="mailto:clownface471@gmail.com" className="contact-button">{t('nav_contact')}</a>
        </nav>
    );
}