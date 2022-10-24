import React from 'react'

import { GetServerSideProps } from 'next'
import { asText } from '@prismicio/helpers'
import Head from 'next/head'
import Link from 'next/link'

import { createClient } from '../../../prismicio'

import {
  Main
} from './posts.styles'
import { getFormattedPosts } from '../../services/prismic'

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

export const getServerSideProps: GetServerSideProps = async ({ previewData, query }) => {

  const lang = query.hasOwnProperty('lang') ? String(query.lang) : 'pt'

  const { posts, notFound } = await getFormattedPosts(previewData, { lang, pageSize: 100 })  

  return {
    props: {
      posts
    },
    notFound
  }

}