import Image from 'next/image'


function useImageContent(useImageContent){
    const loadingImages = 
      <div className="alinedImages">
        {useImageContent.map((project)=>{
          if(project.fileNames === null){
            return <div key={project.src} className="mainContent content videos">{project.src}</div>
          }else{
            const content = [];    
            project.fileNames.forEach((name,i)=>{
              let _name = project.src+name;
              let _className = project.main === i ? 'mainContent content' : 'subContent content';
              let _image = <Image layout="responsive" key={_name} width={project.size.width} height={project.size.height} alt={project.alt} src={_name} />;
              let output;

              if(project.artstation!==null){
                // let className = project.main === i ? 'mainContent content' : 'subContent content';
                output = <a herf={project.artstation} key={_name} target="_blank" className={_className}>{_image}</a>;
              }else{
                output = <div className={_className}>{_image}</div>;
              }



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