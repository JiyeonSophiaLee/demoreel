let loaderRequestAni;
let loaderF = 0;
const loaderN = 60;
const loaderContainer = document.getElementById('loaderContainer');
const loader = document.getElementById('loader');

// let loaderOpacity = 1;
// let loaderOpacityDivide = loaderOpacity / loaderN;


window.onload = function(){
    loaderAnim();
}
function loaderAnim(){
    loaderF += 1;
    if(loaderF==loaderN-1){
        loader.classList.add('loaderFadeOutTrans');
        // loaderContainer.firstElementChild.classList.remove('loaderAnimEnd');



        setTimeout(() => {
            loaderContainer.style.display = 'none';
        }, 1000);


        cancelAnimationFrame(loaderRequestAni);
        loaderRequestAni=null;
        return;
    }
    loaderRequestAni = requestAnimationFrame(loaderAnim);
}

