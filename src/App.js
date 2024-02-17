import About from "./assets/pages/About";
import Contact from "./assets/pages/Contact";
import Home from "./assets/pages/Home";
import Skills from "./assets/pages/Skills";
import Project from "./assets/pages/Project";
import Navbar from "./section/Navbar/Navbar";
import Github from "./assets/pages/Github";
import AnimatedCursorComponent from "./components/card/AnimatedCursorComponent";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Github />
      <Contact />
      <AnimatedCursorComponent/>
    </>
  );
}

export default App;
