import './App.css';
import Navbar from './containers/Navbar/Navbar';
import WelcomeSection from './containers/WelcomeSection/WelcomeSection';
import ProjectsSection from './containers/ProjectsSection/ProjectsSection';
import SkillsSection from './containers/SkillsSection/SkillsSection';
import ExperienceSection from './containers/ExperienceSection/ExperienceSection';
import AboutSection from './containers/AboutSection/AboutSection';
import ContactSection from './containers/ContactSection/ContactSection';

function App() {
  return (
    <main>
      <Navbar/>
      <WelcomeSection/>
      <ProjectsSection/>
      <SkillsSection/>
      <ExperienceSection/>
      <AboutSection/>
      <ContactSection/>
    </main>
  );
}

export default App;
