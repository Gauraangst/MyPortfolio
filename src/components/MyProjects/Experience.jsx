import React from "react";
import "../../style.css";

const experienceData = [
  {
    role: "Web Developer Intern",
    company: "Tech Solutions Pvt Ltd",
    period: "June 2025 - Present",
    description: "Worked on developing responsive web applications using React.js, Tailwind CSS, and Node.js. Implemented interactive UI components and optimized performance."
  },
  {
    role: "Frontend Developer Intern",
    company: "Creative Labs",
    period: "Jan 2025 - May 2025",
    description: "Built reusable React components and integrated APIs. Improved website accessibility and enhanced user experience."
  },
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    period: "2024 - 2025",
    description: "Designed and developed portfolio websites for clients using modern web technologies with responsive design."
  }
];

const Experience = () => {
  return (
    <section id="experience-section">
      <h1>Experience</h1>
      <div className="experience-container">
        {experienceData.map((exp, index) => (
          <div className="experience-card" key={index}>
            <div className="experience-period">{exp.period}</div>
            <h3>{exp.role}</h3>
            <h4>{exp.company}</h4>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
