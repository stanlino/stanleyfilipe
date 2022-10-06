import type { NextPage } from 'next'
import Head from 'next/head'
import { HomeHeaderPresentation } from '../components/home_header_presentation'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stanley Filipe</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
        <HomeHeaderPresentation />

        <p className={styles.description}>
          ReactJS, React Native, NodeJS!
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/stanlino" className={styles.card}>
            <h2>Github &rarr;</h2>
            <p>browse my personal projects</p>
          </a>

          <a href="https://www.linkedin.com/in/stanley-filipe-neiva-298465164/" className={styles.card}>
            <h2>Linkedin &rarr;</h2>
            <p>See a little about me and what I follow</p>
          </a>
        </div>
      </main>
    </div>
  )
}

export default Home
