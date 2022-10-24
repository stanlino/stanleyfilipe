import { asText } from "@prismicio/helpers";
import { PrismicDocument } from "@prismicio/types";

export function postFormatter(post: PrismicDocument) {
  return {
    slug: post.uid,
    title: asText(post.data.title),
    excerpt: post.data.content.find((content: { type: string }) => content.type === 'paragraph')?.text ?? '',
    updatedAt: new Date(post.last_publication_date).toLocaleDateString(post.lang, {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    }),
    lang: post.lang
  }
}