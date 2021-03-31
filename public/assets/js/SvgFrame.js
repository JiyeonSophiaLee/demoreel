import TV from './transitionValue.js'


export default function RunSvgFrame(_innerWidth,_innerHeight){

  // this.svgFrameId = id + 'SvgFrame';
  // this.elem = eval(id);
  // this.order = order
  // this.svgFrame = eval(this.svgFrameId);
  // this.svgCanvas = this.svgFrame.parentElement;
  // this.wavy1 = document.getElementById(id + 'RectWavy1');
  // this.wavy2 = document.getElementById(id + 'RectWavy2');
  this.x = 0;
  this.y = 0;
  // this.w = this.svgCanvas.parentElement.clientWidth;
  // this.h = this.svgCanvas.parentElement.clientHeight;
  this.border = 5;
  this.multiply = 3;
  this.scale = 1;
  this.speed = [2, 3];
  this.fill = 'none';
  this.stroke = true;
  this.strokeColor = `url(#${this.Id}SvgFrameStopColor)`;



  //------------borderWavyPath and radius is going to be set by setUpdateValues()-----------------------
  this.borderWavyPath;
  this.radius;
  this.setUpdateValues(_innerWidth,_innerHeight);


  //----this.extraSVGspace is for gsap wiggling on wave path. even if there is this.radius, wiggling curve is go over the svg canvas with cardinal curve method---- 
  this.extraSVGspace = this.radius * 5 ;
  // console.log('svgFrame is working')


  // this.createSvgFrame();
}

RunSvgFrame.prototype.setUpdateValues = function(_innerWidth, _innerHeight){
  this.borderWavyPath = Math.abs((_innerWidth - _innerWidth )) * 0.01 + 25;
  this.radius = _innerWidth > 800 ? ( _innerWidth > 1400 ? 9 : 7 ) : 5;

}


RunSvgFrame.prototype.extendMenuIf = function(demoVideoHeight){
  return new Promise((resolve,reject)=>{


    // this.unSymetryEachMenuTransform(demoVideoHeight);
    
    resolve();
  })
}


// Rect.prototype.updateResize = function(biggerElem,menuExpanded,demoVideoHeight) {
  
  
//   if(menuExpanded && this.elem == biggerElem){
//     if(innerWidth <= 800 && this.wavyAnimTLRunning){
//       this.wavyAnimTL.pause(0);
//       document.getElementById(this.id + 'RectWavy1').setAttribute('d', '');
//       document.getElementById(this.id + 'RectWavy2').setAttribute('d', '');
//     }else{
//       this.getExpandMenuSize(demoVideoHeight);
//       this.createWavyAnimation();
//     }
//   }
  

//   if(this.elem != biggerElem){
//     SetDefaultRectSize(this.elem,menuExpanded);
//   }


//   let width, height;
//   if(menuExpanded && this.elem == biggerElem){
//     this.getExpandMenuSize(demoVideoHeight);
//     width = this.getExpandMenuSizeWidth;
//     height = this.getExpandMenuSizeHeight;
//   }else{
//     width = this.svgCanvas.parentElement.clientWidth;
//     height = this.svgCanvas.parentElement.clientHeight;
//   }

//   this.svgCanvas.style.width = width + this.extraSVGspace + 'px'
//   this.svgCanvas.style.height = height + this.extraSVGspace + 'px'
//   this.rect.style.width = width + 'px';
//   this.rect.style.height = height + 'px';

// };


RunSvgFrame.prototype.getExpandMenuSize = function(demoVideoHeight) {
  this.getPadding();


  if(window.innerWidth > 800){
    this.getExpandMenuSizeWidth = ((document.body.clientWidth * ( TV.unSymetryDemoMenu / 100) - this.menuPaddingWidth) * ( TV.unSymetryEachMenu / 100)) - this.liPaddingWidth;
    this.getExpandMenuSizeHeight = getHeight.call(this, window.innerHeight > TV.masterMinHeight ? document.body.clientHeight : TV.masterMinHeight)


    function getHeight(totalHeight){
      return ((totalHeight - this.menuPaddingHeight) * ( TV.unSymetryEachMenu / 100))- this.liPaddingHeight;
    }

  }else{
    this.getExpandMenuSizeWidth = getWidth.call(this, window.innerWidth > TV.masterMinWidth ? document.body.clientWidth : TV.masterMinWidth );
    this.getExpandMenuSizeHeight = getHeight.call(this, window.innerHeight > TV.masterMinHeight ? document.body.clientHeight : TV.masterMinHeight)
   
    function getWidth(totalWidth){
      return (totalWidth - this.menuPaddingWidth ) * ( TV.unSymetryEachMenu / 100) - this.liPaddingWidth ;
    }
    function getHeight(totalHeight){
      return (totalHeight - logo.clientHeight - demoVideoHeight - this.menuPaddingHeight) * (TV.unSymetryEachMenu / 100) - this.liPaddingHeight ;
    }
  }

}

RunSvgFrame.prototype.getPadding = function(){
  this.menuPaddingTop = parseFloat(window.getComputedStyle(menu).paddingTop);
  this.menuPaddingLeft = parseFloat(window.getComputedStyle(menu).paddingLeft);
  this.menuPaddingRight = parseFloat(window.getComputedStyle(menu).paddingRight);
  this.menuPaddingBot = parseFloat(window.getComputedStyle(menu).paddingBottom);
  this.menuPaddingWidth = this.menuPaddingLeft + this.menuPaddingRight;
  this.menuPaddingHeight = this.menuPaddingTop + this.menuPaddingBot;

  this.liPaddingTop = parseFloat(window.getComputedStyle(this.elem).paddingTop);
  this.liPaddingLeft = parseFloat(window.getComputedStyle(this.elem).paddingLeft);
  this.liPaddingRight = parseFloat(window.getComputedStyle(this.elem).paddingRight);
  this.liPaddingBot = parseFloat(window.getComputedStyle(this.elem).paddingBottom);
  this.liPaddingWidth = this.liPaddingLeft + this.liPaddingRight;
  this.liPaddingHeight = this.liPaddingTop + this.liPaddingBot;

 
}





// export const workSvgFrame = new SvgFrame('work')
// export const skillSvgFrame = new SvgFrame('skill')
// export const paintSvgFrame = new SvgFrame('paint')
// export const infoSvgFrame = new SvgFrame('info')