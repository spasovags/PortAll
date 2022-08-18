import styles from '../styles/Navbar.module.css'
import React from 'react'
// import logo from '../components/icons/logo192.png'

const Navbar = () => {
  function toggleNavMenu() {
    const navMenu = document.querySelector('.nav-links-container')
    navMenu.classList.toggle('hideMenu')
    const menuIcon = document.querySelector('.menu-container')
    menuIcon.classList.toggle('active')
  }
  return (
    <div className={`${styles["nav-background"]}`}>
      <div className={styles.navbar-container}>
        <div className={styles.logo-close-container}>
          <a href="#">
            <img src={logo} width="auto" height="40px" alt="Logo" />
          </a>
          <div href="#" className={`${styles[menu-container]} 
          ${styles[icon]}`} onClick={toggleNavMenu}>
            <span className={styles.span-top}></span>
            <span className={styles.span-middle}></span>
            <span className={styles.span-bottom}></span>
          </div>
        </div>
        <div className={`${styles[nav-links-container]} 
        ${styles[hideMenu]}`}>
          <div className="dropdown">
            <button className="dropbtn">Dropdown</button>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Dropdown</button>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Dropdown</button>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Dropdown</button>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
