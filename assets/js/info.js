console.log('info.js is working');
import * as ISU from '/assets/js/InitialSetUp.js';



export default function Info(id){
  this.id = id
}
Info.prototype.callInfo = function(){
  ISU.INFO_CONTENTS.style.display='initial';
}

Info.prototype.stopInfo = function(){
  ISU.INFO_CONTENTS.style.display='none';
}