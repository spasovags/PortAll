import Head from 'next/head'
import Card from '../components/Card'

export default function Home() {
  return (
    <div>
      <Head>
        <title>PortAll</title>
        <meta name="description" content="Find job, friends and sponsors" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Card/>
    </div>
  )
}
