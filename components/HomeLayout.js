import Demo from './Demo'
import Menu from './Menu'
import {useEffect, useState} from "react"




const HomeLayout = () =>{ 
  const [menuExtended,setMenuExtended] = useState(false);
  const [biggerElem,setBiggerElem] =useState(null);
  const [count,setCount] = useState(0);

  function switchMenuExtended(){
    setMenuExtended(!menuExtended);
  }
  function getSetBiggerElem(elem){
    setBiggerElem(elem)
  }

  return(
    <div id = "master">
      <Demo/>
      {/* <Menu switchMenuExtended={switchMenuExtended} getSetBiggerElem={getSetBiggerElem}/> */}
    </div>
  )
} 

export default HomeLayout

