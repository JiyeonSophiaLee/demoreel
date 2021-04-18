import { workImages } from '../../../public/assets/js/images.js'
import useImageContent from '../../../hooks/useImageContent.jsx'



function WorkContent(){
  
  const loadingImages = useImageContent(workImages);


  return(
    <>
      { loadingImages }
    </>
  )
}

export default WorkContent