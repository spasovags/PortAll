import React from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json());

const Post = () => {
  const router = useRouter()

  const { data } = useSWR('/api/staticdata', fetcher)
  const posts = JSON.parse(data)

  const post = posts.filter((post)=> post.id==router.query.data)

  return (
    <h1 style={{color:'red'}}>{post[0].id}</h1>
  )
}

export default Post