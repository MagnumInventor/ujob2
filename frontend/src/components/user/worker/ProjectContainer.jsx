import React, { useState } from "react";
import styles from "../../../styles/user/worker/ProjectsCatalogue.module.css";

const ProjectCatalogue = () => {
  const [projects, setProjects] = useState([
    {
      name: "Project 1",
      description: "This is a description for Project 1",
      vacancies: ["Developer", "Designer", "Project Manager"],
      team: [
        { name: "John Doe", image: "/path/to/john.jpg" },
        { name: "Jane Smith", image: "/path/to/jane.jpg" },
      ],
    },
    {
      name: "Project 2",
      description: "This is a description for Project 2",
      vacancies: ["Marketing Specialist", "Content Writer"],
      team: [
        { name: "Alice Johnson", image: "/path/to/alice.jpg" },
        { name: "Bob Williams", image: "/path/to/bob.jpg" },
      ],
    },
  ]);

  const [activeVacancies, setActiveVacancies] = useState({});

  const toggleVacancies = (projectName) => {
    setActiveVacancies((prev) => ({
      ...prev,
      [projectName]: !prev[projectName],
    }));
  };

  return (
    <div className={styles.container}>
      <div id="projects-container" className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardHeader}>
              <h2>{project.name}</h2>
            </div>
            <div className={styles.vacancyInfo}>
              <h3>Опис:</h3>
              <p>{project.description}</p>
            </div>
            <button
              className={styles.openVacancyButton}
              onClick={() => toggleVacancies(project.name)}
            >
              <span
                className={`${styles.checkLeft} ${
                  activeVacancies[project.name] ? styles.active : ""
                }`}
              >
                &#11013;
              </span>
              ВІЛЬНІ ПОСАДИ
              <span
                className={`${styles.checkRight} ${
                  activeVacancies[project.name] ? styles.active : ""
                }`}
              >
                &#11013;
              </span>
            </button>
            <div
              className={`${styles.cardBody} ${
                activeVacancies[project.name] ? styles.active : ""
              }`}
            >
              {project.vacancies.map((role, roleIndex) => (
                <div key={roleIndex} className={styles.role}>
                  {role}
                </div>
              ))}
            </div>
            <div className={styles.team}>
              <h3>Учасники проекту:</h3>
              {project.team.map((member, memberIndex) => (
                <div key={memberIndex} className={styles.teamMember}>
                  {member.name}{" "}
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt="member-image"
                  />
                </div>
              ))}
            </div>
            <button className={styles.viewButton}>ДЕТАЛЬНІШЕ</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCatalogue;
