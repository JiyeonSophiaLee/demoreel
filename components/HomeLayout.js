import Demo from './Demo'
import Menu from './Menu'


const elem = new Date().toLocaleTimeString()

const HomeLayout = ({children}) =>{
  return(
    <div id = "master">
      <Demo/>
      <Menu/>
    </div>
  )
} 

export default HomeLayout

