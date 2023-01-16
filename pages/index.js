import Head from 'next/head'
import Cards from '../components/Cards'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {

  const { data, error } = useSWR('/api/staticdata', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  const profiles = JSON.parse(data)

  return (
    <>
      <Head>
        <title>PortAll</title>
        <meta name="description" content="Find job, friends and sponsors" />
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet"></link>
      </Head>
      
      <Cards profiles={profiles}/>
    </>
  )
}
