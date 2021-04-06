import {memo} from 'react'
import { MdPhoneIphone } from 'react-icons/md'; 
import { FaArtstation } from 'react-icons/fa'; 
import { ImAddressBook } from 'react-icons/im'; 

function InfoBotContact(){
    console.log('---InfoBotContact---')
    return(
      <div id="contact">
        <div className="heads">WHERE TO FIND ME</div>
        <div className="bodies">
          <nav className="address">
            <MdPhoneIphone/>
            <a href="mailto:jiyeon.sophia.lee@gmail.com" title="email">Email to me here</a>
          </nav>
          <nav className="address">
            <FaArtstation/>
            <a href="https://www.artstation.com/jiyeon_sophia" target="_blank">My Artstation here</a>
          </nav>
          <nav className="address">
            <ImAddressBook/>
            <a href="https://github.com/JiyeonSophiaLee" target="_blank">My Github here</a>
          </nav>
        </div>
      </div>
    )
  }

export default memo(InfoBotContact)