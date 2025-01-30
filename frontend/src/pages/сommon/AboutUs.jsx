// About Us
import React from "react";
import Layout from '../../components/Layout';
import styles from '../../styles/home/About.module.css';

const About = () => {
  return (
    <Layout>
      <div className="about-us">
        <section className="hero">
          <h1>About Ujob</h1>
          <p>Connecting talent with opportunity in Ukraine</p>
        </section>

        <section className="mission">
          <h2>Our Mission</h2>
          <p>
            At Ujob, we're dedicated to revolutionizing the job market in Ukraine by creating a platform that seamlessly
            connects talented individuals with innovative companies. Our mission is to foster economic growth, reduce
            unemployment, and contribute to the development of a thriving, skilled workforce across the country.
          </p>
        </section>

        <section className="values">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Innovation</h3>
              <p>We constantly strive to improve our platform and services, embracing new technologies and ideas.</p>
            </div>
            <div className="value-item">
              <h3>Integrity</h3>
              <p>We believe in transparency, honesty, and ethical practices in all our operations.</p>
            </div>
            <div className="value-item">
              <h3>Inclusivity</h3>
              <p>We're committed to creating equal opportunities for all, regardless of background or experience.</p>
            </div>
            <div className="value-item">
              <h3>Empowerment</h3>
              <p>We aim to empower both job seekers and employers, providing them with the tools they need to succeed.</p>
            </div>
          </div>
        </section>

        <section className="team">
          <h2>Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src="" alt="Team Member 1" />
              <h3>Олександр Маркович</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <img src="" alt="Team Member 2" />
              <h3>Катерина Шпак</h3>
              <p>CTO</p>
            </div>
            <div className="team-member">
              <img src="" alt="Team Member 3" />
              <h3>Марко Іванович</h3>
              <p>Head of Operations</p>
            </div>
          </div>
        </section>

        <section className="instagram">
          <h2>Follow Us on Instagram</h2>
          <p>Stay updated with our latest news, events, and success stories!</p>
          <div className="instagram-embed">
            {/* Replace this with your actual Instagram embed code */}
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

        <section className="company-photos">
          <h2>Life at Ujob</h2>
          <div className="photo-grid">
            <img src="" alt="Company Photo 1" />
            <img src="" alt="Company Photo 2" />
            <img src="" alt="Company Photo 3" />
            <img src="" alt="Company Photo 4" />
          </div>
        </section>

        <section className="development">
          <h2>Our Journey</h2>
          <div className="timeline">
            <div className="timeline-item">
              <h3>2020</h3>
              <p>Ujob was founded with a vision to transform Ukraine's job market</p>
            </div>
            <div className="timeline-item">
              <h3>2021</h3>
              <p>Launched our first version of the platform, connecting 100+ companies with talented individuals</p>
            </div>
            <div className="timeline-item">
              <h3>2022</h3>
              <p>Expanded our services to include skills assessment and training programs</p>
            </div>
            <div className="timeline-item">
              <h3>2023</h3>
              <p>Reached a milestone of 1000+ successful job placements</p>
            </div>
            <div className="timeline-item">
              <h3>2024</h3>
              <p>Continuing to innovate and grow, with plans to expand across Eastern Europe</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
