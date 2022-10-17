import React from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import styles from '../../styles/Data.module.css'
import Image from 'next/image'
import Link from 'next/link'

const basePath = '/images/PhotosProfiles'

const fetcher = (url) => fetch(url).then((res) => res.json());

const Post = () => {
  const router = useRouter()

  const { data } = useSWR('/api/staticdata', fetcher)
  const posts = JSON.parse(data)

  const post = posts.filter((post)=> post.id==router.query.data)

  return (
    <div className={`${styles["card"]}`}>
    <div className={`${styles["profPicAndName"]}`}>
    <Link href="#">
      <Image src={`${basePath}/${post[0].profPic}`}
      width="70" 
      height="70"
      objectFit='cover'
      />
    </Link>
    <Link href='#'>{post[0].username}</Link>
    </div>
    <div className={`${styles["description"]}`}>
      <Link 
        href="#"          
        className={`${styles["dropbtn"]}`}>
          send a message &#9993;
      </Link>
      <p>{post[0].description}</p>
    </div>
    <div className={`${styles["photoCard"]}`}>
          <Image src={`${basePath}/${post[0].photo}`} layout="fill" />
    </div>
  </div>
  )
}

export default Post