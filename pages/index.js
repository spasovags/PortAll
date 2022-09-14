import Head from 'next/head'
import Card from '../components/Card'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {

  const { data, error } = useSWR('/api/staticdata', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  const profiles = data.map((profile) =>
    <Card key={profile.id} value={profile} />)

  return (
    <div>
      <Head>
        <title>PortAll</title>
        <meta name="description" content="Find job, friends and sponsors" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      {profiles}
    </div>
  )
}
