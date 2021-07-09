import { useEffect } from "react";
import astronaut, {callAstronaut} from "../public/assets/js/astronaut";

function AustronautTest(){
    useEffect(()=>{
        astronaut()
        callAstronaut('work');
    })
    return(
        <div id="threeJSCanvas"></div>
    )
}
export default AustronautTest;