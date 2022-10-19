import React from 'react'

import { GetStaticProps } from 'next'
import { asText } from '@prismicio/helpers'
import Head from 'next/head'
import Link from 'next/link'

import { createClient } from '../../../prismicio'

import {
  Main
} from './styles'

type Post = {
  slug: string
  title: string
  excerpt: string
  updatedAt: string
}

interface PostsProps {
  posts: Post[]
}

export default function Posts({ posts } : PostsProps){
  return (
    <>
      <Head>
        <title>Artigos</title>
      </Head>

      <Main>
        <div className='posts'>
          { posts.map(post => (
            <Link href={`posts/${post.slug}`} key={post.slug}>
              <a>
                <time>{post.updatedAt}</time>
                <strong>{post.title}</strong>
                <p>{post.excerpt}</p>
              </a>
            </Link>
          )) }
        </div>
      </Main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {

  const prismic = createClient({ previewData })

  const response = await prismic.getByType('post', {
    pageSize: 100
  })

  const posts = response.results.map(post => {
    return {
      slug: post.uid,
      title: asText(post.data.title),
      excerpt: post.data.content.find((content: { type: string }) => content.type === 'paragraph')?.text ?? '',
      updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  })

  return {
    props: {
      posts
    }
  }

}