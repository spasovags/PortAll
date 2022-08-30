import React from 'react'
import Image from 'next/image'
import one from '../components/images/1.png'
import two from '../components/images/2.png'
import three from '../components/images/3.png'
import styles from '../styles/Card.module.css'

const Card = () => {
  return (
    <div>     
      <div className={`${styles["card"]}`}>
        <div className={`${styles["profPicAndName"]}`}>
          <Image src={one}
          width="70" 
          height="70"
          objectFit='cover'
          />
          <a href='#'> John Doe</a>
        </div>
        <p>Medium length description. Let's add a few more words here.</p>
        <div className={`${styles["photoCard"]}`}>
          <Image src={one} layout='responsive'/>
        </div>
      </div>
      <div className={`${styles["card"]}`}>
        <div className={`${styles["profPicAndName"]}`}>
        <Image src={two}
          width="70" 
          height="70"
          objectFit='cover'
          />
          <a href='#'> John Doe</a>
         </div>
        <p>Medium length description. Let's add a few more words here.</p>
        <div className={`${styles["photoCard"]}`}>
          <Image src={two} layout='responsive'/>
        </div>
      </div>
      <div className={`${styles["card"]}`}>
       <div className={`${styles["profPicAndName"]}`}>
        <Image src={two}
          width="70" 
          height="70"
          objectFit='cover'
          />
          <a href='#'> John Doe</a>
         </div>
        <p>Medium length description. Let's add a few more words here.</p>
        <div className={`${styles["photoCard"]}`}>
          <Image src={three} layout='responsive'/>
        </div>
      </div>
  </div>
  )
}

export default Card