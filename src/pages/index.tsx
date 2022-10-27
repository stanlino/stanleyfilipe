import type { GetStaticProps } from 'next'
import Head from 'next/head'

import { Container } from './home.styles'

import { Greetings } from '../components/greetings'
import { Redirects } from '../components/redirects'
import { Skills } from '../components/skills'
import { About } from '../components/about'
import { Diplomas } from '../components/diplomas'
import { LangSwitch } from '../components/atomic/lang_switch'
import { PostsPreview } from '../components/posts-preview'
import { useTranslation } from 'react-i18next'
import { getPostsPreview } from '../services/prismic'
import { IPostPreview } from '../dtos/PostPreview'

interface HomePageProps {
  postsInPortuguese: IPostPreview[]
  postsInEnglish: IPostPreview[]
}

export default function Home({ postsInEnglish, postsInPortuguese }: HomePageProps) {

  const { i18n } = useTranslation()

  const currentLang = i18n.language

  const posts = currentLang === 'en' ? postsInEnglish : postsInPortuguese
  
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

        <Redirects />
        
        <Diplomas />

      </main>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {

  const { posts: postsInPortuguese } = await getPostsPreview(previewData, { lang: 'pt', pageSize: 3 })
  const { posts: postsInEnglish } = await getPostsPreview(previewData, { lang: 'en', pageSize: 3 })

  return {
    props: {
      postsInPortuguese,
      postsInEnglish
    },
    revalidate: 60 * 60 // 1 hour in secconds
  }

}