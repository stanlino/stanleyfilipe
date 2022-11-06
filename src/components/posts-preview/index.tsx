import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { IPostPreview } from '../../dtos/PostPreview'

import {
  Container
} from './styles'

interface PostsPreviewProps {
  posts: IPostPreview[]
}

export function PostsPreview({ posts }: PostsPreviewProps){

  const { t } = useTranslation()

  return (
    <Container>
      <h2>
        <>
          {t('titles.lasted_posts')}
        </>
      </h2>
      <div className='posts'>
        {posts.map(post => (
          <Link href={`posts/${post.slug}`} className='post' key={post.slug}>
            <strong>{post.title}</strong>
            <p>{post.excerpt}</p>
            <time>{post.createdAt}</time>
          </Link>
        ))}
        <Link href={`/posts`} className='all-posts'>
          <strong>
            <>
              {t('see_all_posts_link')}
            </>
          </strong>
          <strong>&rarr;</strong>
        </Link>
      </div>
    </Container>
  )
}