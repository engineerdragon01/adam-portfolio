import React, { useState } from 'react';

function ProjectCarousel({ projects, onProjectClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const goToProject = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="project-carousel">
      <div className="carousel-container">
        <button className="carousel-btn carousel-btn-prev" onClick={prevProject} aria-label="Previous project">
          <i className="fas fa-chevron-left"></i>
        </button>
        
        <div className="carousel-slide">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
              onClick={() => onProjectClick(project.id)}
            >
              <img src={project.image} alt={project.title} />
              <div className="info">
                <h3>{project.title}</h3>
                <div className="cat">{project.category}</div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="carousel-btn carousel-btn-next" onClick={nextProject} aria-label="Next project">
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
      
      <div className="carousel-indicators">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToProject(index)}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectCarousel;
