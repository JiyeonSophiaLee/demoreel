import { memo, useCallback } from "react";
import { MdPhoneIphone } from "react-icons/md";
import { FaArtstation } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";

function InfoBotContact() {
  // console.log("---InfoBotContact---");\
  const onClick = useCallback((e, url)=>{
    e.stopPropagation();
    url && window.open(url)
  },[])
  return (
    <div id="contact">
      <div className="heads">WHERE TO FIND ME</div>
      <div className="bodies">
        <nav className="address">
          <MdPhoneIphone className="icon" />
          <a href="mailto:jiyeon.sophia.lee@gmail.com" title="email" onClick={onClick}>
            Email to me here
          </a>
        </nav>
        <nav className="address">
          <FaArtstation className="icon" />
          <a href="https://www.artstation.com/jiyeon_sophia" target="_blank" onClick={onClick}>
            My Artstation here
          </a>
        </nav>
        <nav className="address">
          <GoMarkGithub className="icon" />
          <a href="https://github.com/JiyeonSophiaLee" target="_blank" onClick={onClick}>
            My Github here
          </a>
        </nav>
      </div>
    </div>
  );
}

export default memo(InfoBotContact);
