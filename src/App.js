import "./App.css";
import {useEffect} from 'react';
import HomePage from "./Components/Home/HomePage";
import About from "./Components/About/About";
import SideIcons from "./Components/SideIcons";
import Experience from "./Components/Experience/Experience"
import Education from "./Components/Education/Education";
import ContactForm from "./Components/Contact/ContactForm";

function App() {

  useEffect(() => {
    document.title = "Athang"
  }, [])

  return (
    <div className="App">
      <HomePage />
      <About />
      <SideIcons />
      <Experience />
      <Education />
      <ContactForm />
    </div>
  );
}

export default App;
