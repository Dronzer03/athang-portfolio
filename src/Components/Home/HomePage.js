import React, { useRef, useEffect } from "react";
import "./HomePage.css";
import Welcome from "./Welcome";
import TopNavBar from "../NavBar/TopNavBar";
import HomeContent from "./HomeContent";
import Button from "../Utils/Button";
import { gsap } from "gsap";
import { saveAs } from "file-saver";

function HomePage() {
  const navRef = useRef();
  const contentRef = useRef();
  const navButtonRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 2 },
      "+=5"
    );
    gsap.fromTo(
      contentRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 2 },
      "-=0.5"
    );
    gsap.fromTo(
      navButtonRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 2 },
      "-=0.5"
    );
  });

  const saveFile = () => {
    saveAs(
      "https://drive.google.com/file/d/1UY77vfhMcTxcDc4sCF7NqFHNPuWOf8fl/view?usp=sharing",
      "Athang_Resume.pdf"
    );
  };

  return (
    <>
      <div className="home-page" id="home">
        <div className="welcome-bs">
          <Welcome />
        </div>
        <div className="top-navbar" ref={navRef}>
          <TopNavBar />
        </div>
        <div className="home-content" ref={contentRef}>
          <HomeContent />
        </div>
        <div className="navButtons" ref={navButtonRef}>
          <Button id="resume-button" onClick={saveFile}>
            Click here to download Resume
          </Button>
        </div>
      </div>
    </>
  );
}

export default HomePage;
