import React, { useEffect, useRef } from "react";
import "./Experience.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import persi from "../../persi.png";
import eQ from "../../eQ.jfif";
import hsbc from "../../hsbc.png";

gsap.registerPlugin(ScrollTrigger);

function Experience() {
  const expRef = useRef();
  const persiCardRef = useRef();
  const eQCardRef = useRef();
  const hsbcCardRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      expRef.current,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 2,
        ease: "none",
        scrollTrigger: {
          trigger: expRef.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      persiCardRef.current,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 2,
        ease: "none",
        scrollTrigger: {
          trigger: persiCardRef.current,
          start: "top center",
          end: "bottom center+=199",
          toggleActions: "play none none reverse",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      eQCardRef.current,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 2,
        ease: "none",
        scrollTrigger: {
          trigger: eQCardRef.current,
          start: "top center",
          end: "bottom center+=199",
          toggleActions: "play none none reverse",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      hsbcCardRef.current,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 2,
        ease: "none",
        scrollTrigger: {
          trigger: hsbcCardRef.current,
          start: "top center",
          end: "bottom center+=199",
          toggleActions: "play none none reverse",
          scrub: true,
        },
      }
    );
  });

  return (
    <div className="exp-page" id="exp">
      <div className="exp-content">
        <div className="exp-title" ref={expRef}>
          <span className="exp-num">02. </span>
          <span className="exp-text">Experience</span>
        </div>
        <div className="exp-companies">
          <div className="card" ref={persiCardRef}>
            <div className="box">
              <div className="card-content">
                <div>
                  <img src={persi} className="persi-logo" />
                </div>
                <span className="company-title">
                  Persistent Systems Pvt. Ltd.
                </span>
                <p>
                  <span className="designation">Intern</span>
                  <br />
                  Sep 2017 - Jun 2018
                </p>
                <p className="role-desc">
                  Worked as an intern on project - 'Autonomous Flying Drone'
                  where the drone could calculate path on its own and reach
                  specified destination.
                </p>
              </div>
            </div>
          </div>
          <div className="card" ref={eQCardRef}>
            <div className="box">
              <div className="card-content">
                <div>
                  <img src={eQ} className="persi-logo" />
                </div>
                <span className="company-title">eQ Technologic</span>
                <p>
                  <span className="designation">Software Engineer</span>
                  <br />
                  July 2019 - Aug 2021
                </p>
                <p className="role-desc">
                  Worked on various projects with US based client in Aviation
                  industry. Developed multiple softwares on top of products
                  developed by eQ with role of Full Stack Developer.
                </p>
              </div>
            </div>
          </div>
          <div className="card" ref={hsbcCardRef}>
            <div className="box">
              <div className="card-content">
                <div>
                  <img src={hsbc} className="persi-logo" />
                </div>
                <span className="company-title">HSBC</span>
                <p>
                  <span className="designation">Software Engineer</span>
                  <br />
                  Aug 2021 - Present
                </p>
                <p className="role-desc">
                  Working as Lead Developer on a regulatory project to Change
                  the bank with major focus on Spring framework and Rest APIs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
