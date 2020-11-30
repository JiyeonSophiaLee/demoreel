let loaderRequestAni;
let loaderF = 0;
const loaderN = 60;
const LOADER_CONTAINDER = document.getElementById('loaderContainer');
const LOADER__ = document.getElementById('loader');

// let loaderOpacity = 1;
// let loaderOpacityDivide = loaderOpacity / loaderN;

if(innerHeight < body.scrollHeight){
    LOADER_CONTAINDER.style.height = body.scrollHeight +'px';
}else{
    LOADER_CONTAINDER.style.height = '';
}


let lighterContainer = document.createElement('div');
let lighterAtop = document.createElement('a');
let lighterAbot = document.createElement('a');


lighterContainer.style.fontFamily = 'Darker Grotesque';
lighterContainer.style.fontSize = '1.6rem';
lighterContainer.style.textAlign = 'center';
lighterContainer.style.background = 'rgb(10 10 10)';
// lighterContainer.style.border = '3px double rgb(100 50 10)';
lighterContainer.style.borderRadius = '0.3rem';
lighterContainer.style.padding = '0.5rem 1.5rem';
lighterContainer.style.margin = '1rem';
lighterContainer.style.alignSelf = 'center';

lighterAtop.innerHTML = 'This is lighter version <br> This does not contain THREE JS';
lighterAtop.setAttribute('target','_black');
lighterAtop.setAttribute('href','demoLigherVersion.html');
lighterAtop.style.color = 'BurlyWood';
lighterAtop.style.textDecoration = 'none';
lighterAtop.style.display = 'block';

// lighterAbot.innerHTML = 'This does not contain THREE JS';
// lighterAbot.setAttribute('target','_black');
// lighterAbot.setAttribute('href','demoLigherVersion.html');
// lighterAbot.style.color = 'BurlyWood';
// lighterAbot.style.textDecoration = 'none';




lighterContainer.appendChild(lighterAtop);
// lighterContainer.appendChild(lighterAbot);
LOADER_CONTAINDER.appendChild(lighterContainer);



window.onload = function(){
    loaderAnim();
}
function loaderAnim(){
    // loaderF += 1;
    // if(loaderF==loaderN-1){
        // LOADER__.classList.add('loaderFadeOutTrans');
        LOADER_CONTAINDER.classList.add('loaderFadeOutTrans');
        
    //     // LOADER_CONTAINDER.firstElementChild.classList.remove('loaderAnimEnd');



        setTimeout(() => {
            LOADER_CONTAINDER.style.display = 'none';
        }, 950);


    //     cancelAnimationFrame(loaderRequestAni);
    //     loaderRequestAni=null;
    //     return;
    // }
    // loaderRequestAni = requestAnimationFrame(loaderAnim);
}

