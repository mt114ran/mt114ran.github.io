import { getPostData } from '@/lib/posts'
import { notFound } from 'next/navigation'

type Props = {
  slug: string
}

export default async function PostPageContent({ slug }: Props) {
  try {
    const post = await getPostData(slug)

    return (
      <div className="max-w-2xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-500 text-sm mb-8">{post.date}</p>
        <article
          className="prose dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </div>
    )
  } catch {
    notFound()
  }
}
