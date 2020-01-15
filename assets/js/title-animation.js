const header=document.getElementById('header'), 
    name=document.getElementById('name'),
    lineContainer=document.getElementById('lineContainer'),
    info=document.getElementById('info'),
    nameContainerMask=document.getElementById('nameContainerMask');


function getCenterPosition(targetId){
    var target=document.getElementById(targetId),
        targetWidth=target.getBoundingClientRect().width;
        console.log(targetWidth);
        return targetWidth/2
}





// name.style.clipPath='inset(0% 0% 70px 0%)';



window.onload = function() {
    const demoStandardimage =document.getElementById('demoStandardimage');
    const demoStandardimageBCR=demoStandardimage.getBoundingClientRect();
    const cssStyleHERP=''

    console.log(demoStandardimageBCR);
    
    function findKeyframesRule(rule) {
        var ss = document.styleSheets,
            numberToFindAnimation=10;
            Index;
        
        
        for (var i = 0; i < ss.length; ++i) {
            var ssCssRule;
            try {
                    ssCssRule = ss[i].rules || ss[i].cssRules;
                } catch (e) {
                    console.warn("Can't read the css rules of: " + ss[i].href, e);
                    continue;
                }
            
            if(ss[i].cssRules.length>numberToFindAnimation){
                var Index=i;
            }
        }
        for(var i=0; i<ss[Index].cssRules.length; i++){
            if (ss[Index].cssRules[i].type == window.CSSRule.KEYFRAMES_RULE && ss[Index].cssRules[i].name == rule) {
                return ss[Index].cssRules[i]
            }
        }
        return null;
    }

    // this is [head] margin-botton;
    header.style.marginBottom=(demoStandardimageBCR.height*0.65)+"px";


    // this is [name] animation
    var nameCenter=getCenterPosition('name'),
        demoImageCenter=getCenterPosition('demoImage');
    console.log('this is nameCenter: ',nameCenter);
    console.log('this is demoImage: ',demoImageCenter);

    var height=demoStandardimageBCR.height*1.07
    console.log("this is name height",height);

    name.style.left=demoImageCenter-nameCenter+'px';
    name.style.transform='translateY('+(demoStandardimageBCR.height*1.07)+'px)';

   
    name.style.zIndex=1;



    var nameAniKeyframes = findKeyframesRule('nameAni');
    nameAniKeyframes.appendRule("0% {transform: translateY("+(demoStandardimageBCR.height*0.7)+"px);");
    nameAniKeyframes.appendRule("30% {transform: translateY("+(demoStandardimageBCR.height*0.15)+"px);}");
    nameAniKeyframes.appendRule("80% {transform: translateY("+(demoStandardimageBCR.height*1.09)+"px);}");
    nameAniKeyframes.appendRule("100% {transform: translateY("+(demoStandardimageBCR.height*1.07)+"px)}");







    // this is [lineContainer] animation
    var lineContainerCenter=getCenterPosition('lineContainer');
    console.log('this is lineContainerCenter: ',lineContainerCenter);
    console.log('this is left: ',demoImageCenter-lineContainerCenter);

    lineContainer.style.left=demoImageCenter-lineContainerCenter+'px';
    lineContainer.style.transform='translateY('+(demoStandardimageBCR.height*1.43)+'px)';
    lineContainer.style.zIndex=3;
    // console.log(nameAniKeyframes)

    
    var lineAniContainerKeyframes = findKeyframesRule('lineAniContainer');
    lineAniContainerKeyframes.appendRule("0%,11% {transform: translateY("+(demoStandardimageBCR.height*0.2)+"px);}");
    lineAniContainerKeyframes.appendRule("30% {transform: translateY("+(demoStandardimageBCR.height*0.8)+"px);}");
    lineAniContainerKeyframes.appendRule("60% {transform: translateY("+(demoStandardimageBCR.height*0.3)+"px);}");
    lineAniContainerKeyframes.appendRule("90% {transform: translateY("+(demoStandardimageBCR.height*1.45)+"px);}");
    lineAniContainerKeyframes.appendRule("100% {transform: translateY("+(demoStandardimageBCR.height*1.43)+"px);}");




    // this is [nameContainerMask] animation
    var nameContainerMaskAniKeyframes = findKeyframesRule('nameContainerMaskAni');
    // nameContainerMask.style.clipPath="inset(30% 0 0 0)";

    nameContainerMaskAniKeyframes.appendRule("0%,10% {clip-path: inset("+(demoStandardimageBCR.height*0.2)+"px 0 0 0)}");
    nameContainerMaskAniKeyframes.appendRule("30% {clip-path: inset("+(demoStandardimageBCR.height*0.8)+"px 0 0 0)}");
    nameContainerMaskAniKeyframes.appendRule("60%,100% {clip-path: inset(100% 0 0 0)}");





    // this is [info] animation
    var infoCenter=getCenterPosition('info');
    console.log('this is infoCenter: ',infoCenter);
    console.log('this is left: ',demoImageCenter-infoCenter);

    info.style.left=demoImageCenter-infoCenter+'px';
    info.style.transform='translateY('+(demoStandardimageBCR.height*1.53)+'px)';
    info.style.zIndex=1;


    
    var infoAniKeyframes = findKeyframesRule('infoAni');
    infoAniKeyframes.appendRule("0%,5% {transform: translateY("+(demoStandardimageBCR.height*0.9)+"px)}");
    infoAniKeyframes.appendRule("35% {transform: translateY("+(demoStandardimageBCR.height*0.5)+"px)}");
    infoAniKeyframes.appendRule("80% {transform: translateY("+(demoStandardimageBCR.height*1.55)+"px)}");
    infoAniKeyframes.appendRule("100% {transform: translateY("+(demoStandardimageBCR.height*1.53)+"px)}");





    
    


    // keyframes.insertRule(
    //     "0%{
    //         transform: translateY(-20vmin);
    //         clip-path: inset(0 0 100% 0);
    //     }
    //     100%{
    //         transform: translateY(0);
    //     }"
    // )
    // name.animate(
    //     [
    //         {transform:'translateY(-' + demoStandardimageBCR.height*0.4 + 'px)'},
    //         {transform:'translateY(-' + demoStandardimageBCR.height + 'px)'},
    //         {transform:'translateY(' + demoStandardimageBCR.height + 'px)'}
    //     ],
    //     {
    //         duration:3000,
    //         interations:0
    //     }
    // );
    
}
