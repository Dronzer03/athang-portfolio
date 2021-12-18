import React, { useState, useRef, useEffect } from "react";
import "./ContactForm.css";
import Button from "../Utils/Button";
import emailjs from "emailjs-com";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons";

gsap.registerPlugin(ScrollTrigger);

function ContactForm() {
  const [from, setFrom] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const title = useRef();
  const contactRef = useRef();

  if(/Android */.test(navigator.appVersion)){
    window.addEventListener("resize", function(){
       if(document.activeElement.tagName=="INPUT" || document.activeElement.tagName=="TEXTAREA"){
          window.setTimeout(function(){
             document.activeElement.scrollIntoViewIfNeeded();
          },0);
       }
    })
 }

  useEffect(() => {
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
  });

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changeFrom = (e) => {
    setFrom(e.target.value);
  };

  const changeMsg = (e) => {
    setMsg(e.target.value);
  };

  const onGitClick = () => {
    window.open("https://github.com/Dronzer03", "_blank");
  };

  const onLinkedClick = () => {
    window.open("https://www.linkedin.com/in/athang03", "_blank");
  };

  const onInstaClick = () => {
    window.open("https://www.instagram.com/athang_kulkarni", "_blank");
  };

  const onWAClick = () => {
    window.open("https://api.whatsapp.com/send?phone=918793673422");
  };

  const sendMail = (e) => {
    e.preventDefault();
    if (from != "" && email != "" && msg != "") {
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
    <>
      <div className="contact-form" id="contact">
        <div className="con-content">
          <div className="contact-title" ref={title}>
            <span className="contact-num">04. </span>
            <span className="contact-text">Get in Touch</span>
          </div>
          <div className="contact-box" ref={contactRef}>
            <div className="h2-div">
              <div className="details">
                <h2>CONTACT</h2>
                <div className="mail">Contact Number: +91 8793673422</div>
                <div className="mail">Email: athang.kulkarni03@gmail.com</div>
                <div className="con-icons">
                  <IconContext.Provider value={{ margin: "10px", cursor: "pointer" }}>
                  <FaGithub className="ind-icons" onClick={onGitClick} />
                  <FaWhatsapp className="ind-icons" onClick={onWAClick} />
                  <FaLinkedin
                    onClick={onLinkedClick}
                    className="ind-icons"
                  />
                  <FaInstagram
                    onClick={onInstaClick}
                    className="ind-icons"
                  />
                  </IconContext.Provider>
                </div>
              </div>
              <div className="feedback">
                <div>
                  <h4>Leave me a message or feedback:</h4>
                </div>
                <div className="form">
                  <div>
                    <label>Name:</label>
                  </div>
                  <div>
                    <input id="name" value={from} onChange={changeFrom} />
                  </div>
                  <div>
                    <label>Email:</label>
                  </div>
                  <div>
                    <input id="mail" value={email} onChange={changeEmail} />
                  </div>
                  <div>
                    <label>Message/Feedback:</label>
                  </div>
                  <div>
                    <textarea id="msg" value={msg} onChange={changeMsg} />
                  </div>
                  <div>
                    <Button className="btns" onClick={sendMail}>
                      Send
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
