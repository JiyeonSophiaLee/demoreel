import {gsap, Sine} from 'gsap';
import TV, {convertToPix} from './transitionValue.js'




export function homeGsapSet(menuExtended,viewChanged){
  console.log('viewChanged',viewChanged)
  if(viewChanged){
    if(innerWidth > 800){
      if(menuExtended){
        gsap.set(master   , { maxWidth : 100                      + '%'});
        gsap.set(demo     , { width: (100 - TV.unSymetryDemoMenu) + '%'});
        gsap.set(demoVideo, { width: TV.unSymetryDemoVideoWidth   + '%'  , height: innerWidth * (100-TV.unSymetryDemoMenu)/100 * TV.unSymetryDemoVideoWidth/100 * 9/16 });
      }else{
        gsap.set(master   , { maxWidth : TV.masterMaxWidth    });
        gsap.set(demo     , { width: TV.symetryDemoMenu       + '%'});
        gsap.set(demoVideo, { width: TV.symetryDemoVideoWidth + '%', height: innerWidth * TV.symetryDemoMenu/100 * TV.symetryDemoVideoWidth/100 * 9/16 })
      }
    }else{
      if(menuExtended){
        gsap.set(demo     ,{ width: 100 + '%' })
        gsap.set(demoVideo,{ width: TV.unSymetryDemoVideoWidth800 + '%' })
      }else{
        gsap.set(demo     ,{ width: 100 + '%'})
        gsap.set(demoVideo,{ width: TV.symetryDemoVideoWidth800 + '%' })
      }
    }
  }

  gsap.set(demoVideo, { height : demoVideo.clientWidth * (9/16)});
}

// function utilityMenuIf(menuExtended){
//   return new Promise ((resolve,reject)=>{
//     homeGsapTransition(menuExtended);
//     resolve();
//   })
// }

export function getDemoVideoHeight(menuExpanded){
  let demoVideoHeight; 

  if(window.innerWidth > 800){  
    if(menuExpanded){
      demoVideoHeight = ((window.innerWidth * (100 - TV.unSymetryDemoMenu) / 100) * TV.unSymetryDemoVideoWidth/100)  * (9/16);
    }else{
      // demoVideoHeight = demoVideo.clientWidth * (9/16);
    }
    
  }else{
    if(menuExpanded){
      demoVideoHeight = innerWidth * TV.unSymetryDemoVideoWidth800/100 * 9/16;
      // if(window.innerWidth > TV.masterMinWidth){
      //   demoVideoHeight = (window.innerWidth * TV.unSymetryDemoVideoWidth800 /100)  * (9/16);
      // }else{
      //   demoVideoHeight = (TV.masterMinWidth * ISU.transitionValue['unSymetryDemoVideoWidthMediaQuery'] /100)  * (9/16);
      // }
    }else{
      // if(window.innerWidth > ISU.transitionValue['masterMinWidth']){
      //   demoVideoHeight = (window.innerWidth * ISU.transitionValue['symetryDemoVideoWidthMediaQuery'] /100)  * (9/16);
      // }else{
      //   demoVideoHeight = (ISU.transitionValue['masterMinWidth'] * ISU.transitionValue['symetryDemoVideoWidthMediaQuery'] /100)  * (9/16);
      // }
    }
  }
    return demoVideoHeight;
}
export function addCSSmenutransition(biggerElemId, ...elems){
  elems.forEach((e)=>{
    if(biggerElemId !== e.id){
      console.log('e.id',e.id)
      e.classList.add('menutransition');
      setTimeout(() => {
        e.classList.remove('menutransition');
      }, TV.menuDuration * 1000 );
    }
  })
}

