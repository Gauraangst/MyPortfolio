import { Header, Hero, About } from "../components";
import MyProjects from "../components/MyProjects/MyProjects";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="cursor"></div>
      <Header />
      <Hero />
      <About />
      <MyProjects />
    </div>
  );
};

export default LandingPage;
