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
          <time>{post.updatedAt}</time>
          <div className='post-content' dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </Main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {

  const { slug } = params as any

  const prismic = createClient(req)

  const response = await prismic.getByUID('post', String(slug), {})

  const post = {
    slug, 
    title: asText(response.data.title),
    content: asHTML(response.data.content),
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