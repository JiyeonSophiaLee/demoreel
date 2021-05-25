import { memo } from "react";

function InfoTop() {
  console.log("---infoTop---");
  const imgSrc = require("../../../public/assets/images/pictures/myPic.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000sizes[]=1400sizes[]=2000");
  return (
    <div id="infoTop">
      <div id="myPic">
        <div id="myPicBG" />
        <div id="myPicImage">
          {/* <img
            src={imgSrc}
            alt="Picture of Sophia"
          /> */}
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
  );
}

export default memo(InfoTop);
