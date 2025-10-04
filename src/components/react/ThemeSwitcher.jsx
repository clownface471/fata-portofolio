import { useEffect, useState } from 'preact/hooks';

const SunIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm12.75 0a.75.75 0 0 0-.75-.75h-2.25a.75.75 0 0 0 0 1.5h2.25a.75.75 0 0 0 .75-.75ZM12 18.75a.75.75 0 0 0 .75.75v2.25a.75.75 0 0 0-1.5 0v-2.25a.75.75 0 0 0 .75-.75ZM4.5 12a.75.75 0 0 1-.75-.75H1.5a.75.75 0 0 1 0-1.5h2.25a.75.75 0 0 1 .75.75ZM17.657 6.343a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM6.343 17.657a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM18.717 17.657a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM5.283 6.343a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z"/></svg>;
const MoonIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69a.75.75 0 0 1 .981.981A10.503 10.503 0 0 1 12 22.5C6.202 22.5 1.5 17.798 1.5 12A10.503 10.503 0 0 1 2.69 6.538a.75.75 0 0 1 .819-.162l4.942 1.352a.75.75 0 0 0 .633-.633z" clipRule="evenodd"/></svg>;

export function ThemeSwitcher() {
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        const initialTheme = (() => {
            if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
                return localStorage.getItem('theme');
            }
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return 'dark';
            }
            return 'light';
        })();
        setTheme(initialTheme);
    }, []); 

    useEffect(() => {
        if (theme === null) return; 

        const root = document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    if (theme === null) {
        return null;
    }

    return (
        <button className="theme-toggle" onClick={toggleTheme} title="Ganti tema">
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </button>
    );
}