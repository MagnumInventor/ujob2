import React, { useEffect, useState } from 'react';
import json from '../../../temporary/catalogue.json';


useEffect(() => {
  setProjects(json.map((item) => item.project));
}, []);

// Компонент для відображення учасників проекту
const Team = ({ team }) => (
  <div className="team">
    <h3>Учасники проекту:</h3>
    {team.map((member, index) => (
      <div key={index} className="team-member">
        {member.name} <img src={member.image} alt="member" />
      </div>
    ))}
  </div>
);

// Компонент для відображення вакансій
const Vacancies = ({ vacancies }) => (
  <div className="card-body">
    {vacancies.map((role, index) => (
      <div key={index} className="role">
        {role}
      </div>
    ))}
  </div>
);

// Основний компонент картки проекту
const ProjectCard = ({ project }) => {
  const [vacanciesActive, setVacanciesActive] = useState(false);

  const toggleVacancies = () => {
    setVacanciesActive(!vacanciesActive);
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2>{project.name}</h2>
      </div>
      <div className="vacancy-info">
        <h3>Опис:</h3>
        <p>{project.description}</p>
      </div>
      <button
        className={`open-vacancy-button ${vacanciesActive ? 'active' : ''}`}
        onClick={toggleVacancies}
      >
        <span className="check-left">&#11013;</span>
        ВІЛЬНІ ПОСАДИ
        <span className="check-right">&#11013;</span>
      </button>
      {vacanciesActive && <Vacancies vacancies={project.vacancies} />}
      <Team team={project.team} />
      <button className="view-button">ДЕТАЛЬНІШЕ</button>
    </div>
  );
};

// Основний компонент для відображення всіх проектів
const ProjectsContainer = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/temporary/catalogue.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setProjects(data.map((item) => item.project));
      })
      .catch((error) => console.error('Error loading JSON data:', error));
  }, []);
  

  return (
    <div id="projects-container">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectsContainer;
