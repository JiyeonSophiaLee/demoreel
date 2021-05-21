import { memo } from "react/cjs/react.development"
import Image from 'next/image';

function InfoTop(){
    console.log('---infoTop---')
    return(
      <div id="infoTop">
        <div id="myPic">
          <div id="myPicBG"/>
          <div id="myPicImage">
            <Image src="/assets/images/pictures/myPic.jpg" alt="Picture of Sophia" width={1027} height={1028}/>
          </div>
        </div>
        <main id="myPicInfo">
          <div className="myName">
            <h1 className="nameText">Hi, I'm Sophia</h1>
            <h2 className="nameText">Jiyeon Lee</h2>
          </div>
          <h3 className="position">3D Artist & Frontend Engineer</h3>
        </main>
      </div>
    )
  }

export default memo(InfoTop);