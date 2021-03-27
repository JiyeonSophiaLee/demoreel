import TV from './transitionValue.js'


export default function RunSvgFrame(id, order){
  this.id = id;
  this.svgFrameId = id + 'SvgFrame';
  this.elem = eval(id);
  this.order = order
  this.svgFrame = eval(this.svgFrameId);
  this.svgCanvas = this.svgFrame.parentElement;
  // this.wavy1 = document.getElementById(id + 'RectWavy1');
  // this.wavy2 = document.getElementById(id + 'RectWavy2');
  this.x = 0;
  this.y = 0;
  this.w = this.svgCanvas.parentElement.clientWidth;
  this.h = this.svgCanvas.parentElement.clientHeight;
  this.border = 5;
  this.multiply = 3;
  this.scale = 1;
  this.speed = [2, 3];
  this.color = 'none';
  this.stroke = true;
  this.strokeColor = `url(#${this.rectId}Color)`;
  
  //------------borderWavyPath and radius is going to be set by setUpdateValues()-----------------------
  this.borderWavyPath;
  this.radius;
  this.setUpdateValues();


  //----this.extraSVGspace is for gsap wiggling on wave path. even if there is this.radius, wiggling curve is go over the svg canvas with cardinal curve method---- 
  this.extraSVGspace = this.radius * 5 ;
  



  this.createSvgFrame();
}
RunSvgFrame.prototype.setUpdateValues = function(){
  this.borderWavyPath = Math.abs((window.innerWidth - window.innerHeight )) * 0.01 + 25;
  this.radius = window.innerWidth > 800 ? ( window.innerWidth > 1400 ? 9 : 7 ) : 5;
}
RunSvgFrame.prototype.createSvgFrame = function(){
  this.svgCanvas.style.width = this.w + this.extraSVGspace + 'px';
  this.svgCanvas.style.height = this.h + this.extraSVGspace +'px';
  // -------------svg transform and translate is not working on Safari, so need to use top and left -------------
  // this.svgCanvas.setAttribute('transform', `translate( -${this.extraSVGspace/2}, 0)`);
  this.svgCanvas.style.left = `-${this.extraSVGspace/2}px`;
  this.svgCanvas.style.top = `-${this.extraSVGspace/2}px`;
  
  // console.log(this.svgCanvas)
}

RunSvgFrame.prototype.extendMenuIf = function(demoVideoHeight){
  return new Promise((resolve,reject)=>{


    // this.unSymetryEachMenuTransform(demoVideoHeight);
    
    resolve();
  })
}


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