import { Footer, Navbar } from '../../components'
import { Outlet } from 'react-router-dom'
import styles from './parent.module.scss'

const Parent = () => {
  return (
    <div className={styles.parent}>
        <Navbar/>
        <Outlet />
        <Footer/>
    </div>
  )
}

export default Parent