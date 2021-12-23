import React from "react";
import "./HomePage.css";

function HomeContent() {
  return (
    <>
      <div className="initial-text">Hola, I am</div>
      <div className="name-text">Athang Kulkarni.</div>
      <div className="sub-text">I build apps for fun and work.</div>
      <div className="intro-text">
        I am a Software Engineer skilled in Java and REST APIs. I love
        creating websites with React and play around it. Recently discovered
        interest in css-animations.
        Currently I'm focused on building Softwares at <span className="HSBC">HSBC</span>.
      </div>
    </>
  );
}

export default HomeContent;
