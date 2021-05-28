import { memo, useCallback } from "react";

// const prefix = process.env.NEXT_PUBLIC_PREFIX === undefined ? true : false



function InfoTop() {

  const getImage = ()=>{
    // if(prefix){
    //   try{
        return <img src={require("../../../public/assets/images/pictures/myPic.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1200sizes[]=2000")} alt="Picture of Sophia"/>
  //     }catch{
  //       console.log('local error mypic')
  //     }
  //   }else{
  //     try{
  //       return <img src={require("../../../public/assets/images/pictures/myPic.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1200sizes[]=2000")} alt="Picture of Sophia"/>
  //     }catch{
  //       console.log('web error mypic')
  //     }
  //   }
  }
  return (
    <div id="infoTop">
      <div id="myPic">
        <div id="myPicBG" />
        <div id="myPicImage">
          {getImage()}
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
