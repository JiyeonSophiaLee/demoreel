let menu = document.getElementById('menu');
let work = document.getElementById('work');
let skill = document.getElementById('skill');


const body = document.getElementById('body');

function expandMenu(){

  if(window.getComputedStyle(menu).getPropertyValue('flex-basis')==50+'%'){
    menu.style.flexBasis=90+'%';
    
    setTimeout(function(){
      console.log('this one 232', window.getComputedStyle(work).getPropertyValue('width'), " , ",window.getComputedStyle(work).getPropertyValue('height'));
    },1);
  }else{
    menu.style.flexBasis=50+'%';
    console.log('this one 118', window.getComputedStyle(work).getPropertyValue('width'), " , ",window.getComputedStyle(work).getPropertyValue('height'))
    }
    // console.log('this one', window.getComputedStyle(work).getPropertyValue('width'), " , ",window.getComputedStyle(work).getPropertyValue('height'))
};

function test(subMenu){
  subMenu.style.justifyContent='center';
  subMenu.firstElementChild.style.alignSelf='center';

  
}

console.log('this one', window.getComputedStyle(work).getPropertyValue('width'), " , ",window.getComputedStyle(work).getPropertyValue('height'))

work.addEventListener('click',()=>{expandMenu()});
work.addEventListener('click',()=>{test(work)});
// work.addEventListener('click',()=>{console.log('this one', window.getComputedStyle(work).getPropertyValue('width'), " , ",window.getComputedStyle(work).getPropertyValue('height'))})
// work.addEventListener('click',()=>{work.classList.add('center')})