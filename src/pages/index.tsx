import type { GetStaticProps } from 'next'
import Head from 'next/head'

import { Container } from './home.styles'

import { Greetings } from '../components/greetings'
import { Skills } from '../components/skills'
import { About } from '../components/about'
import { LangSwitch } from '../components/atomic/lang_switch'
import { PostsPreview } from '../components/posts-preview'
import { getPostsPreview } from '../services/prismic'
import { IPostPreview } from '../dtos/PostPreview'
import { Footer } from '../components/footer'

interface HomePageProps {
  posts: IPostPreview[]
}

export default function Home({ posts }: HomePageProps) {  
  return ( 
    <Container>
      <Head>
        <title>Stanley Filipe</title>
        <meta name="description" content="Hi, my name is Stanley! I am a Javascript developer!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
        <LangSwitch />
      </nav>

      <main>
        
        <Greetings />

        <Skills />

        <PostsPreview posts={posts} />

        <About />

      </main>

      <Footer />
      
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {

  const { posts } = await getPostsPreview(previewData, { 
    pageSize: 3, 
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc'
    },
    lang: 'pt-br'
  })

  return {
    props: {
      posts
    },
    revalidate: 60 * 60 // 1 hour in secconds
  }

}