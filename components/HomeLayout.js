import Demo from './Demo'
import Menu from './Menu'
import {createContext, useEffect, useState, useContext, useReducer, memo, useCallback} from "react"
// import gsap from 'gsap';
// import TV from '../public/assets/js/transitionValue'
import { homeGsapSet, homeGsapTransition} from './funcs'



export const ExtendMenuContext = createContext();
export const LogoDisplayContext = createContext();




const logoDisplayReducer = (state,action)=>{
  if(innerWidth > 800){
    if(innerWidth > innerHeight){
      if(action.demoClientHeight/3 < action.logoClientWidth*4.5/6){
        state = { logo_heigher: "none", logo_wider:"initial"}
        return state
      }else{
        state = { logo_heigher: "initial", logo_wider:"none"}
      return state
      }
    }else{
      state = { logo_heigher: "initial", logo_wider:"none"}
      return state
    }
  }else{
    state = { logo_heigher: "none", logo_wider:"initial"}
    return state
  }
}


const HomeLayout = () =>{ 
  console.log('---HomeLayout---')
  const [menuExtended,setMenuExtended] = useState(false);
  const [biggerElem,setBiggerElem] = useState(null);
  const [biggeredElem,setBiggeredElem] = useState(null);
  let _menuExtended = menuExtended;
  let mobileMode, _mobileMode ;

  
  
  const [logoDisplay, logoDisplayDispatch] = useReducer(logoDisplayReducer,{logo_heigher:'none', logo_wider:'none'});
  

  
  
  useEffect(()=>{
    mobileMode = innerWidth <= 800 ? true : false; 
    
    // homeGsapTransition();
  },[])

  useEffect(()=>{
    let updateResize = () =>{
      _mobileMode = innerWidth <= 800 ? true : false; 



      if(mobileMode !== _mobileMode){
        console.log('changed')
        mobileMode = !mobileMode;
        homeGsapSet(_menuExtended);
      }
    }
    window.addEventListener('resize',updateResize);
    return ()=>{
      window.removeEventListener('resize',updateResize);
    }
  },[])

  const runSetMenuExtended = useCallback(()=>{
    setMenuExtended(!menuExtended)
  },[menuExtended]);

  const runSetBiggerElem = useCallback((elem)=>{
    console.log('elem ID ===> ',elem);
    setBiggerElem(elem);
  },[biggerElem]);

  
  

  const extendMenu = useCallback((elem)=>{
    console.log('clicked ---elemId', elem)
    if(menuExtended === false){
      runSetMenuExtended;
      _menuExtended = true;
      // runSetBiggerElem(elem);

      // setBiggerElem(elem);


    //   extendMenuIf();

    }else if( biggerElem !== elem){
    //   setBiggeredElem(biggerElem);
    //   setBiggerElem(elem);
    
    }else{
      runSetMenuExtended;
    //   _menuExtended = false;
    //   setBiggeredElem(null);
    //   setBiggerElem(null);

    //   extendMenuElse();
    }
  },[menuExtended]) 

  function extendMenuIf(){
    homeGsapTransition(_menuExtended);
    if(innerWidth > 800){
      // logoDisplayDispatch({demoClientHeight:})
    }
  }
  function extendMenuElse(){
    homeGsapTransition(_menuExtended);
  }


  return(
    <div id = "master">
      <ExtendMenuContext.Provider value={extendMenu}>
        <LogoDisplayContext.Provider  value={{logoDisplay:logoDisplay, logoDisplayDispatch:logoDisplayDispatch}}>
          <Demo />
          <Menu/>
        </LogoDisplayContext.Provider>
      </ExtendMenuContext.Provider>
    </div>
  )
} 

export default memo(HomeLayout)