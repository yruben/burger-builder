import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItems'
import Logo from '../../Logo/Logo'
import styles from './Toolbar.module.css'

const toolbar = (props) => (
  <header className={styles.Toolbar}>
    <div>MENU</div>
    <Logo/>
    <nav>
      <NavigationItems/>
    </nav>
  </header>
)

export default toolbar