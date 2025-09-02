import React from "react";
import "../../style.css"

const educationData = [
  {
    degree: "B.Tech in Information Technology",
    institution: "D.J. Sanghvi College of Engineering, Mumbai",
    year: "2024 - Present",
    description: "Currently pursuing first year in IT with focus on Web Development and AI/ML."
  },
  {
    degree: "JEE Mains",
    institution: "Allen Career Institute Nashik",
    year: "2024",
    description: "Scored 97.0 percentile overall in Physics, Chemistry and Maths"
  },
  {
    degree: "Higher Secondary Education",
    institution: "Wisdom High International School, Nashik",
    year: "2022 - 2024",
    description: "Completed Science stream with strong foundation in Mathematics and Computer Science."
  },
  {
    degree: "Secondary Education",
    institution: "Ashoka Universal School, Nashik",
    year: "2012 - 2022",
    description: "Completed high school with top grades and passion about Science."
  }
];

const Education = () => {
  return (
    <section id="education-section">
      <h1>My Education</h1>
      <div className="education-container">
        {educationData.map((edu, index) => (
          <div className="education-card" key={index}>
            <div className="education-year">{edu.year}</div>
            <h3>{edu.degree}</h3>
            <h4>{edu.institution}</h4>
            <p>{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Education;