export function getValuesToUnSymetryEachMenu(demoVideoHeight, elem, order){
 
  const LI = elem.parentElement.parentElement;
  const svgFramePackage = elem.parentElement;
  let allMenusInOrder = [svgFramePackage];
  let j = 0;
  let size = getExtendMenuSize(demoVideoHeight, svgFramePackage);

  for (let i = 0; i < LI.childNodes.length; i++) {
    j = j + 1;
    if (LI.childNodes[i].nodeType != 1) {
      j = j - 1;
    }
    if (LI.childNodes[i].nodeType == 1) {
      if(j !== order){
        if(order %2 == j%2){
          allMenusInOrder.splice(1,0, LI.childNodes[i]);
         

        }else if(Math.ceil(order*0.5) == Math.ceil(j*0.5)){
          allMenusInOrder.splice(2,0, LI.childNodes[i]);
        
        }else{
          allMenusInOrder.splice(3,0, LI.childNodes[i]);
        }
      }
    }
  }
  
  // allMenusInOrder.forEach((e)=>{
  //   e.classList.add('menutransition');
  //   if( e === svgFramePackage ){
  //     e.firstElementChild.classList.add("menutransition");
  //   }
  // })

  
  

  let getValuesInOrder = 
    [{ elemId: allMenusInOrder[0].id, width: TV.unSymetryEachMenu + '%', height: TV.unSymetryEachMenu + '%'}
    ,{ elemId: allMenusInOrder[1].id, width: TV.unSymetryEachMenu + '%', height: (100 - TV.unSymetryEachMenu) + '%'}
    ,{ elemId: allMenusInOrder[2].id, width: (100 - TV.unSymetryEachMenu) + '%', height: TV.unSymetryEachMenu + '%'}
    ,{ elemId: allMenusInOrder[3].id, width: (100 - TV.unSymetryEachMenu) + '%', height: (100 - TV.unSymetryEachMenu) + '%'}];

  // let reOrder=getValuesInOrder.concat();

  // for(let i=0; i<getValuesInOrder.length; i++){
  //   let getOrder = allMenusInOrder[i][0]-1
  //   reOrder.splice(getOrder,1,getValuesInOrder[i]);
  // }
  // setTimeout(() => {
  //   allMenusInOrder.forEach((e)=>{
  //     e.classList.remove("menutransition")
  //     if (e == svgFramePackage) {
  //       e.firstElementChild.classList.remove("menutransition");
  //     }
  //   })
  // }, TV.menuDuration * 1000 );

  var result = 
    { LI: getValuesInOrder, 
      svgFramePackage:{width: size["extendMenuSizeWidth"], height: size["extendMenuSizeHeight"]}}
  

  return result
}

function getExtendMenuSize (demoVideoHeight, elem) {
  let extendMenuSizeWidth, extendMenuSizeHeight;
  let padding = getPadding(elem); 

  


  if(window.innerWidth > 800){
    extendMenuSizeWidth = ((document.body.clientWidth * ( TV.unSymetryDemoMenu / 100) - padding["menuPaddingWidth"]) * ( TV.unSymetryEachMenu / 100)) - padding["liPaddingWidth"];
    extendMenuSizeHeight = getHeight.call(this, window.innerHeight > TV.masterMinHeight ? document.body.clientHeight : TV.masterMinHeight)


    function getHeight(totalHeight){
      return ((totalHeight - padding["menuPaddingHeight"]) * ( TV.unSymetryEachMenu / 100)) - padding["liPaddingHeight"];
    }

  }else{
    extendMenuSizeWidth = getWidth.call(this, window.innerWidth > TV.masterMinWidth ? document.body.clientWidth : TV.masterMinWidth );
    extendMenuSizeHeight = getHeight.call(this, window.innerHeight > TV.masterMinHeight ? document.body.clientHeight : TV.masterMinHeight)

    function getWidth(totalWidth){
      return (totalWidth - padding["menuPaddingWidth"] ) * ( TV.unSymetryEachMenu / 100) - padding["liPaddingWidth"] ;
    }
    function getHeight(totalHeight){
      return (totalHeight - logo.clientHeight - demoVideoHeight - padding["menuPaddingHeight"]) * (TV.unSymetryEachMenu / 100) - padding["liPaddingHeight"] ;
    }
  }

  return {extendMenuSizeWidth, extendMenuSizeHeight}

}

