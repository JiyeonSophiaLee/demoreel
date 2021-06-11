import { memo, useCallback } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaArtstation } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import { GrLinkedin } from "react-icons/gr";

function InfoBotContact() {
  // console.log("---InfoBotContact---");\
  const onClick = useCallback((e, url)=>{
    e.stopPropagation();
    url && window.open(url);
  },[])
  return (
    <div id="contact">
      <div className="heads">WHERE TO FIND ME</div>
      <div className="bodies">
        <nav className="address">
          <HiOutlineMail className="icon" />
          <a href="mailto:jiyeon.sophia.lee@gmail.com" title="email" onClick={onClick}>
            Email to me
          </a>
        </nav>
        <nav className="address">
          <GrLinkedin className="icon" />
          <a href="https://www.linkedin.com/in/jiyeon-lee-873397111/" target="_blank" onClick={onClick}>
            My Linkedin
          </a>
        </nav>
        <nav className="address">
          <GoMarkGithub className="icon" />
          <a href="https://github.com/JiyeonSophiaLee" target="_blank" onClick={onClick}>
            My Github
          </a>
        </nav>
        <nav className="address">
          <FaArtstation className="icon" />
          <a href="https://www.artstation.com/jiyeon_sophia" target="_blank" onClick={onClick}>
            My Artstation
          </a>
        </nav>
      </div>
    </div>
  );
}

export default memo(InfoBotContact);
