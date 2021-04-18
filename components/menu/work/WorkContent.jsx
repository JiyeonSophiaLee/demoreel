import { workImages } from '../../../public/assets/js/images.js'
import { useRef, useEffect } from 'react';
import Image from 'next/image'
import { useCallback } from 'react/cjs/react.development';

function WorkContent(){
  
  console.log('workImages',workImages)
  return(
    <div className="alinedImages">
      {workImages.map((project)=>{
        if(project.fileNames === null){
          return <div key={project.src}>{project.src}</div>
        }else{
          const content = [];    
          project.fileNames.forEach((name,i)=>{
            let _name = project.src+name;
            let _className = project.artstation !== null ? "" : project.main === i ? 'mainContent' : 'subContent';
            // console.log(_className)
            let _image = <Image layout="responsive" key={_name} width={project.size.width} height={project.size.height} alt={project.alt} src={_name} className={_className}/>;
              
            if(project.artstation!==null){
              console.log('i',i, project.main)
              let className = project.main === i ? 'mainContent' : 'subContent';
              let output = <a herf={project.artstation} target="_blank" className={className}>{_image}</a>;
                if(project.main === i){
                  content.splice(0,0,output)
                }else{
                  content.push(output)
                }
              }else{
                if(project.main === i){
                  content.splice(0,0,_image)
                }else{
                  content.push(_image)
                }
              }
            
          })
          return content
        }
      })}
    </div>
  )
}

export default WorkContent