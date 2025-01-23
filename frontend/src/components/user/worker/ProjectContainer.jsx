import React, { useEffect, useState } from 'react';

const ProjectsContainer = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/data/catalogue.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => setProjects(data.map((item) => item.project)))
    .catch((error) => console.error('Error loading JSON data:', error));  
  }, []);

  return (
    <div id="projects-container">
      {projects.map((project, index) => (
        <div key={index}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectsContainer;


