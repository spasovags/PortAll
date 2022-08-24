import styles from '../styles/Navbar.module.css'
import { useState } from "react";
import Image from 'next/image'
import logo from './icons/logo.avif'

const Navbar = () => {
  // function toggleNavMenu() {
    // const navMenu = document.querySelector('.nav-links-container')
    // navMenu.classList.toggle('hideMenu')
    // const menuIcon = document.querySelector('.menu-container')
    // menuIcon.classList.toggle('active')

    const [isModal, setIsModal] = useState(true);
    const contentClassname = isModal
        ? `${styles["hideMenu"]} ${styles["nav-links-container"]}`
        : `${styles["nav-links-container"]}`;

  return (
    <div className={`${styles["nav-background"]}`}>
      <div className={`${styles["navbar-container"]}`}>
        <div className={`${styles["logo-close-container"]}`}>
          <a href="#">
            <Image src={logo} height={45} width={60} alt="Link home" />
          </a>
          <div href="#" className={`${styles["menu-container"]} 
          ${styles["icon"]}`} onClick={() => setIsModal(!isModal)}>
            <span className={`${styles["span-top"]}`}></span>
            <span className={`${styles["span-middle"]}`}></span>
            <span className={`${styles["span-bottom"]}`}></span>
          </div>
        </div>
        <div className={contentClassname}>
          <div className={`${styles["dropdown"]}`}>
            <button className={`${styles["dropbtn"]}`}>Dropdown</button>
            <div className={`${styles["dropdown-content"]}`}>
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
          <div className={`${styles["dropdown"]}`}>
            <button className={`${styles["dropbtn"]}`}>Dropdown</button>
            <div className={`${styles["dropdown-content"]}`}>
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
          <div className={`${styles["dropdown"]}`}>
            <button className={`${styles["dropbtn"]}`}>Dropdown</button>
            <div className={`${styles["dropdown-content"]}`}>
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
          <div className={`${styles["dropdown"]}`}>
            <button className={`${styles["dropbtn"]}`}>Dropdown</button>
            <div className={`${styles["dropdown-content"]}`}>
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
