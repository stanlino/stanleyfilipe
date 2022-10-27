import { BuildQueryURLArgs } from "@prismicio/client"
import { PreviewData } from "next"
import { createClient } from "../../prismicio"
import { postPreviewFormatter } from "../utils/postFormatter"

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