import { asHTML, asText } from "@prismicio/helpers";
import { PrismicDocument } from "@prismicio/types";

export function postFormatter(post: PrismicDocument) {
  return {
    tags: post.tags,
    title: asText(post.data.title),
    author: post.data.author,
    subtitle: post.data.subtitle,
    content: asHTML(post.data.content),
    createdAt: new Date(post.first_publication_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    }),
    updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }
}