const body=document.getElementById('body');


$(document).ready(function() {
    setTimeout(function() { $('iframe.demoVideo').attr('src', $('iframe.demoVideo').attr('data-src')); }, 3500);
});

console.log('Thank for visiting my website.')


function lightLeaking(obj){
    var size = obj.getBoundingClientRect(),
        offsetY = window.pageYOffset,
        offsetX = window.pageXOffset,
        height=size.height/4,
        width=size.width/4,
        color='#140F0A',
        blendColor='rgba(238, 160, 178, 0.35)',
        patternColor='#201911',
        shadow=findShadow(obj,'shadow');
    
    // var target=obj;
   

    // original color='#0d0905'
    // blendColor='#EEA0B2',
    body.classList.add('bg')

    body.style.background="linear-gradient("+blendColor+", "+blendColor+"), linear-gradient("+color+" "+(size.top+offsetY-200)+"px, transparent "+(size.top+offsetY+height)+"px, transparent "+(size.bottom+offsetY-height)+"px, "+color+" "+(size.bottom+offsetY+200)+"px), linear-gradient(to right, "+color+" "+(size.left+offsetX-200)+"px, transparent "+(size.left+offsetX)+"px, transparent "+(size.right+offsetX-width)+"px, "+color+" "+(size.right+offsetX-width+200)+"px), repeating-linear-gradient(90deg, transparent 0%, transparent 3.5rem, "+patternColor+" 3.5rem, "+patternColor+" 3.75rem), repeating-linear-gradient("+color+" 0%, "+color+" 3.5rem, "+patternColor+" 3.5rem, "+patternColor+" 3.75rem)"
    body.style.backgroundBlendMode='overlay, normal, normal, normal';

   shadow.classList.add('on')

}
function lightLeakingOff(obj){
    var shadow=findShadow(obj,'shadow');

    body.classList.remove('bg')
    body.style.background=''; 
    body.style.backgroundBlendMode='';


            
     
    shadow.classList.remove('on');

}

function findShadow(obj, name){
    for(var i=0; i<obj.childNodes.length; i++){            
        if(obj.childNodes[i].classList && obj.childNodes[i].classList.contains(name)){
        return obj.childNodes[i]
        }
    }
}
    
