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

  const { data, error } = useSWR('/api/staticdata', fetcher)
  const posts = JSON.parse(data)
  console.log(posts)
  let post = null
  try {
    post = posts.filter((post)=> post.id==router.query.data)
    console.log('post : ', post)
  } catch (err) {
    console.log('Error: ', err.message);
  }
  if (error) return (<p>An error has occurred.</p>)
  if (!post) return (<p>Loading...</p>)
 
  return (
    <div className={`${styles["card"]}`}>
    <div className={`${styles["profPicAndName"]}`}>
    <Link href="#">
      <a>
      <Image src={`${basePath}/${post[0].profPic}`}
      width="70" 
      height="70"
      objectFit='cover'
      />
      </a>
    </Link>
    <Link href='#'><a>{post[0].username}</a></Link>
    </div>
    <div className={`${styles["description"]}`}>
      <Link href="#" >
       <a
        className={`${styles["message-btn"]}`}>
          send message &#9993;
       </a>
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