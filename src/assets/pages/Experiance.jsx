import React, { useState } from "react";
import styles from "./Experaince.module.css";
import cleanKoding from "../header-logo.png";
// Replace with actual logo paths

const Experience = () => {
  const experienceData = [
    {
      logo: cleanKoding,
      companyName: "Clean Koding",
      role: "Frontend Developer Intern",
      duration: "May 2024 - October 2024",
      responsibilities: [
        `Developed and maintained a Chrome extension for
        Gmail with task management and reminders.`,
        `Implemented user interfaces and integrated
        functionalities using React and TypeScript, focusing on
        high performance and scalability.`,
        `Collaborated with cross-functional teams to ensure
        seamless integration and functionality of features,
        aligning with the project goals.`,
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "TailwindCSS",
        "NodeJS",
        "ExpressJS",
        "React-Native",
        "Git",
        "REST APIs",
        "TypeScript",
        "Material UI",
      ],
      briefDescription: `As a Frontend Developer Intern at Clean koding, I focused on building responsive and scalable user interfaces from scratch.
      My role involved designing UI components from the ground up using HTML, CSS, and JavaScript,react.js,typescipt,material ui ensuring that the interfaces were optimized for performance and maintained cross-browser compatibility.
      I collaborated with backend teams to integrate RESTful APIs for dynamic data handling and utilized materail ui to streamline styling.`,
      work: "https://cleankoding.com/",
    },
  ];

  const [selectedRow, setSelectedRow] = useState(null);

  const handleClick = (index) => {
    setSelectedRow(index);
  };

  const handleCloseModal = () => {
    setSelectedRow(null);
  };

  return (
    <div className={styles.experienceContainer} id="ex_section">
      <h2 className={styles.heading}>Experience</h2>
      <p className={styles.subheading}>
        Click on a row for more detailed information about my work experience.
      </p>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead className={styles.tableHeader}>
            <tr>
              <th className={styles.tableData}>Logo</th>
              <th className={styles.tableData}>Role</th>
              <th className={styles.tableData}>Duration</th>
            </tr>
          </thead>
          <tbody>
            {experienceData.map((item, index) => (
              <tr
                key={index}
                onClick={() => handleClick(index)}
                className={styles.tableRow}
              >
                <td className={styles.tableData}>
                  <div className={styles.logoContainer}>
                    <img
                      src={item.logo}
                      alt={`${item.companyName} Logo`}
                      className={styles.logoImage}
                    />
                  </div>
                </td>
                <td className={styles.tableData}>{item.role}</td>
                <td className={styles.tableData}>{item.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedRow !== null && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button onClick={handleCloseModal} className={styles.modalCloseBtn}>
              &times;
            </button>
            <div className={styles.modalBody}>
              <div className={styles.modalCompanyLogo}>
                <img
                  src={experienceData[selectedRow].logo}
                  alt={`${experienceData[selectedRow].companyName} Logo`}
                  className={styles.logoImage}
                />
              </div>

              <div className={styles.companyInfo}>
                <h3 className={styles.companyName}>
                  {experienceData[selectedRow].companyName}
                </h3>
                <p className={styles.role}>
                  {experienceData[selectedRow].role}
                </p>
                <p className={styles.duration}>
                  {experienceData[selectedRow].duration}
                </p>
              </div>

              <div className={styles.briefDescription}>
                <p>{experienceData[selectedRow].briefDescription}</p>
              </div>

              <h4>Key Responsibilities:</h4>
              <ul className={styles.responsibilitiesList}>
                {experienceData[selectedRow].responsibilities.map(
                  (resp, idx) => (
                    <li key={idx}>{resp}</li>
                  )
                )}
              </ul>

              <h4>Technologies Used:</h4>
              <div className={styles.technologiesContainer}>
                {experienceData[selectedRow].technologies.map((tech, idx) => (
                  <span key={idx} className={styles.technologyBadge}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className={styles.workLink}>
                <a
                  href={experienceData[selectedRow].work}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Company Website
                </a>
              </div>

              <button onClick={handleCloseModal} className={styles.closeButton}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
