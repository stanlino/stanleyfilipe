import { asHTML, asText } from '@prismicio/helpers'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import React from 'react'
import { createClient } from '../../../prismicio'

import {
  Main
} from './post.styles'

interface PostProps {
  post: {
    slug: string
    title: string
    content: string
    updatedAt: string
    createdAt: string
    subtitle: string
    author: string
  }
}

export default function Post({ post } : PostProps){
  return (
    <>
      <Head>
        <title>
          {post.title}
        </title>
      </Head>
      <Main>
        <article>
          <h1>{post.title}</h1>
          <h2>{post.subtitle}</h2>
          <time>{post.createdAt}</time>
          <div className='post-content' dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </Main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {

  const { slug } = params as any

  const prismic = createClient(req) 

  let response;

  try {
    response = await prismic.getByUID('post', String(slug), {
      lang: '*',
    })
  } catch (error) {
    return {
      notFound: true
    }
  }

  const post = {
    slug, 
    title: asText(response.data.title),
    author: response.data.author,
    subtitle: response.data.subtitle,
    content: asHTML(response.data.content),
    createdAt: new Date(response.first_publication_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    }),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }

  return {
    props: {
      post
    }
  }

}