function getPadding (elem){
  let menuPaddingTop = parseFloat(window.getComputedStyle(menu).paddingTop);
  let menuPaddingLeft = parseFloat(window.getComputedStyle(menu).paddingLeft);
  let menuPaddingRight = parseFloat(window.getComputedStyle(menu).paddingRight);
  let menuPaddingBot = parseFloat(window.getComputedStyle(menu).paddingBottom);
  let menuPaddingWidth = menuPaddingLeft + menuPaddingRight;
  let menuPaddingHeight = menuPaddingTop + menuPaddingBot;

  let liPaddingTop = parseFloat(window.getComputedStyle(elem).paddingTop);
  let liPaddingLeft = parseFloat(window.getComputedStyle(elem).paddingLeft);
  let liPaddingRight = parseFloat(window.getComputedStyle(elem).paddingRight);
  let liPaddingBot = parseFloat(window.getComputedStyle(elem).paddingBottom);
  let liPaddingWidth = liPaddingLeft + liPaddingRight;
  let liPaddingHeight = liPaddingTop + liPaddingBot;

  return {menuPaddingWidth, menuPaddingHeight, liPaddingWidth, liPaddingHeight}
}


export function homeGsapTransition(menuExtended){
  if(innerWidth > 800){
    if(menuExtended){
      console.log('homeGsapTransition')
      homeGsapTransitionToUnSymetry();
    }else{
      homeGsapTransitionToSymetry();
    }
  }
  else{
    if(menuExtended){
      homeGsapTransitionToUnSymetry800();
    }else{
      homeGsapTransitionToSymetry800();
    }
  }

}

function homeGsapTransitionToUnSymetry(){
  gsap.fromTo(
    master,{
      maxWidth: TV.masterMaxWidth,
      duration: 1
    },{
      maxWidth: 100 + "%"
    }
  )
  gsap.fromTo(
      demo,{
        width: TV.symetryDemoMenu + '%',
        duration: TV.menuDuration
      },{
        width: (100 - TV.unSymetryDemoMenu) + '%'
      }
  )
  gsap.fromTo(
      demoVideo,{
        width: TV.symetryDemoVideoWidth + '%',
        height: innerWidth * TV.symetryDemoMenu/100 * TV.symetryDemoVideoWidth/100 * 9/16,
        duration: TV.menuDuration
      },{
        width: TV.unSymetryDemoVideoWidth + '%',
        height: innerWidth * (100-TV.unSymetryDemoMenu)/100 * TV.unSymetryDemoVideoWidth/100 * 9/16
      }
    )
}

function homeGsapTransitionToSymetry(){
 gsap.fromTo(
    master,{
      maxWidth: 100 + "%",
      duration: 1
    },{
      maxWidth: TV.masterMaxWidth 
    }
  )
  gsap.fromTo(
      demo,{
        width: (100 - TV.unSymetryDemoMenu) + '%',
        duration: TV.menuDuration
      },{
        width: TV.symetryDemoMenu + '%'
      }
  )
  // Unlike the homeGsapTransitionToUnSymetry( demoVideo have to translate with regualr maxWidth ),
  //   this homeGsapTransitionToSymetry have maxWidth, which translate to two way to get height for demovideo
  //   so I gave a condition for it.
  if(innerWidth < convertToPix(TV.masterMaxWidth)){
      gsap.fromTo(
          demoVideo,{
            width: TV.unSymetryDemoVideoWidth + '%',
            height: innerWidth * (100-TV.unSymetryDemoMenu)/100 * TV.unSymetryDemoVideoWidth/100 * 9/16,
            duration: TV.menuDuration
          },{
            width: TV.symetryDemoVideoWidth + '%',
            height: innerWidth * TV.symetryDemoMenu/100 * TV.symetryDemoVideoWidth/100 * 9/16,
          }
        )
  }else{
      gsap.fromTo(
        demoVideo,{
          width: TV.unSymetryDemoVideoWidth + '%',
          height: innerWidth * (100-TV.unSymetryDemoMenu)/100 * TV.unSymetryDemoVideoWidth/100 * 9/16,
          duration: TV.menuDuration
        },{
          width: TV.symetryDemoVideoWidth + '%',
          height: convertToPix(TV.masterMaxWidth) * TV.symetryDemoMenu/100 * TV.symetryDemoVideoWidth/100 * 9/16
        }
      )
    }
}
// TV.masterMaxWidth * TV.symetryDemoMenu/100 * TV.symetryDemoVideoWidth/100 * 9/16
// innerWidth * TV.symetryDemoMenu/100 * TV.symetryDemoVideoWidth/100 * 9/16
function homeGsapTransitionToUnSymetry800(){
  gsap.fromTo(
    demoVideo,{
      width: TV.symetryDemoVideoWidth800 + '%',
      height: innerWidth * TV.symetryDemoVideoWidth800/100 * 9/16
    },{
      width: TV.unSymetryDemoVideoWidth800 + '%',
      height: innerWidth * TV.unSymetryDemoVideoWidth800/100 * 9/16
    }
  )
}
function homeGsapTransitionToSymetry800(){
  gsap.fromTo(
    demoVideo,{
      width: TV.unSymetryDemoVideoWidth800 + '%',
      height: innerWidth * TV.unSymetryDemoVideoWidth800/100 * 9/16
    },{
      width: TV.symetryDemoVideoWidth800 + '%',
      height: innerWidth * TV.symetryDemoVideoWidth800/100 * 9/16
    }
  )
}


