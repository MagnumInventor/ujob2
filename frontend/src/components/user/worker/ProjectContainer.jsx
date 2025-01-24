import React, { useEffect, useState } from 'react';

const ProjectsContainer = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('./data/catalogue.json') //     Оновлено шлях до JSON-файлу
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setProjects(data.map((item) => item.project))) // Витягуємо `project` з кожного об'єкта
      .catch((error) => console.error('Error loading JSON data:', error));
  }, []);

  return (
    <div id="projects-container">
      {projects.map((project, index) => (
        <div key={index} className="card">
          <div className="card-header">
            <h2>{project.name}</h2>
          </div>
          <div className="vacancy-info">
            <h3>Опис:</h3>
            <p>{project.description}</p>
          </div>
          <button
            className="open-vacancy-button"
            onClick={() => {
              const vacancies = document.getElementById(`vacancies-${index}`);
              vacancies.classList.toggle('active');
            }}
          >
            <span className="check-left">&#11013;</span> ВІЛЬНІ ПОСАДИ <span className="check-right">&#11013;</span>
          </button>
          <div id={`vacancies-${index}`} className="card-body">
            {project.vacancies.map((role, roleIndex) => (
              <div key={roleIndex} className="role">
                {role}
              </div>
            ))}
          </div>
          <div className="team">
            <h3>Учасники проекту:</h3>
            {project.team.map((member, memberIndex) => (
              <div key={memberIndex} className="team-member">
                <span>{member.name}</span>
                <img src={member.image} alt={`${member.name}`} />
              </div>
            ))}
          </div>
          <button className="view-button">ДЕТАЛЬНІШЕ</button>
        </div>
      ))}
    </div>
  );
};

export default ProjectsContainer;



