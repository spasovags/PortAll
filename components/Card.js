import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Card.module.css'
import { useInView } from 'react-intersection-observer';

const Card = (props) => {
  const post = props.value;
  const basePath = '/images/PhotosProfiles'
  const { ref: cardRef, inView: IsCardsVisible } = useInView({triggerOnce: true});
  const { ref: shakeRef, inView: IsShakenVisible } = useInView({triggerOnce: true});

   return (
      <section className={`${styles["card"]} ${IsCardsVisible ? styles.animCard : ""}`}
      ref={cardRef} >
        <div className={`${styles["profPicAndName"]}`}>
          <Link href="#">
            <a>
            <Image src={`${basePath}/${post.profPic}`}
            width="70" 
            height="70"
            objectFit='cover'
            alt={post.alt}
            />
            </a>
          </Link>
          <Link href='#'><a>{post.username}</a></Link>
        </div>
        <div className={`${styles["description"]}`}>
          <Link href="#" >
           <a
            className={`${styles["message-btn"]}`}>
             send message <span 
              className={`${IsShakenVisible ? styles.shakeitoff : ""}`}
               ref={shakeRef}>           
               &#9993;
               </span>
           </a>
          </Link>          
          <p>{post.description}</p>
          <Link 
            href={{
              pathname: '/posts/[...data]',
              query: { data: post.id },
            }}>
            <a
              className={`${styles["read-more-btn"]}`}>
              read more
            </a>
          </Link>
        </div>
        <div className={`${styles["photoCard"]}`}>
          <Image src={`${basePath}/${post.photo}`} layout="fill" alt={post.alt}/>
        </div>
      </section>
   );
}

export default Card