export function tweenCardinal(data, closed, tension) {

  if (data.length < 1) return "M0 0";
  if (tension == null) tension = 1;

  var size = data.length - (closed ? 0 : 1);
  var path = "M" + data[0].x + " " + data[0].y + " C";

  for (var i = 0; i < size; i++) {

    var p0, p1, p2, p3;

    if (closed) {
      p0 = data[(i - 1 + size) % size];
      p1 = data[i];
      p2 = data[(i + 1) % size];
      p3 = data[(i + 2) % size];

    } else {
      p0 = i == 0 ? data[0] : data[i - 1];
      p1 = data[i];
      p2 = data[i + 1];
      p3 = i == size - 1 ? p2 : data[i + 2];
    }

    var x1 = p1.x + (p2.x - p0.x) / 6 * tension;
    var y1 = p1.y + (p2.y - p0.y) / 6 * tension;

    var x2 = p2.x - (p3.x - p1.x) / 6 * tension;
    var y2 = p2.y - (p3.y - p1.y) / 6 * tension;

    path += " " + x1 + " " + y1 + " " + x2 + " " + y2 + " " + p2.x + " " + p2.y;
  }

  return closed ? path + "z" : path;
}

export function random(min, max) {
  if (max == null) {
    max = min;
    min = 0;
  }
  if (min > max) {
    var tmp = min;
    min = max;
    max = tmp;
  }
  return min + (max - min) * Math.random();
}



export function getDataPoints(extendingSize, svgFrameValues, svgFrameValuesImmutable){
  // let w = this.w + this.radius * 2;
  // let h = this.h + this.radius * 2;
  // let w = this.w ;
  // let h = this.h ;
  let w = extendingSize['width'];
  let h = extendingSize['height'];

  // this.x = this.x - this.radius;
  // this.y = this.y - this.radius ;
  let x = svgFrameValuesImmutable["x"];
  let y = svgFrameValuesImmutable["y"];

  let points1 = [];
  let points2 = [];
  let pointsTween1 = [];
  let pointsTween2 = [];

  // This option should be activate, but I just postone for react redux.
  // It makes code much more complecate. 
  // if (svgFrameValues.wavyPath > this.w / 2) {
  //   return svgFrameValues.wavyPath = this.w / 2;
  // }

  const getPositions = function(x,y,svgFrameValues) {
    return {
      position0: {
        x: x + svgFrameValues["wavyPath"],
        y: y
      },
      position1: {
        x: x + w - svgFrameValues["wavyPath"],
        y: y
      },
      position2: {
        x: x + w,
        y: y + svgFrameValues["wavyPath"]
      },
      position3: {
        x: x + w,
        y: y + h - svgFrameValues["wavyPath"]
      },
      position4: {
        x: x + w - svgFrameValues["wavyPath"],
        y: y + h
      },
      position5: {
        x: x + svgFrameValues["wavyPath"],
        y: y + h
      },
      position6: {
        x: x,
        y: y + h - svgFrameValues["wavyPath"]
      },
      position7: {
        x: x,
        y: y + svgFrameValues["wavyPath"]
      }
    }
  }


  let positions = getPositions(x,y,svgFrameValues);
  
  points1 = getMutipliedPoints(svgFrameValuesImmutable["multiply"], positions, 0);
  points2 = getMutipliedPoints(svgFrameValuesImmutable["multiply"], positions, 1);

  //--- get points for tween ---------------------------------------------------------------------------------

  w = w + (svgFrameValues["radius"] * 2);
  h = h + (svgFrameValues["radius"] * 2);

  x = x - svgFrameValues["radius"];
  y = y - svgFrameValues["radius"];

  let positionsTween = getPositions(x,y,svgFrameValues);

  pointsTween1 = getMutipliedPoints(svgFrameValuesImmutable["multiply"], positionsTween, 0);
  pointsTween2 = getMutipliedPoints(svgFrameValuesImmutable["multiply"], positionsTween, 1);
  
  return {
    points1: points1,
    points2: points2,
    pointsTween1: pointsTween1,
    pointsTween2: pointsTween2
  }

  function getMutipliedPoints(multiply, positions, plusNum) {
    let slice = multiply + plusNum;
    let slicedLength = [];

    Object.values(positions).forEach((value, i, arr) => {
      if ((i % 2) == 0) {

        let length = {
          x: arr[i + 1].x - value.x,
          y: arr[i + 1].y - value.y
        }
        //---smoodness of wavy animation---------

        slicedLength.push({
          x: value.x,
          y: value.y
        })

        //----------------------------------------
        for (let j = 1; j < slice + 1; j++) {
          slicedLength.push({
            x: value.x + (length.x * (j / slice)),
            y: value.y + (length.y * (j / slice))
          })
        }
      }
    })
    return slicedLength;
  }

};


