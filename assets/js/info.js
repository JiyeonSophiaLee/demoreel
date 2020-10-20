const INFO_CONTENTS = document.querySelector(`#info .contents`);
INFO_CONTENTS.style.display = 'none'


function callInfoContents(elem){
    if(elem.id == 'info'){
        INFO_CONTENTS.style.display='initial';
    }
}

function stopInfoContents(){
    INFO_CONTENTS.style.display='none';
}