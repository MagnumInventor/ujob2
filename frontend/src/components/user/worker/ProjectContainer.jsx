import React, { useEffect, useState } from 'react';
import style from '../../../styles/user/worker/ProjectsContainer.module.css';
import json from '../../../temporary/catalogue.json'
import catalogue from '../../../../public/data/catalogue.json';


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



// Основний компонент для відображення всіх проектів ../../../temporary/catalogue.json
const ProjectsContainer = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('../../../../public/data/catalogue.json')
      .then((response) => {
        console.log('Response status:', response.status);
        console.log('Response headers:', response.headers);
        return response.text(); // Log response as plain text
      })
      .then((text) => {
        console.log('Fetched content:', text); // Check the fetched content
        const data = JSON.parse(text);
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

