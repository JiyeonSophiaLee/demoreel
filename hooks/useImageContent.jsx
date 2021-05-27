const prefix = process.env.NEXT_PUBLIC_PREFIX;


function useImageContent(useImageContent){
    const onClick = (e,url)=>{
      e.stopPropagation()
      window.open(url)
    }
    const getImg = (name, alt)=>{
      if(prefix){
        try{
          // return <img src={require("/demoreel/assets/images/pictures/myPic.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1200sizes[]=2000")} alt="Picture of Sophia"/>
          const url = require("/demoreel"+name+"?resize&sizes[]=300&sizes[]=600&sizes[]=1200sizes[]=2000")
          return <img src={url.src} srcSet={url.srcSet} alt={alt}/>
        }catch(e){
          console.log('web error',e)
        }
      }else{
        try{
          // return <img src={require("../../../public/assets/images/pictures/myPic.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1200sizes[]=2000")} alt="Picture of Sophia"/>
          const url = require("../public"+name+"?resize&sizes[]=300&sizes[]=600&sizes[]=1200sizes[]=2000")
          return <img src={url.src} srcSet={url.srcSet} alt={alt}/>
        }catch{
          console.log('local error')
        }
      }
    }
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