import { BackToTop, Footer, Navbar } from '../../components'
import { Outlet } from 'react-router-dom'
import RouteSeo from '../../seo/RouteSeo'
import styles from './parent.module.scss'

const Parent = () => {
  return (
    <div className={styles.parent}>
      <RouteSeo />
      <Navbar />
      <div className={styles.content}>
        <Outlet />
      </div>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default Parent
