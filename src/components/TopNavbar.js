import React from 'react'
import styles from './styles/TopNavbar.module.css'

const TopNavbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_logo__container}>
        <img src={require('../data/assets/logo.svg').default} alt='' className={styles.navbar_logo}/>
      </div>
      <ul>
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#domains'>Domains</a></li>
        <li><a href='#prizes'>Prizes</a></li>
        <li><a href='#timeline'>Timeline</a></li>
        <li><a href='#sponsors'>Sponsors</a></li>
        <li><a href='#faq'>FAQs</a></li>
      </ul>
      <div className={styles.navbar_hamburger__container}>
        <img src={require('../data/assets/hamburger.svg').default} alt='' className={styles.navbar_hamburger}/>
      </div>
    </nav>
  )
}

export default TopNavbar