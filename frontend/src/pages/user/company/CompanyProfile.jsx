"use client"

import { useState } from "react"
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa"
import "../../../styles/user/company/CompanyProfile.css"

const CompanyProfile = () => {
  const [companyInfo, setCompanyInfo] = useState({
    name: "TechInnovate Solutions",
    description: "Leading the way in innovative tech solutions",
    type: "start-up",
    founded: "2020",
    location: "Kyiv, Ukraine",
  })

  const [vacancies, setVacancies] = useState([
    { id: 1, title: "Frontend Developer", description: "Experienced in React" },
    { id: 2, title: "UX Designer", description: "Passionate about user-centric design" },
  ])

  const [requirements, setRequirements] = useState([
    { id: 1, type: "Language", description: "English B2 or higher" },
    { id: 2, type: "Age", description: "18+" },
    { id: 3, type: "Skills", description: "Problem-solving, teamwork" },
  ])

  const [statistics, setStatistics] = useState({
    employeesCount: 50,
    projectsCompleted: 30,
    clientSatisfaction: "95%",
  })

  const handleInfoEdit = () => {
    // TODO: Implement edit functionality
    console.log("Edit company info")
  }

  const handleVacancyAdd = () => {
    // TODO: Implement add vacancy functionality
    console.log("Add new vacancy")
  }

  const handleVacancyEdit = (id) => {
    // TODO: Implement edit vacancy functionality
    console.log("Edit vacancy", id)
  }

  const handleVacancyDelete = (id) => {
    // TODO: Implement delete vacancy functionality
    console.log("Delete vacancy", id)
  }

  const handleRequirementAdd = () => {
    // TODO: Implement add requirement functionality
    console.log("Add new requirement")
  }

  const handleRequirementEdit = (id) => {
    // TODO: Implement edit requirement functionality
    console.log("Edit requirement", id)
  }

  const handleRequirementDelete = (id) => {
    // TODO: Implement delete requirement functionality
    console.log("Delete requirement", id)
  }

  const handleStatisticsEdit = () => {
    // TODO: Implement edit statistics functionality
    console.log("Edit statistics")
  }

  return (
    <div className="company-profile">
      <section className="company-info">
        <h1>{companyInfo.name}</h1>
        <p>{companyInfo.description}</p>
        <ul>
          <li>
            <strong>Type:</strong> {companyInfo.type}
          </li>
          <li>
            <strong>Founded:</strong> {companyInfo.founded}
          </li>
          <li>
            <strong>Location:</strong> {companyInfo.location}
          </li>
        </ul>
        <button onClick={handleInfoEdit} className="edit-button">
          <FaEdit /> Edit Info
        </button>
      </section>

      <section className="vacancies">
        <h2>Open Positions</h2>
        <ul>
          {vacancies.map((vacancy) => (
            <li key={vacancy.id}>
              <h3>{vacancy.title}</h3>
              <p>{vacancy.description}</p>
              <div className="action-buttons">
                <button onClick={() => handleVacancyEdit(vacancy.id)}>
                  <FaEdit />
                </button>
                <button onClick={() => handleVacancyDelete(vacancy.id)}>
                  <FaTrash />
                </button>
              </div>
            </li>
          ))}
        </ul>
        <button onClick={handleVacancyAdd} className="add-button">
          <FaPlus /> Add Vacancy
        </button>
      </section>

      <section className="requirements">
        <h2>Work Requirements</h2>
        <ul>
          {requirements.map((req) => (
            <li key={req.id}>
              <strong>{req.type}:</strong> {req.description}
              <div className="action-buttons">
                <button onClick={() => handleRequirementEdit(req.id)}>
                  <FaEdit />
                </button>
                <button onClick={() => handleRequirementDelete(req.id)}>
                  <FaTrash />
                </button>
              </div>
            </li>
          ))}
        </ul>
        <button onClick={handleRequirementAdd} className="add-button">
          <FaPlus /> Add Requirement
        </button>
      </section>

      <section className="statistics">
        <h2>Company Statistics</h2>
        <ul>
          <li>
            <strong>Employees:</strong> {statistics.employeesCount}
          </li>
          <li>
            <strong>Projects Completed:</strong> {statistics.projectsCompleted}
          </li>
          <li>
            <strong>Client Satisfaction:</strong> {statistics.clientSatisfaction}
          </li>
        </ul>
        <button onClick={handleStatisticsEdit} className="edit-button">
          <FaEdit /> Edit Statistics
        </button>
      </section>
    </div>
  )
}

export default CompanyProfile

