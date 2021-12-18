import React, { useState, useRef, useEffect } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const [from, setFrom] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const title = useRef();
  const contactRef = useRef();

  useEffect(()=>{
    gsap.fromTo(
      title.current,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 2,
        ease: "none",
        scrollTrigger: {
          trigger: title.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      contactRef.current,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 2,
        ease: "none",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top center",
          end: "bottom center+=199",
          toggleActions: "play none none reverse",
          scrub: true,
        },
      }
    );
  })

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changeFrom = (e) => {
    setFrom(e.target.value);
  };

  const changeMsg = (e) => {
    setMsg(e.target.value);
  };

  const sendMail = (e) => {
      e.preventDefault();
    if (from !== "" && email !== "" && msg !== "") {
      var temp = {
        from,
        email,
        msg,
      };
      emailjs
        .send(
          "service_fjetups",
          "template_8vk0a2n",
          temp,
          "user_w8G2on0zrYaJHkCAhV23E"
        )
        .then((res) => {
          console.log(res);
          setEmail("");
          setFrom("");
          setMsg("");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Please Enter All the fields to send an Email!");
    }
  };
  return (
    <div className="contact-page" id="contact">
      <div className="con-content">
        <div className="contact-title" ref={title}>
          <span className="contact-num">04. </span>
          <span className="contact-text">Get in Touch</span>
        </div>

        <div className="contact-box" ref={contactRef}>
          <div className="contact-links">
            <h2>CONTACT</h2>
            <div className="details">
              +91 8793673422 <br/>
              athang.kulkarni03@gmail.com
            </div>
            <div className="links">
              <div className="link">
                <a href="https://www.linkedin.com/in/athang03" target="_blank">
                  <img
                    src="https://i.postimg.cc/m2mg2Hjm/linkedin.png"
                    alt="linkedin"
                  />
                </a>
              </div>
              <div className="link">
                <a href="https://github.com/Dronzer03" target="_blank">
                  <img
                    src="https://i.postimg.cc/YCV2QBJg/github.png"
                    alt="github"
                  />
                </a>
              </div>
              <div className="link">
                <a href="https://www.instagram.com/athang_kulkarni" target="_blank">
                  <img
                    src="https://i.postimg.cc/W4Znvrry/codepen.png"
                    alt="codepen"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="contact-form-wrapper">
            <div>
              <div className="form-item">
                <input
                  type="text"
                  name="sender"
                  required
                  onChange={changeFrom}
                  value={from}
                />
                <label>Name:</label>
              </div>
              <div className="form-item">
                <input
                  type="text"
                  name="email"
                  required
                  onChange={changeEmail}
                  value={email}
                />
                <label>Email:</label>
              </div>
              <div className="form-item">
                <textarea
                  className=""
                  name="message"
                  required
                  onChange={changeMsg}
                  value={msg}
                />
                <label>Message:</label>
              </div>
              <button className="submit-btn" onClick={sendMail}>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
