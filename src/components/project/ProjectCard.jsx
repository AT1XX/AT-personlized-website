// src/components/project/ProjectCard.jsx
import React from 'react';
import './project.css';

const ProjectCard = ({ imgUrl, date, title, description, technologies, githubLink, demoLink }) => {
  return (
    <div className="at__blog-container_article">
      <div className="at__blog-container_article-image">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="at__blog-container_article-content">
        <div>
          <p className="project-date">{date}</p>
          <h3 className="project-title">{title}</h3>
          {description && <p className="project-description">{description}</p>}
          {technologies && technologies.length > 0 && (
            <div className="project-tech">
              {technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          )}
        </div>
        <div className="project-links">
          <a href={githubLink} target="_blank" rel="noreferrer" className="project-link github-link">
            <span>GitHub</span> <span className="arrow">→</span>
          </a>
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noreferrer" className="project-link demo-link">
              <span>Live Demo</span> <span className="arrow">→</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;