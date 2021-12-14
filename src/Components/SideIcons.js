import React, {useEffect, useRef} from "react";
import { IconContext } from "react-icons";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { gsap } from "gsap";

function SideIcons() {
  const iconsRef = useRef();

  const onGitClick = () => {
    window.open("https://github.com/Dronzer03", "_blank")
  }

  const onLinkedClick = () => {
    window.open("https://www.linkedin.com/in/athang03", "_blank")
  }

  const onInstaClick = () => {
    window.open("https://www.instagram.com/athang_kulkarni", "_blank")
  }

  useEffect(()=>{
    gsap.fromTo(
        iconsRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 2 },
        "-=0.5"
      );
  })

  return (
    <div>
      <div className="icons" ref={iconsRef}>
        <IconContext.Provider value={{ color: "white", size: "30px" }}>
          <div>
            <FaGithub className="github" onClick={onGitClick}/>
            <FaInstagram className="instagram" onClick={onInstaClick}/>
            <FaLinkedinIn className="linkedin" onClick={onLinkedClick}/>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default SideIcons;
