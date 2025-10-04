export function Hero({ tagline, intro, ...props }) {
    return (
        <section className="hero" {...props}>
            <div className="image-content" data-animated>
                <img src="/images/profile.jpg" alt="Foto Fata Adzaky Muhammad" className="profile-img"/>
            </div>
            <div className="text-content" data-animated>
                <h1 className="name">Fata Adzaky Muhammad</h1>
                <p className="tagline">{tagline}</p>
                <p className="intro">{intro}</p>
                <div className="social-links">
                    <a href="https://github.com/clownface471" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/fata-adzaky-muhammad-02a472324/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://clownface.medium.com" target="_blank" rel="noopener noreferrer">Medium</a>
                    <a href="mailto:clownface471@gmail.com">Email</a>
                </div>
            </div>
        </section>
    );
}