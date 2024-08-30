import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Skills from './pages/Skills';

const App = () => {
  return (
    <div className="bg-black text-white font-mono">
      <Navbar />
      <div className="p-6">
        <section id="home" className="pt-20"> {/* Add padding here */}
          <Home />
        </section>
        <section id="about" className="pt-30">
          <About />
        </section>
        <section id="skills" className="pt-20">
          <Skills />
        </section>
        <section id="projects" className="pt-20">
          <Projects />
        </section>
        <section id="contact" className="pt-20">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default App;
