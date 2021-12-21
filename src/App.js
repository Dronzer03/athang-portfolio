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
    window.addEventListener("resize", function(){
      console.log("In event listener") 
      if(document.activeElement.tagName=="INPUT" || document.activeElement.tagName=="TEXTAREA"){
          window.setTimeout(function(){
             document.activeElement.scrollIntoViewIfNeeded();
          },0);
       }
    })
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
