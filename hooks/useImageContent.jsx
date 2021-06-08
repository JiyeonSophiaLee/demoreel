import { useRef, useState } from 'react'
const prefix = process.env.NEXT_PUBLIC_PREFIX;


function useImageContent(useImageContent){
  // const [openProject,setOpenProject] = useState(false);
  // const alinedImagesRef = useRef()
  // const openProjectRef = useRef()

  const onClick = (e)=>{
    e.stopPropagation()
  
    // const content = useImageContent.map((project)=>{
    //   if(e.target.className === project.fileName){
    //     console.log('project',project)
    //     const _content = project.files.map((name)=>{
    //       const _name = project.src + project.fileName + name;  
    //       console.log('name',_name)
    //       return getImg(_name, project.alt, project.fileName)
    //     })
    //     return _content;
    //   }else{
    //     return ;
    //   }
    // })
    // // console.log('content', content)
    // setOpenProjectImagesContext(content);
    
    console.log('e', e.target.className);
    const images = [...document.querySelectorAll("." + e.target.className)];
    const openProject = document.getElementById('openProject');
    const closeDiv = document.createElement("div");
    const closeDivBotton = document.createElement("div");
    const closeDivBottonChild = document.createElement("div");
    const closeDivBottonBG = document.createElement("div");

    closeDivBotton.appendChild(closeDivBottonChild);
    closeDivBotton.appendChild(closeDivBottonBG);
    closeDiv.appendChild(closeDivBotton);
    openProject.appendChild(closeDiv);


    closeDiv.setAttribute('id','closeDiv');
    closeDivBotton.setAttribute('id','closeDivBotton');
    closeDivBottonBG.setAttribute('id','closeDivBottonBG');



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
      // const img = <img src={image.src} srcSet={image.srcset}/>
      // return img;
      const img = document.createElement("img");
      const textDiv = document.createElement("div");
      const text = document.createTextNode("Hello World");
      
      img.src = image.src;
      img.srcset = image.srcset;
      openProject.appendChild(img);

      textDiv.appendChild(text);
      textDiv.classList.add('textDiv');
      openProject.appendChild(textDiv);
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