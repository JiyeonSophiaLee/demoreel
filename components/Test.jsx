import { useContext, memo, useCallback, useRef, useEffect, useReducer} from 'react';
import { MdPhoneIphone } from 'react-icons/md'; 
import { FaArtstation } from 'react-icons/fa'; 
import { ImAddressBook } from 'react-icons/im'; 
import Image from 'next/image';
import RunSvgFrame from "../public/assets/js/SvgFrame.js";

// import { ExtendMenuContext } from './HomeLayout.jsx';
// import { SvgFrameContext } from './HomeLayout.jsx';
export default function Test(){
    let svgFrameRef = useRef( new RunSvgFrame("working", 1));
    useEffect(()=>{
    //   svgFrameRef =  new RunSvgFrame("working", 1)
      svgFrameRef =  demo;
        // svgFrameRef = test
    },[])
    const onClick=(e)=>{
        console.log('working',svgFrameRef)
        // console.log(e)
    }
    return(
        <div id="working" style={{color:"white", fontSize:"100px"}} onClick={onClick}>
            working
        </div>
    )
}