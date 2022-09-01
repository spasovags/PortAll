import styles from '../styles/Navbar.module.css'
import { useState } from "react";
import Link from 'next/link'
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

    const [isActive, setIsActive] = useState(false);
    const hambClassname = isActive
            ? `${styles["active"]} ${styles["menu-container"]} ${styles["icon"]}`
            : `${styles["menu-container"]} ${styles["icon"]}`;
    

  return (
    <div className={`${styles["nav-background"]}`}>
      <div className={`${styles["navbar-container"]}`}>
        <div className={`${styles["logo-close-container"]}`}>
          <Link href="#">
            <Image src={logo} height={45} width={60} alt="Link home" />
          </Link>
          <div href="#" className={hambClassname} 
          onClick={() => {setIsModal(!isModal); setIsActive(!isActive)}}>
            <span className={`${styles["span-top"]}`}></span>
            <span className={`${styles["span-middle"]}`}></span>
            <span className={`${styles["span-bottom"]}`}></span>
          </div>
        </div>
        <div className={contentClassname}>
          <div className={`${styles["dropdown"]}`}>
            <button className={`${styles["dropbtn"]}`}>Dropdown</button>
            <div className={`${styles["dropdown-content"]}`}>
              <Link href="#">Link 1</Link>
              <Link href="#">Link 2</Link>
              <Link href="#">Link 3</Link>
            </div>
          </div>
          <div className={`${styles["dropdown"]}`}>
            <button className={`${styles["dropbtn"]}`}>Dropdown</button>
            <div className={`${styles["dropdown-content"]}`}>
              <Link href="#">Link 1</Link>
              <Link href="#">Link 2</Link>
              <Link href="#">Link 3</Link>
            </div>
          </div>
          <div className={`${styles["dropdown"]}`}>
            <button className={`${styles["dropbtn"]}`}>Dropdown</button>
            <div className={`${styles["dropdown-content"]}`}>
              <Link href="#">Link 1</Link>
              <Link href="#">Link 2</Link>
              <Link href="#">Link 3</Link>
            </div>
          </div>
          <div className={`${styles["dropdown"]}`}>
            <button className={`${styles["dropbtn"]}`}>Dropdown</button>
            <div className={`${styles["dropdown-content"]}`}>
              <Link href="#">Link 1</Link>
              <Link href="#">Link 2</Link>
              <Link href="#">Link 3</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
