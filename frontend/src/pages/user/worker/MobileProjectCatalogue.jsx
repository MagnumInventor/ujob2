import React, { useState, useRef, useEffect } from "react";
import styles from "../../../styles/user/worker/MobileProjectCatalogue.module.css";

const MobileProjectCatalogue = () => {
  const [projects, setProjects] = useState([
    {
      name: "Проєкт 1",
      description: "Це опис для Проєкту 1",
      vacancies: ["Розробник", "Дизайнер", "Проєктний Менеджер"],
      team: [
        { name: "Іван Довгий", image: "/path/to/john.jpg" },
        { name: "Анна Черненко", image: "/path/to/jane.jpg" },
      ],
    },
    {
      name: "Проєкт 2",
      description: "Це опис для Проєкту 2",
      vacancies: ["Спеціаліст з маркетингу", "Копірайтер"],
      team: [
        { name: "Аліса Джонсон", image: "/path/to/alice.jpg" },
        { name: "Боб Вільямс", image: "/path/to/bob.jpg" },
      ],
    },
  ]);
  

  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = containerRef.current.scrollTop;
        const cardHeight = containerRef.current.clientHeight;
        const newIndex = Math.round(scrollPosition / cardHeight);
        setCurrentIndex(newIndex);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className={styles.mobileContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>UJOB</h1>
        <button className={styles.burgerMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <div className={styles.projectsContainer} ref={containerRef}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <h2 className={styles.projectName}>{project.name}</h2>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.vacancies}>
              <h3>Вільні посади:</h3>
              {project.vacancies.map((vacancy, vIndex) => (
                <div key={vIndex} className={styles.vacancy}>
                  {vacancy}
                </div>
              ))}
            </div>
            <div className={styles.team}>
              <h3>Команда:</h3>
              {project.team.map((member, mIndex) => (
                <div key={mIndex} className={styles.teamMember}>
                  <img src={member.image || "/placeholder.svg"} alt={member.name} />
                  <span>{member.name}</span>
                </div>
              ))}
            </div>
            <button className={styles.applyButton}>Подати заявку</button>
          </div>   ))}
      </div>


    </div>
  );
};

export default MobileProjectCatalogue;
