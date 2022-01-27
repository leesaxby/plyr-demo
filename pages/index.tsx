import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Plyr Demo</title>
        <meta name="description" content="Plyr video demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <div id="player">
        <iframe
          src="https://www.youtube.com/embed/bTqVqk7FSmY?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
          allow="autoplay">
 
          </iframe>
      </div>
      </main>
    </div>
  )
}

export default Home
