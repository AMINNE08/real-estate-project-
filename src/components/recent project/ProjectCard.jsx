import './ProjectCard.css'; // CSS for card styling

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <img src={project.image} alt={project.title} className="project-image" />
    <h3>{project.title}</h3>
    <p>{project.description}</p>
    <div className="project-rating">
      <span>⭐ {project.rating}</span>
    </div>
  </div>
);

export default ProjectCard;
