import "./App.css";
import HomePage from "./Components/Home/HomePage";
import About from "./Components/About/About";
import SideIcons from "./Components/SideIcons";
import Experience from "./Components/Experience/Experience"
import Education from "./Components/Education/Education";
import Contact from "./Components/Contact/Contact";

function App() {

  return (
    <div className="App">
      <HomePage />
      <About />
      <SideIcons />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
