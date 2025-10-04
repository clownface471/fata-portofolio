export function ProjectCard({ title, description, githubUrl, imageUrl, tags, ...props }) {
    return (
        <a href={githubUrl} className="card-link" target="_blank" rel="noopener noreferrer" {...props}>
            <div className="card">
                <div className="image-container">
                    <img src={imageUrl} alt={`Screenshot dari ${title}`} loading="lazy" />
                </div>
                <div className="content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className="tags">
                        {tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                    </div>
                    <span className="link">
                        Lihat Kode di GitHub &rarr;
                    </span>
                </div>
            </div>
        </a>
    );
}