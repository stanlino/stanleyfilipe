import React from 'react'

import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { getPostsPreview } from '../../services/prismic'
import { IPostPreview } from '../../dtos/PostPreview'

import {
  Main
} from './posts.styles'

interface PostsProps {
  posts: IPostPreview[]
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
                <time>{post.createdAt}</time>
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

  const { posts, notFound } = await getPostsPreview(previewData, { lang, pageSize: 100 })  

  return {
    props: {
      posts
    },
    notFound
  }

}