//Threejs ---------------------------------

export function callAstronaut(elemId){

  let camGoal = {position:{x:null, y:null, z:null},
                 rotation:{x:null, y:null, z:null}}
    if(elemId === 'work'){
      camGoal.position.x = 5 + innerHeight/1400 ;
      camGoal.position.y = 1.3;
      camGoal.position.z = innerWidth/470 - 0.97
      
      camGoal.rotation.x = 0;
      camGoal.rotation.y = 1.7;
      camGoal.rotation.z = -0.2;
    }else if(elemId === 'skill'){
      camGoal.position.x = 0.05 + innerWidth/1000 - innerHeight/2400;
      camGoal.position.y = 1.67 ;
      camGoal.position.z = 3.27;

      camGoal.rotation.x = -0.25;
      camGoal.rotation.y = -0.2;
      camGoal.rotation.z = 0;
    }else if(elemId === 'paint'){
      camGoal.position.x = 4.11- innerWidth/860 + innerHeight/1000; 
      camGoal.position.y = innerWidth/2100 + 3.4;
      camGoal.position.z = innerWidth/400 + 1.4;

      camGoal.rotation.x = -1.2;
      camGoal.rotation.y = 0.9;
      camGoal.rotation.z = 1;
    }else if(elemId === 'info'){
      camGoal.position.x = -2.5 + innerWidth/1225 - innerHeight/2000;
      camGoal.position.y = 4.44 - innerWidth/2550;
      camGoal.position.z = 4;

      camGoal.rotation.x = -0.96;
      camGoal.rotation.y = -0.65;
      camGoal.rotation.z = -0.71;
    }

    return camGoal

    // // if(biggeredElem ===null){
    // //   camera.position.x = camGoalPositionX;
    // //   camera.position.y = camGoalPositionY;
    // //   camera.position.z = camGoalPositionZ;
  
    // //   camera.rotation.x = camGaolRotationX;
    // //   camera.rotation.y = camGaolRotationY;
    // //   camera.rotation.z = camGaolRotationZ;
    // // }else{
    //   cameraChange(camera,{x:camGoalPositionX, y:camGoalPositionY, z:camGoalPositionZ},{x:camGaolRotationX, y:camGaolRotationY, z:camGaolRotationZ})
    // // }

    // // gsap.to(camera.position,{
    // //   duration:1,
    // //   x:camGoalPositionX,
    // //   y:camGoalPositionY,
    // //   z:camGoalPositionZ,
    // //   ease:"none"
    // // })
    // // gsap.to(camera.rotation,{
    // //   duration:1,
    // //   x:camGaolRotationX,
    // //   y:camGaolRotationY,
    // //   z:camGaolRotationZ,
    // //   ease:"none"
    // // },0)
    // // callClientX = cameraPositionX;
    // // callClientY = cameraPositionY;


}
