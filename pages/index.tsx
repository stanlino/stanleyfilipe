import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
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
        <h1 className={styles.title}>
          Hi, my name is Stanley
        </h1>

        <p className={styles.description}>
          {`I'm a web and mobile developer`}
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

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
