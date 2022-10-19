import * as prismic from '@prismicio/client'
import * as prismicNext from '@prismicio/next'
import sm from './sm.json'

export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint)

export const createClient = (config = {}) => {
  const client = prismic.createClient(sm.apiEndpoint, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    ...config,
  })

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  })

  return client
}