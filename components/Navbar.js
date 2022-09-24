import styles from '../styles/Navbar.module.css'
import { useState } from "react";
import Link from 'next/link'
import Image from 'next/image'
import logo from './icons/logo.avif'

const Navbar = () => {
  
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
            <button className={`${styles["dropbtn"]}`}>account</button>
            <div className={`${styles["dropdown-content"]}`}>
              <Link href="#">options</Link>
              <Link href="#">data</Link>
              <Link href="#">blah blah</Link>
            </div>
          </div>
          <div className={`${styles["dropdown"]}`}>
            <button className={`${styles["dropbtn"]}`}>settings</button>
            <div className={`${styles["dropdown-content"]}`}>
              <Link href="#">payment</Link>
              <Link href="#">history</Link>
              <Link href="#">blah blah</Link>
            </div>
          </div>
          <div className={`${styles["dropdown"]}`}>
            <button className={`${styles["dropbtn"]}`}>messages</button>
            <div className={`${styles["dropdown-content"]}`}>
              <Link href="#">settings</Link>
              <Link href="#">blah blah</Link>
              <Link href="#">setting</Link>
            </div>
          </div>
          <div className={`${styles["dropdown"]}`}>
            <button className={`${styles["dropbtn"]}`}>for you</button>
            <div className={`${styles["dropdown-content"]}`}>
              <Link href="#">new stuff</Link>
              <Link href="#">matches</Link>
              <Link href="#">blah blah</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
