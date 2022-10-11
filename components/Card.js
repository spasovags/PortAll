import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Card.module.css'

function Card(props) {
  const post = props.value;
  const basePath = '/images/PhotosProfiles'

   return (
      <section className={`${styles["card"]}`}>
        <div className={`${styles["profPicAndName"]}`}>
          <Link href="#">
            <Image src={`${basePath}/${post.profPic}`}
            width="70" 
            height="70"
            objectFit='cover'
            />
          </Link>
          <Link href='#'>{post.username}</Link>
        </div>
        <div className={`${styles["description"]}`}>
          <p>{post.description}</p>
          <Link 
            href={{
              pathname: '/posts/[data]',
              query: { data: post },
            }}          
            className={`${styles["dropbtn"]}`}>
            read more
          </Link>
        </div>
        <div className={`${styles["photoCard"]}`}>
          <Image src={`${basePath}/${post.photo}`} layout="fill" />
        </div>
      </section>
  )
}

export default Card