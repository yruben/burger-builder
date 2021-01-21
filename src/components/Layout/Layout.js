import React from 'react'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import styles from './Layout.module.css'

const layout = ( props ) => (
  <>
    {/*<div>Toolbar, SideDrawer,Backdrop</div>*/}
    <Toolbar />
    <SideDrawer/>
    <main className={styles.content}>
      {props.children}
    </main>
  </>
)

export default layout