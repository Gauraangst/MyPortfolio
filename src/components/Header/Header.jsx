import { useState } from 'react';
import './Header.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import About from '../About/About';

const Header = () => {

    const [likes, setLikes] = useState(0);
    function handleLikes(){
        setLikes(likes + 1);
    }
    const handleGitHubClick = () =>{
        window.open("https://github.com/Gauraangst", "_blank");
    }
    const handleLinkedInClick = () => {
        window.open("https://www.linkedin.com/in/gauraangthakkar/", "_blank");
    }
    const handleOpenPDF = () => {
    window.open("/GauraangThakkar_Resume.pdf", "_blank"); 
    // "/files/sample.pdf" should be inside your public folder
    }

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  return (
        <div className='container'>
            <div className='headerButtons'>
            <button onClick={() =>{scrollToSection("about")}}>About</button>
            <button onClick={() =>{scrollToSection("projects-section")}}>Projects</button>
            <button onClick={handleOpenPDF}>Resume</button>
            <button onClick={handleLikes}>  
                {likes}
            </button>
            </div>

            <div className='links headerButtons'>
                <button className='github' onClick={handleGitHubClick}><i className="fa-brands fa-github fa-xl"></i></button>
                
                <button className='linkdin' onClick={handleLinkedInClick}><i class="fa-brands fa-linkedin fa-xl"></i></button>
            </div>
            
        </div>
  )
}

export default Header