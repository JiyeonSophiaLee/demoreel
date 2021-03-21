// import TV from '../../../components/transitionValue'

export default function RunSvgFrame(id, order){
  this.id = id;
  this.rectId = id + 'Rect';
  this.order = order
  // this.order = order;
  // this.rect = document.getElementById(this.rectId);
  // this.svgCanvas = this.rect.parentElement;
  // this.wavy1 = document.getElementById(id + 'RectWavy1');
  // this.wavy2 = document.getElementById(id + 'RectWavy2');
  this.x = 0;
  this.y = 0;
  // this.w = this.svgCanvas.parentElement.clientWidth;
  // this.h = this.svgCanvas.parentElement.clientHeight;
  this.border = 5;
  this.borderWavyPath;
  this.multiply = 3;
  this.scale = 1;
  this.radius;
  this.speed = [2, 3];
  this.color = 'none';
  this.stroke = true;
  this.strokeColor = `url(#${this.rectId}Color)`;
}
RunSvgFrame.prototype.test = function(){
  const elem = eval(this.id);
  let allMenusInOrder = [elem];
  let j = 0;

  for (let i = 0; i < elem.parentElement.childNodes.length; i++) {
    j = j + 1;
    if (elem.parentElement.childNodes[i].nodeType != 1) {
      j = j - 1;
    }
    if (elem.parentElement.childNodes[i].nodeType == 1) {
      if(j != this.order){
        if(this.order %2 == j%2){
          allMenusInOrder.splice(1,0, elem.parentElement.childNodes[i]);
         

        }else if(Math.ceil(this.order*0.5) == Math.ceil(j*0.5)){
          allMenusInOrder.splice(2,0, elem.parentElement.childNodes[i]);
        
        }else{
          allMenusInOrder.splice(3,0, elem.parentElement.childNodes[i]);
        }
      }
    }
  }
  console.log(allMenusInOrder)

}


// export const workSvgFrame = new SvgFrame('work')
// export const skillSvgFrame = new SvgFrame('skill')
// export const paintSvgFrame = new SvgFrame('paint')
// export const infoSvgFrame = new SvgFrame('info')