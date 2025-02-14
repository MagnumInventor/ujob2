"use client"

import { useState } from "react"
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa"
import "../styles/UserProfile.css"

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState({
    name: "Oleksandr Petrenko",
    photo: "/path/to/photo.jpg",
    skills: ["JavaScript", "React", "Node.js", "UI/UX Design"],
  })

  const [experience, setExperience] = useState([
    { id: 1, title: "Frontend Developer", company: "TechCo", period: "2019-2021" },
    { id: 2, title: "UI Designer", company: "DesignStudio", period: "2017-2019" },
  ])

  const [education, setEducation] = useState([
    { id: 1, degree: "Bachelor in Computer Science", institution: "Kyiv Polytechnic Institute", year: "2017" },
  ])

  const [certificates, setCertificates] = useState([
    { id: 1, name: "React Developer Certification", issuer: "Udacity", year: "2020" },
  ])

  const [schedule, setSchedule] = useState({
    form: "freelance",
    availability: [
      { day: "Monday", hours: "9:00 - 17:00" },
      { day: "Tuesday", hours: "9:00 - 17:00" },
      { day: "Wednesday", hours: "9:00 - 17:00" },
      { day: "Thursday", hours: "9:00 - 17:00" },
      { day: "Friday", hours: "9:00 - 17:00" },
    ],
  })

  const handleInfoEdit = () => {
    // TODO: Implement edit functionality
    console.log("Edit user info")
  }

  const handleExperienceAdd = () => {
    // TODO: Implement add experience functionality
    console.log("Add new experience")
  }

  const handleExperienceEdit = (id) => {
    // TODO: Implement edit experience functionality
    console.log("Edit experience", id)
  }

  const handleExperienceDelete = (id) => {
    // TODO: Implement delete experience functionality
    console.log("Delete experience", id)
  }

  const handleEducationAdd = () => {
    // TODO: Implement add education functionality
    console.log("Add new education")
  }

  const handleEducationEdit = (id) => {
    // TODO: Implement edit education functionality
    console.log("Edit education", id)
  }

  const handleEducationDelete = (id) => {
    // TODO: Implement delete education functionality
    console.log("Delete education", id)
  }

  const handleCertificateAdd = () => {
    // TODO: Implement add certificate functionality
    console.log("Add new certificate")
  }

  const handleCertificateEdit = (id) => {
    // TODO: Implement edit certificate functionality
    console.log("Edit certificate", id)
  }

  const handleCertificateDelete = (id) => {
    // TODO: Implement delete certificate functionality
    console.log("Delete certificate", id)
  }

  const handleScheduleEdit = () => {
    // TODO: Implement edit schedule functionality
    console.log("Edit schedule")
  }

  return (
    <div className="user-profile">
      <section className="user-info">
        <img src={userInfo.photo || "/placeholder.svg"} alt={userInfo.name} className="user-photo" />
        <h1>{userInfo.name}</h1>
        <div className="skills">
          {userInfo.skills.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
        <button onClick={handleInfoEdit} className="edit-button">
          <FaEdit /> Edit Info
        </button>
      </section>

      <section className="experience-education">
        <h2>Experience</h2>
        <ul>
          {experience.map((exp) => (
            <li key={exp.id}>
              <h3>{exp.title}</h3>
              <p>
                {exp.company} | {exp.period}
              </p>
              <div className="action-buttons">
                <button onClick={() => handleExperienceEdit(exp.id)}>
                  <FaEdit />
                </button>
                <button onClick={() => handleExperienceDelete(exp.id)}>
                  <FaTrash />
                </button>
              </div>
            </li>
          ))}
        </ul>
        <button onClick={handleExperienceAdd} className="add-button">
          <FaPlus /> Add Experience
        </button>

        <h2>Education</h2>
        <ul>
          {education.map((edu) => (
            <li key={edu.id}>
              <h3>{edu.degree}</h3>
              <p>
                {edu.institution} | {edu.year}
              </p>
              <div className="action-buttons">
                <button onClick={() => handleEducationEdit(edu.id)}>
                  <FaEdit />
                </button>
                <button onClick={() => handleEducationDelete(edu.id)}>
                  <FaTrash />
                </button>
              </div>
            </li>
          ))}
        </ul>
        <button onClick={handleEducationAdd} className="add-button">
          <FaPlus /> Add Education
        </button>
      </section>

      <section className="certificates">
        <h2>Certificates</h2>
        <ul>
          {certificates.map((cert) => (
            <li key={cert.id}>
              <h3>{cert.name}</h3>
              <p>
                {cert.issuer} | {cert.year}
              </p>
              <div className="action-buttons">
                <button onClick={() => handleCertificateEdit(cert.id)}>
                  <FaEdit />
                </button>
                <button onClick={() => handleCertificateDelete(cert.id)}>
                  <FaTrash />
                </button>
              </div>
            </li>
          ))}
        </ul>
        <button onClick={handleCertificateAdd} className="add-button">
          <FaPlus /> Add Certificate
        </button>
      </section>

      <section className="schedule">
        <h2>Work Schedule</h2>
        <p>
          <strong>Form:</strong> {schedule.form}
        </p>
        <ul>
          {schedule.availability.map((day, index) => (
            <li key={index}>
              <strong>{day.day}:</strong> {day.hours}
            </li>
          ))}
        </ul>
        <button onClick={handleScheduleEdit} className="edit-button">
          <FaEdit /> Edit Schedule
        </button>
      </section>
    </div>
  )
}

export default UserProfile

