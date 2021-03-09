let loaderRequestAni;
let loaderF = 0;
const loaderN = 60;
const LOADER_CONTAINDER = document.getElementById('loaderContainer');
const LOADER__ = document.getElementById('loader');


//------------ css style ------------//

let lighterVersion = document.createElement('div');
let lighterVersion_child = document.createElement('a');


// LOADER_CONTAINDER.style.display = 'flex';
// LOADER_CONTAINDER.style.flexWrap = 'wrap';
// LOADER_CONTAINDER.style.alignContent = 'center';
// LOADER_CONTAINDER.style.flexDirection = 'column';

// LOADER__.style.fontFamily = 'theboldfont';
// LOADER__.style.fontSize = '6rem';

lighterVersion.style.fontFamily = 'Darker Grotesque';
lighterVersion.style.fontSize = '1.6rem';
lighterVersion.style.textAlign = 'center';
lighterVersion.style.background = 'rgb(10 10 10)';
// lighterVersion.style.border = '3px double rgb(100 50 10)';
lighterVersion.style.borderRadius = '0.3rem';
lighterVersion.style.padding = '0.5rem 1.5rem';
lighterVersion.style.margin = '1rem';
lighterVersion.style.alignSelf = 'center';

lighterVersion_child.innerHTML = 'This is lighter version <br> This does not contain THREE JS';
lighterVersion_child.setAttribute('target','_black');
lighterVersion_child.setAttribute('href','lighter.html');
lighterVersion_child.style.color = 'BurlyWood';
lighterVersion_child.style.textDecoration = 'none';
lighterVersion_child.style.display = 'block';

lighterVersion.appendChild(lighterVersion_child);
LOADER_CONTAINDER.appendChild(lighterVersion);





window.onload = function(){
  loaderAnim();
}
function loaderAnim(){
  LOADER__.classList.add('loaderFadeOutTrans');

  setTimeout(() => {
    LOADER_CONTAINDER.style.display = 'none';
  }, 1200);

}

