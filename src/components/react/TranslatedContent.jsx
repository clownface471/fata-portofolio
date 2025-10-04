import { useStore } from '@nanostores/preact';
import { language } from '../../i18n/store';
import translations from '../../i18n/translations.json';
import { Hero } from './Hero.jsx';
import { ProjectCard } from './ProjectCard.jsx';

const PROJECTS = [
    { id: 'smkit', title_id: 'SMK-IT Portofolio (Laravel)', title_en: 'SMK-IT Portfolio (Laravel)', tags: ["Laravel", "PHP", "Tailwind CSS", "MySQL", "Web App"], githubUrl: "https://github.com/clownface471/smkit-portofolio", imageUrl: "/images/project-smkit.png" },
    { id: 'archi', title_id: 'ARCHI note (Flutter AI Notes)', title_en: 'ARCHI note (Flutter AI Notes)', tags: ["Flutter", "Firebase", "GetX", "Google AI", "Mobile App"], githubUrl: "https://github.com/clownface471/final-project-sanbercode", imageUrl: "/images/project-archi.png" },
    { id: 'kopi', title_id: 'Dunia Kopi (Flutter E-commerce)', title_en: 'Dunia Kopi (Flutter E-commerce)', tags: ["Flutter", "Firebase", "E-commerce", "Mobile App"], githubUrl: "https://github.com/clownface471/dunia-kopi", imageUrl: "/images/project-kopi.png" },
    { id: 'myop', title_id: 'Myop-Myup (Flutter UMKM App)', title_en: 'Myop-Myup (Flutter UMKM App)', tags: ["Flutter", "GetX", "State Management", "Mobile App"], githubUrl: "https://github.com/clownface471/final-project-flutter", imageUrl: "/images/project-myop.png" },
    { id: 'fitgo', title_id: 'FitGo (Flutter Fitness App)', title_en: 'FitGo (Flutter Fitness App)', tags: ["Flutter", "JSON", "UI/UX", "Mobile App"], githubUrl: "https://github.com/clownface471/fitgo", imageUrl: "/images/project-fitgo.png" },
];

export function TranslatedContent() {
    const lang = useStore(language);
    const t = (key) => translations[lang][key] || key;

    return (
        <>
            <Hero 
                tagline={t('hero_tagline')} 
                intro={t('hero_intro')} 
                data-animated
            />

            <section className="projects" id="projects">
                <h2 data-animated>{t('projects_title')}</h2>
                <div className="project-grid">
                    {PROJECTS.map(project => (
                        <ProjectCard 
                            key={project.id}
                            title={lang === 'id' ? project.title_id : project.title_en}
                            description={t(`project_${project.id}_desc`)}
                            tags={project.tags}
                            githubUrl={project.githubUrl}
                            imageUrl={project.imageUrl}
                            data-animated 
                        />
                    ))}
                </div>
            </section>

            <section className="about" id="about" data-animated>
                <h2>{t('about_title')}</h2>
                <div className="about-content">
                    <p>{t('about_p1')}</p>
                    <p>{t('about_p2')}</p>
                </div>
            </section>

            <section className="cv-section" data-animated>
                <h2>{t('cv_title')}</h2>
                <p>{t('cv_p')}</p>
                <a href="/cv.pdf" className="cv-button" target="_blank" rel="noopener noreferrer">{t('cv_button')}</a>
            </section>
        </>
    );
}