import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Portfolio from "./Components/Portfolio/Portfolio.jsx";
import About from "./Components/About/About.jsx";
import Skill from "./Components/Skills/Skill.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Fotter from "./Components/Footer/Fotter.jsx";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Portfolio/>
      <Skill/>
      <Contact/>
      <Fotter/>
    </div>
  );
}

export default App;
