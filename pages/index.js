import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.parentHome}>
      <Head>
        <title>PortAll</title>
        <meta name="description" content="Find job, friends and sponsors" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${styles["card"]}`}>
        <h1>Title - Card 1</h1>
        <p>Medium length description. Let's add a few more words here.</p>
        <div className={`${styles["photoCard"]}`}></div>
      </div>
      <div className={`${styles["childHome"]}`}>
      <h1>Title - Card 1</h1>
        <p>Medium length description. Let's add a few more words here.</p>
        <div className={`${styles["photoCard"]}`}></div>
      
      </div>
      <div className={`${styles["childHome"]}`}>
      <h1>Title - Card 1</h1>
        <p>Medium length description. Let's add a few more words here.</p>
        <div className={`${styles["photoCard"]}`}></div>
      
      </div>
    </div>
  )
}
