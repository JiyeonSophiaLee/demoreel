// import { useRef, useState } from 'react'
// const prefix = process.env.NEXT_PUBLIC_PREFIX;
import skillList, {RANDOM_COLOR} from "../public/assets/js/skills.js";


const prefix = process.env.NEXT_PUBLIC_PREFIX || "";



function useImageContent(useImageContent){

  const onClick = (e)=>{
    e.stopPropagation()

    const images = [...document.querySelectorAll("." + e.target.className)];
    let artstation, alt;
    let getSkills = [];
    let skills= [];

    useImageContent.forEach((project)=>{
      if(project.fileName === e.target.className) {
        artstation = project.artstation; 
        alt = project.alt; 
        getSkills = project.skills;
      }
    })

    skillList.forEach((skill)=>{
      getSkills.forEach((getSkill)=>{
        if(skill.name === getSkill){
          skills.push(skill);
        }
      })
    })

    const openProject = document.getElementById('openProject');
    const closeDiv = document.createElement("div");
    const closeDivBotton = document.createElement("div");
    const closeDivBottonChild = document.createElement("div");
    const closeDivBottonBG = document.createElement("div");
    const titleDiv = document.createElement('div');
    const title = document.createTextNode(alt);
    const skillIcons = document.createElement('div');
    

    closeDivBotton.appendChild(closeDivBottonChild);
    closeDivBotton.appendChild(closeDivBottonBG);
    closeDiv.appendChild(closeDivBotton);
    openProject.appendChild(closeDiv);


    titleDiv.appendChild(title);
    openProject.appendChild(titleDiv);
    openProject.appendChild(skillIcons);


    closeDiv.setAttribute('id','closeDiv');
    closeDivBotton.setAttribute('id','closeDivBotton');
    closeDivBottonBG.setAttribute('id','closeDivBottonBG');
    titleDiv.setAttribute('class','title');
    skillIcons.setAttribute('class','skillIcons');



    const resize = ()=>{
      const closeDiv = document.getElementById('closeDiv');


      closeDiv.style.left = innerWidth/2 - closeDiv.clientWidth /2 + 'px';
      console.log('resizing is working',closeDiv.clientWidth);
    }

    closeDiv.addEventListener('click',()=>{
      openProject.innerHTML = '';
      openProject.style.display = 'none';
      window.removeEventListener('resize', resize);
    })
    window.addEventListener('resize',resize);

    openProject.style.display = 'initial';
    closeDiv.style.left = innerWidth/2 - closeDiv.clientWidth/2 + 'px';



    images.forEach((image)=>{
      const img = document.createElement("img");
      const div = document.createElement("div");
      const a = document.createElement("a");
      
      img.src = image.src;
      img.srcset = image.srcset;

      div.classList.add('imgs');

      if(artstation === null){
        div.appendChild(img);
        openProject.appendChild(div);
      }else{
        a.appendChild(img);
        a.href = artstation;
        a.target = '_blank';
        div.appendChild(a);
        openProject.appendChild(div);
      }
    })
    skills.forEach((skill,i)=>{
      const img = document.createElement("img");
      const div = document.createElement("div");
      const divRoot = document.createElement("div");
      const textDiv = document.createElement("div");
      const text = document.createTextNode(skill.name);

      img.src = prefix + skill.path;
      img.alt = skill.alt;

      divRoot.style.background = RANDOM_COLOR[i%10];

      div.appendChild(img);
      divRoot.appendChild(div);
      textDiv.appendChild(text);
      divRoot.appendChild(textDiv);
      skillIcons.appendChild(divRoot)
    })
  }
  const getImg = (name, alt, fileName)=>{
    const url = require("../public"+name+"?resize&sizes[]=300&sizes[]=600&sizes[]=1200sizes[]=2000");
    const img =  <img src={url.src} srcSet={url.srcSet} alt={alt} className={fileName}/>

    return img
  }
  const loadingImages = 
    <div className="alinedImages" >
      {/* <div className="openProjects" ref={openProjectRef}>{openProject || ''}</div> */}
      {useImageContent.map((project)=>{
        if(project.files === null){
          return <div key={project.src+ project.fileName} className="mainContent content videos">{project.src}</div>
        }else{
          const content = [];    
          project.files.forEach((name,i)=>{
            let _name = project.src + project.fileName + name;
            let _className = project.main === i ? 'mainContent content' : 'subContent content';
            // let _image = <Image layout="responsive" width={project.size.width} height={project.size.height} alt={project.alt} src={_name} />;
            let _image = getImg(_name, project.alt, project.fileName);
            let output;

            // if(project.artstation!==null){
            //   // let className = project.main === i ? 'mainContent content' : 'subContent content';
            //   output = <a onClick={(e)=>onClick(e,project.artstation)} herf={project.artstation} key={_name} target="_blank" className={_className}>{_image}</a>;
            // }else{
              output = <div className={_className} key={_name}  onClick={(e)=>onClick(e)}>{_image}</div>;
            // }

            if(project.main === i){
              content.splice(0,0,output)
            }else{
              content.push(output)
            }
            
          })
          return content
        }
      })}
    </div>
  return loadingImages
}

export default useImageContent;