import { BuildQueryURLArgs } from "@prismicio/client"
import { IncomingMessage } from "http"
import { PreviewData } from "next"
import { createClient } from "../../prismicio"
import { postFormatter } from "../utils/postFormatter"
import { postPreviewFormatter } from "../utils/postPreviewFormatter"

export async function getPostsPreview(previewData: PreviewData, params: Partial<BuildQueryURLArgs>) {
  const prismic = createClient({ previewData })

  const response = await prismic.getByType('post', params)

  const emptyResponse = response.results.length < 1

  if (emptyResponse) {
    return {
      notFound: true,
      posts: []
    }
  }

  const posts = response.results.map(postPreviewFormatter)

  return {
    notFound: false,
    posts
  }
}

type Req = IncomingMessage & { cookies: Partial<{ [key: string]: string }> }

export async function getPostsByUID(
  req: Req,
  uid: string, 
  slug: string, 
  params: Partial<BuildQueryURLArgs>
) {
  const prismic = createClient({ req })

  try {
    const post = await prismic.getByUID(uid, slug, params)
    const postFormatted = postFormatter(post)

    return {
      post: postFormatted,
      notFound: false
    }

  } catch (error) {
    return {
      post: {},
      notFound: true
    }
  }

}