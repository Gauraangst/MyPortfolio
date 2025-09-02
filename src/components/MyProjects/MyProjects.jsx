import seniorCitizenImg from '../../assets/senior_citizens.webp';
import '../../style.css'
import aquaponicImg from '../../assets/project2.png';
import TeamWriterImg from '../../assets/TeamWriter.jpg'

const Projects = () => {
  const projectData = [
    {
      img: seniorCitizenImg,
      title: "SilverSkills – Incentive-Based Senior Citizen Workplace",
      description: "A platform connecting skilled senior citizens with flexible work opportunities, rewarding contributions through an incentive-based model.",
      tech: "React, Node.js, Express, MongoDB",
      link: "#"
    },
    {
      img: aquaponicImg,
      title: "AgroAqua – Smart Aquaponic Farming App",
      description: "Smart farming app for aquaponics, integrating AI, IoT sensors, and real-time monitoring to improve yield and sustainability.",
      tech: "React Native, Firebase, IoT, AI",
      link: "#"
    },
    {
      img: TeamWriterImg,
      title: "TeamWriter- Collaborative Docs",
      description: "TeamWriter is a a collaborative text editor enabling multiple users to create, edit, and share documents in real time. It provides a minimal yet powerful interface for writing with rich-text formatting, auto-saving, and seamless collaboration.",
      link: "https://github.com/Gauraangst/TeamWriter"
    }
  ];

  return (
    <section id="projects-section">
      <h1>PROJECTS</h1>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="tech-stack"><strong>Tech Stack:</strong> {project.tech}</p>
              <a href={project.link} className="view-btn">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
