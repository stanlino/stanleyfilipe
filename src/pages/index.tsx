import type { NextPage } from 'next'
import Head from 'next/head'
import { Greetings } from '../components/greetings'
import { Redirects } from '../components/redirects'
import { Skills } from '../components/skills'
import { Container } from '../styles/home.styles'

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Stanley Filipe</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        
        <Greetings />

        <Skills />

        <Redirects />
        
      </main>
    </Container>
  )
}

export default Home
