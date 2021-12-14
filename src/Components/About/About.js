import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;
    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      &:before {
        content: "▹";
        position: absolute;
        left: 0;
        color: aliceblue;
        line-height: 12px;
        top: 6px;
      }
    }
  }
`;

function About() {
  const aboutRef = useRef();
  const aboutTextRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      aboutRef.current,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 2,
        ease: "none",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
        aboutTextRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 2,
          ease: "none",
          scrollTrigger: {
            trigger: aboutTextRef.current,
            start: "top center",
            end: "bottom center+=190",
            toggleActions: "play none none reverse",
            scrub: true,
          },
        }
      );
  });

  return (
    <div className="about" id="about">
      <div className="about-content">
        <div className="about-title-div" ref={aboutRef}>
          <span className="about-num" >
            01.
          </span>
          <span className="about-title">
            {" "}
            About Me{" "}
          </span>
        </div>
        <div className="about-text" ref={aboutTextRef}>
          <p>
            Hey! I am Athang Kulkarni, a Software Engineer from Pune. I
            completed my Engineering from{" "}
            <span className="white-text">MIT College of Engineering </span>
            in Computer Science.{" "}
          </p>
          <p>
            After my graduation, I joined{" "}
            <span className="eQ">eQ Technologic</span> as a Full Stack
            Developer. I worked at eQ for 2 years where I learnt and worked on
            various frontend and backend technologies. I was also part of the eQ
            Cricket Team.
          </p>
          <p>
            {" "}
            Then I switched my paths and joined{" "}
            <span className="hsbc-text">HSBC</span> as a Software Engineer where
            I am working currently. Here are the various technologies I have
            worked on:
          </p>
          <StyledText>
            <ul className="skills-list">
              <li>Java - Spring</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Bootstrap</li>
              <li>Rest APIs</li>
              <li>Kendo UI</li>
            </ul>
          </StyledText>
        </div>
      </div>
    </div>
  );
}

export default About;
