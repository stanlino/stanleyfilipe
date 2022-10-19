import type { NextPage } from 'next'
import Head from 'next/head'

import { Container } from '../styles/home.styles'

import { Greetings } from '../components/greetings'
import { Redirects } from '../components/redirects'
import { Skills } from '../components/skills'
import { About } from '../components/about'
import { Diplomas } from '../components/diplomas'

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Stanley Filipe</title>
        <meta name="description" content="Hi, my name is Stanley! I am a Javascript developer!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        
        <Greetings />

        <Skills />

        <Redirects />

        <About />
        
        <Diplomas />

      </main>
    </Container>
  )
}

export default Home
