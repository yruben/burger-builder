import React from 'react'
import styles from './Logo.module.css'
import burgerLogo from '../../assets/images/burger-logo.png'

const logo = () => (
  <div className={styles.Logo}>
    <img src={burgerLogo} alt="My Burger Builder"/>
  </div>
)

export default logo