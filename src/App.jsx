import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App(){
  return(
    <div className="bg-white min-h-screen">
      <Navbar/>
      <main className="max-w-3xl mx-auto px-6"></main>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>    
  );
}

export default App;
