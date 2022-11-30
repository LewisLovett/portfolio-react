import './App.css';
import Navbar from './components/Navbar/Navbar';
import Welcome from './components/Welcome/Welcome';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <main>
      <Navbar/>
      <Welcome/>
      <Projects/>
      <Skills/>
      <Experience/>
      <About/>
      <Contact/>
    </main>
  );
}

export default App;
