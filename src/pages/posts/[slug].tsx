import { GetServerSideProps } from 'next'
import Head from 'next/head'
import React from 'react'
import { IPost } from '../../dtos/Post'
import { getPostsByUID } from '../../services/prismic'

import {
  Main, 
  PostContent
} from './post.styles'

interface PostProps {
  post: IPost
}

export default function Post({ post } : PostProps){
  return (
    <>
      <Head>
        <title>
          {post.title}
        </title>
        <meta name="description" content={post.subtitle} />
        <meta name="author" content={post.author} />
        <meta name="keywords" content={post.tags} />
      </Head>
      <Main>
        <article>
          <h1>{post.title}</h1>
          <h2>{post.subtitle}</h2>
          <time>{post.createdAt}</time>
          <PostContent dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
        <footer>
          <time>Atualizado em {post.updatedAt}</time>
          <span>{post.author}</span>
        </footer>
      </Main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {

  const { slug } = params as any

  const { notFound, post } = await getPostsByUID(req, 'post', String(slug), {
    lang: '*'
  })

  return {
    props: {
      post
    },
    notFound
  }

}