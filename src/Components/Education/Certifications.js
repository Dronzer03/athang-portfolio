import React, {useRef, useEffect} from "react";
import {FaJava, FaReact, FaNodeJs} from 'react-icons/fa'
import './Education.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Certifications() {

  const certs = useRef();
  const content = useRef();

  useEffect(()=>{
    gsap.fromTo(
      certs.current,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 2,
        ease: "none",
        scrollTrigger: {
          trigger: certs.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      content.current,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 2,
        ease: "none",
        scrollTrigger: {
          trigger: content.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
          scrub: true,
        },
      }
    );
  })

  return (
    <div className="certs">
      <div className="cert-title" ref={certs}>
        <span className="cert-text">Certifications</span>
      </div>
      <div className="cert-content" ref={content}>
        <div className="java-1">
          <FaJava color="white" /> Learning Spring with Spring Boot
        </div>
        <div className="java-1">
          <FaJava color="white" /> Spring Boot 2.0 Essential Training
        </div>
        <div className="java-1">
          <FaReact color="white" /> Learn React
        </div>
        <div className="java-1">
          <FaReact color="white" /> React : The Complete Course
        </div>
        <div className="java-1">
          <FaNodeJs color="white" /> The Complete Node.js Developer Course
        </div>
      </div>
    </div>
  );
}

export default Certifications;
