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
        <title>Posts</title>
      </Head>

      <Main>
        <div className='posts'>
          { posts.map(post => (
            <Link href={`posts/${post.slug}`} key={post.slug}>
              <time>{post.createdAt}</time>
              <strong>{post.title}</strong>
              <p>{post.excerpt}</p>
            </Link>
          )) }
        </div>
      </Main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ previewData }) => {

  const { posts, notFound } = await getPostsPreview(previewData, { 
    pageSize: 100,
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
    notFound
  }

}