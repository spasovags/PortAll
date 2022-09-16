import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import one from '../components/images/1.png'
import two from '../components/images/2.png'
import three from '../components/images/3.png'
import styles from '../styles/Card.module.css'

function Card(props) {
  const profile = props.value;
   return (
    <div>     
      <section className={`${styles["card"]}`}>
        <div className={`${styles["profPicAndName"]}`}>
          <Link href="#">
            <Image src={one}
            width="70" 
            height="70"
            objectFit='cover'
            />
          </Link>
          <Link href='#'>{profile.username}</Link>
        </div>
        <div className={`${styles["description"]}`}>
          <p>Medium length description. 
            Let's add a few more words here.
          </p>
          {/*<button className={`${styles["dropbtn"]}`}>read more</button>*/}
        </div>
        <div className={`${styles["photoCard"]}`}>
          <Image src={one} layout='responsive'/>
        </div>
      </section>
    </div>
  )
}

export default Card