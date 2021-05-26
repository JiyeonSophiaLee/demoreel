


function useImageContent(useImageContent){
    const onClick = (e,url)=>{
      e.stopPropagation()
      window.open(url)
    }
    const getImg = (name, alt)=>{
      const url = require("../public"+name+"?resize&sizes[]=300&sizes[]=600&sizes[]=1200sizes[]=2000")
      return <img src={url.src} srcSet={url.srcSet} alt={alt}/>
    }
    const prefix = ".";
    const loadingImages = 
      <div className="alinedImages">
        {useImageContent.map((project)=>{
          if(project.fileNames === null){
            return <div key={project.src} className="mainContent content videos">{project.src}</div>
          }else{
            const content = [];    
            project.fileNames.forEach((name,i)=>{
              let _name = project.src+prefix+name;
              let _className = project.main === i ? 'mainContent content' : 'subContent content';
              // let _image = <Image layout="responsive" width={project.size.width} height={project.size.height} alt={project.alt} src={_name} />;
              let _image = getImg(_name,project.alt);
              let output;

              if(project.artstation!==null){
                // let className = project.main === i ? 'mainContent content' : 'subContent content';
                output = <a onClick={(e)=>onClick(e,project.artstation)} herf={project.artstation} key={_name} target="_blank" className={_className}>{_image}</a>;
              }else{
                output = <div className={_className} key={_name}>{_image}</div>;
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