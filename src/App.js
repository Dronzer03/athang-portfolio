import "./App.css";
import {useEffect} from 'react';
import HomePage from "./Components/Home/HomePage";
import About from "./Components/About/About";
import SideIcons from "./Components/SideIcons";
import Experience from "./Components/Experience/Experience"
import Education from "./Components/Education/Education";
import Contact from "./Components/Contact/Contact";
import ContactForm from "./Components/Contact/ContactForm";

function App() {

  useEffect(() => {
    document.title = "Athang"
    if(/Android */.test(navigator.appVersion)){
      window.addEventListener("resize", function(){
         if(document.activeElement.tagName=="input" || document.activeElement.tagName=="textarea"){
            window.setTimeout(function(){
               document.activeElement.scrollIntoViewIfNeeded();
            },0);
         }
      })
   }
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
