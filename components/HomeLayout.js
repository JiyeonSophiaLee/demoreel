import styles from '../styles/homeLayout.module.scss'
import Demo from './Demo'
import Menu from './Menu'


const elem = new Date().toLocaleTimeString()

const HomeLayout = ({children}) =>{
  return(
    <div className = {styles.master}>
      <Demo/>
      <Menu/>
    </div>
  )
} 

export default HomeLayout

