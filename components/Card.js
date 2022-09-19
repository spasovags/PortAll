import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Card.module.css'

function Card(props) {
  const profile = props.value;
  const basePath = '/images/PhotosProfiles'

   return (
    <div>     
      <section className={`${styles["card"]}`}>
        <div className={`${styles["profPicAndName"]}`}>
          <Link href="#">
            <Image src={`${basePath}/${profile.photo}`}
            width="70" 
            height="70"
            objectFit='cover'
            />
          </Link>
          <Link href='#'>{profile.username}</Link>
        </div>
        <div className={`${styles["description"]}`}>
          <p>{profile.description}</p>
          {/*<button className={`${styles["dropbtn"]}`}>read more</button>*/}
        </div>
        <div className={`${styles["photoCard"]}`}>
          <Image src={`${basePath}/${profile.photo}`} layout="fill" objectFit='contain'/>
        </div>
      </section>
    </div>
  )
}

export default Card