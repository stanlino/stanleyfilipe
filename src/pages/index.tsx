import type { NextPage } from 'next'
import Head from 'next/head'
import { HomeHeaderPresentation } from '../components/home_header_presentation'
import { MyStacks } from '../components/my_stacks'
import { Container, Grid, Main } from '../styles/home.styles'

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Stanley Filipe</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        
        <HomeHeaderPresentation />

        <MyStacks />

        <Grid>
          <a href="https://github.com/stanlino" className='card'>
            <h2>Github &rarr;</h2>
            <p>browse my personal projects</p>
          </a>

          <a href="https://www.linkedin.com/in/stanley-filipe-neiva-298465164/" className='card'>
            <h2>Linkedin &rarr;</h2>
            <p>See a little about me and what I follow</p>
          </a>
        </Grid>
      </Main>
    </Container>
  )
}

export default Home
