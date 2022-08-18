import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PortAll</title>
        <meta name="description" content="Find job, friends and sponsors" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>new stuff </h1>

      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
