let loaderRequestAni;
let loaderF = 0;
const loaderN = 60;
const LOADER_CONTAINDER = document.getElementById('loaderContainer');
const LOADER__ = document.getElementById('loader');

// let loaderOpacity = 1;
// let loaderOpacityDivide = loaderOpacity / loaderN;

if(innerHeight < body.scrollHeight){
    console.log('if is working')
    LOADER_CONTAINDER.style.height = body.scrollHeight +'px';
}else{
    console.log('else is working')
    LOADER_CONTAINDER.style.height = '';
}



window.onload = function(){
    loaderAnim();
}
function loaderAnim(){
    loaderF += 1;
    if(loaderF==loaderN-1){
        LOADER__.classList.add('loaderFadeOutTrans');
        // LOADER_CONTAINDER.firstElementChild.classList.remove('loaderAnimEnd');



        setTimeout(() => {
            LOADER_CONTAINDER.style.display = 'none';
        }, 1000);


        cancelAnimationFrame(loaderRequestAni);
        loaderRequestAni=null;
        return;
    }
    loaderRequestAni = requestAnimationFrame(loaderAnim);
}
