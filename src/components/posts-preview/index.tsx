import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'

import {
  Ancora,
  Container
} from './styles'

type Post = {
  slug: string
  title: string
  excerpt: string
  updatedAt: string
}

interface PostsPreviewProps {
  posts: Post[]
}

export function PostsPreview({ posts }: PostsPreviewProps){

  const { i18n } = useTranslation()

  const currentLang = i18n.language

  return (
    <Container>
      <span>Latest posts</span>
      <div className='posts'>
        {posts.map(post => (
          <Link href={`posts/${post.slug}`} key={post.slug}>
            <Ancora className='post'>
              <strong>{post.title}</strong>
              <p>{post.excerpt}</p>
              <time>{post.updatedAt}</time>
            </Ancora>
          </Link>
        ))}
        <Link href={`/posts?lang=${currentLang}`}>
          <a className='all-posts'>
            <strong>See it all</strong>
            <strong>&rarr;</strong>
          </a>
        </Link>
      </div>
    </Container>
  )
}