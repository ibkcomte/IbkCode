import Navbar from "./Navbar";
import PageOne from "./pageOne/PageOne";
import Skills from "./skills/SkillsSection";
import AboutMe from "./AboutMe/AboutMe";
import Contact from "./contact/Contact";
import ProjectSection from "./project/ProjectSection";
import Footer from "./footer/Footer";
function App() {
  return (
    
    <div className="min-h-screen bg-black dark:bg-black text-slate-900 dark:text-slate-100 transition-colors duration-500">
      <Navbar />
        <PageOne />
        <Skills />
        <AboutMe />
        <ProjectSection />
        <Contact />
      <Footer />
    </div>
  );
}
export default App;