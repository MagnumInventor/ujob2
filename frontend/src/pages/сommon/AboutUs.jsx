// About Us
import React from "react";
import Layout from '../../components/Layout';
import styles from '../../styles/home/About.module.css';

const About = () => {
  return (
    <Layout>
      <div className={styles["about-us"]}>
        <section className={styles.hero}>
          <h1>Про нас</h1>
          <p>З'єднуємо таланти з можливостями в Україні</p>
        </section>

        <section className={styles.mission}>
          <h2>Наша місія</h2>
          <p>
            У Ujob ми прагнемо революціонізувати ринок праці в Україні, створюючи платформу, яка безперешкодно
            з'єднує талановитих людей з інноваційними компаніями. Наша місія — сприяти економічному зростанню, зменшити
            рівень безробіття та сприяти розвитку кваліфікованої робочої сили по всій країні.
          </p>
        </section>

        <section className={styles.values}>
          <h2>Наші цінності</h2>
          <div className={styles["values-grid"]}>
            <div className={styles["value-item"]}>
              <h3>Інновації</h3>
              <p>Ми постійно прагнемо покращувати нашу платформу та сервіси, приймаючи нові технології та ідеї.</p>
            </div>
            <div className={styles["value-item"]}>
              <h3>Цілісність</h3>
              <p>Ми віримо в прозорість, чесність і етичні практики у всіх наших операціях.</p>
            </div>
            <div className={styles["value-item"]}>
              <h3>Інклюзивність</h3>
              <p>Ми прагнемо створити рівні можливості для всіх, незалежно від фону чи досвіду.</p>
            </div>
            <div className={styles["value-item"]}>
              <h3>Підтримка</h3>
              <p>Ми маємо на меті надати можливості як для шукачів роботи, так і для роботодавців, забезпечуючи їх
                інструментами для успіху.</p>
            </div>
          </div>
        </section>

        <section className={styles.team}>
          <h2>Наша команда</h2>
          <div className={styles["team-grid"]}>
            <div className={styles["team-member"]}>
              <img src="" alt="Член команди 1" />
              <h3>Олександр Маркович</h3>
              <p>Засновник та CEO</p>
            </div>
            <div className={styles["team-member"]}>
              <img src="" alt="Член команди 2" />
              <h3>Катерина Шпак</h3>
              <p>CTO</p>
            </div>
            <div className={styles["team-member"]}>
              <img src="" alt="Член команди 3" />
              <h3>Марко Іванович</h3>
              <p>Керівник відділу операцій</p>
            </div>
          </div>
        </section>

        <section className={styles.instagram}>
          <h2>Слідкуйте за нами в Instagram</h2>
          <p>Будьте в курсі наших новин, подій та історій успіху!</p>
          <div className={styles["instagram-embed"]}>
            {/* Замініть на реальний код вбудовування Instagram */}
            <iframe
              src="https://www.instagram.com/ujob/embed"
              width="320"
              height="440"
              frameBorder="0"
              scrolling="no"
              allowTransparency={true}
            ></iframe>
          </div>
        </section>

        <section className={styles["company-photos"]}>
          <h2>Життя в Ujob</h2>
          <div className={styles["photo-grid"]}>
            <img src="" alt="Фото компанії 1" />
            <img src="" alt="Фото компанії 2" />
            <img src="" alt="Фото компанії 3" />
            <img src="" alt="Фото компанії 4" />
          </div>
        </section>

        <section className={styles.development}>
          <h2>Наш шлях</h2>
          <div className={styles.timeline}>
            <div className={styles["timeline-item"]}>
              <h3>2020</h3>
              <p>Ujob був заснований з метою трансформації ринку праці в Україні</p>
            </div>
            <div className={styles["timeline-item"]}>
              <h3>2021</h3>
              <p>Запущена перша версія платформи, з'єднавши 100+ компаній з талановитими людьми</p>
            </div>
            <div className={styles["timeline-item"]}>
              <h3>2022</h3>
              <p>Розширили наші послуги, включивши оцінку навичок та програми навчання</p>
            </div>
            <div className={styles["timeline-item"]}>
              <h3>2023</h3>
              <p>Досягли етапу з 1000+ успішних працевлаштувань</p>
            </div>
            <div className={styles["timeline-item"]}>
              <h3>2024</h3>
              <p>Продовжуємо інновувати та рости, з планами на розширення в Східній Європі</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;

