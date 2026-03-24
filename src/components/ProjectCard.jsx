function ProjectCard({ title, description, link, tech, image}) {
    return (
        <div className="project-card"> 
            <img src={image} alt={title} className="project-image" />
            <h3> {title} </h3>
            <p> {description} </p>
            <p className="project-tech"> Tech: {tech} </p>
            <a href={link} target="_blank"  rel="noreferrer">
                <button> View Project</button>
            </a>
        </div>
    )
}
export default ProjectCard;