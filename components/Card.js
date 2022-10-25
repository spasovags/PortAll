import React, {useRef} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Card.module.css'
import { useInView } from 'react-intersection-observer';

const Card = (props) => {
  const post = props.value;
  const basePath = '/images/PhotosProfiles'
  const { ref: cardRef, inView: IsCardsVisible } = useInView({triggerOnce: true});

   return (
      <section className={`${styles["card"]} 
      ${IsCardsVisible ? `${styles["animCard"]}` : ''}`}
      ref={cardRef} >
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
          <Link href="#" >
           <a
            className={`${styles["message-btn"]}`}>
             send message &#9993;
           </a>
          </Link>          
          <p>{post.description}</p>
          <Link 
            href={{
              pathname: '/posts/[data]',
              query: { data: post.id },
            }}>
            <a
              className={`${styles["read-more-btn"]}`}>
              read more
            </a>
          </Link>
        </div>
        <div className={`${styles["photoCard"]}`}>
          <Image src={`${basePath}/${post.photo}`} layout="fill" />
        </div>
      </section>
   );
}

export default Card