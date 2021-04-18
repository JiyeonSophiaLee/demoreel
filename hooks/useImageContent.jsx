import Image from 'next/image'


function useImageContent(useImageContent){
    const loadingImages = 
      <div className="alinedImages">
        {useImageContent.map((project)=>{
          if(project.fileNames === null){
            return <div key={project.src} className="mainContent content">{project.src}</div>
          }else{
            const content = [];    
            project.fileNames.forEach((name,i)=>{
              let _name = project.src+name;
              let _className = project.artstation !== null ? "" : project.main === i ? 'mainContent content' : 'subContent content';
              // console.log(_className)
              let _image = <Image layout="responsive" key={_name} width={project.size.width} height={project.size.height} alt={project.alt} src={_name} className={_className}/>;
              console.log('_image',_image)

              if(project.artstation!==null){
                let className = project.main === i ? 'mainContent content' : 'subContent content';
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
    return loadingImages
}

export default useImageContent;