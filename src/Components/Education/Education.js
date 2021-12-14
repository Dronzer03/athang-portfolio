import React, { useState, useRef, useEffect } from "react";
import Certifications from "./Certifications";
import "./Education.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Education() {
  const [cardOne, setCardOne] = useState(true);
  const [cardTwo, setCardTwo] = useState(true);
  const [cardThree, setCardThree] = useState(true);
  const row1 = useRef();
  const row2 = useRef();
  const row3 = useRef();
  const edu = useRef();

  useEffect(() => {
    gsap.fromTo(
      row1.current,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 2,
        ease: "none",
        scrollTrigger: {
          trigger: row1.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      row2.current,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 2,
        ease: "none",
        scrollTrigger: {
          trigger: row2.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      row3.current,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 2,
        ease: "none",
        scrollTrigger: {
          trigger: row3.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      edu.current,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 2,
        ease: "none",
        scrollTrigger: {
          trigger: edu.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
          scrub: true,
        },
      }
    );
  });

  const changeOne = () => {
    setCardOne(!cardOne);
  };

  const changeTwo = () => {
    setCardTwo(!cardTwo);
  };

  const changeThree = () => {
    setCardThree(!cardThree);
  };

  return (
    <div className="edu-page" id="edu">
      <div className="edu-content">
        <div className="edu-title" ref={edu}>
          <span className="edu-num">03. </span>
          <span className="edu-text">Education</span>
        </div>
        <div className="edu-tiles">
          <div className="col-md-12 col-sm-12 col-lg-12 row">
            <div className="col-md-1 col-sm-1 col-lg-1"></div>
            <div className="col-md-10 col-sm-10 col-lg-10">
              <div className="row">
                {cardOne ? (
                  <div
                    onClick={changeOne}
                    className="ssc front col-md-4 col-sm-4 col-lg-4"
                    ref={row1}
                  >
                    <h2>SSC</h2>
                  </div>
                ) : (
                  <div
                    onClick={changeOne}
                    className="ssc back col-md-4 col-sm-4 col-lg-4"
                    ref={row1}
                  >
                    <div className="back-content">
                      Chate School, Kolhapur
                      <br />
                      <ul className="ssc-list">
                        <li>Score : 96.18%</li>
                        <li>Stood second in the region</li>
                      </ul>
                    </div>
                  </div>
                )}
                <div className="col-md-2 col-sm-2 col-lg-2"></div>
                {cardTwo ? (
                  <div
                    onClick={changeTwo}
                    className="hsc front col-md-4 col-sm-4 col-lg-4"
                    ref={row2}
                  >
                    <h2>HSC</h2>
                  </div>
                ) : (
                  <div
                    onClick={changeTwo}
                    className="hsc back col-md-4 col-sm-4 col-lg-4"
                    ref={row2}
                  >
                    <div className="back-content">
                      Fergusson College, Pune.
                      <ul className="ssc-list">
                        <li>Score : 83.23%</li>
                        <li>Part of FC Cricket Team</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-1 col-sm-1 col-lg-1"></div>
          </div>
          <div className="col-md-12 col-sm-12 col-lg-12 row" ref={row3}>
            <div className="col-md-2 col-sm-2 col-lg-2"></div>
            {cardThree ? (
              <div
                onClick={changeThree}
                className="grad front col-md-6 col-sm-6 col-lg-6"
              >
                <h2>Graduation</h2>
              </div>
            ) : (
              <div
                onClick={changeThree}
                className="grad back col-md-6 col-sm-6 col-lg-6"
              >
                <div className="back-content">
                  MIT College of Engineering, Pune.
                  <ul className="grad-list">
                    <li>GPA : 9.04/10</li>
                    <li>Published paper on Blockchain in Springer Journal</li>
                    <li>Represented in PCI Winter School</li>
                    <li>SIH Finalist</li>
                  </ul>
                </div>
              </div>
            )}
            <div className="col-md-4 col-sm-4 col-lg-4"></div>
          </div>
        </div>
      </div>
      <Certifications />
    </div>
  );
}

export default Education;
