import Link from 'next/link'
import Image from 'next/image'
import { getPostsWithPagination, getTotalPages } from '@/lib/posts'
import Pagination from '@/components/Pagination'

/**
 * 静的パスの生成
 * ビルド時に全ページ分のパスを生成
 */
export async function generateStaticParams() {
  const totalPages = getTotalPages();
  const pages = [];
  
  for (let i = 1; i <= totalPages; i++) {
    pages.push({ pageNum: i.toString() });
  }
  
  return pages;
}

interface PageProps {
  params: Promise<{ pageNum: string }>;
}

/**
 * ブログ記事一覧ページ（ページネーション対応）
 */
export default async function BlogPage({ params }: PageProps) {
  const resolvedParams = await params;
  const pageNumber = parseInt(resolvedParams.pageNum, 10);
  
  // 不正なページ番号の処理
  if (isNaN(pageNumber) || pageNumber < 1) {
    return (
      <div className="max-w-2xl mx-auto py-10 px-4">
        <p className="text-red-500">ページが見つかりません</p>
        <Link href="/blog/page/1/" className="text-blue-400 hover:text-blue-300 hover:underline">
          最初のページへ戻る
        </Link>
      </div>
    );
  }
  
  const { posts, currentPage, totalPages } = getPostsWithPagination(pageNumber);
  
  // ページが存在しない場合
  if (posts.length === 0 && pageNumber > 1) {
    return (
      <div className="max-w-2xl mx-auto py-10 px-4">
        <p className="text-red-500">このページには記事がありません</p>
        <Link href="/blog/page/1/" className="text-blue-400 hover:text-blue-300 hover:underline">
          最初のページへ戻る
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <nav className="mb-6">
        <Link href="/" className="text-blue-400 hover:text-blue-300 hover:underline">
          ← ホームへ戻る
        </Link>
      </nav>
      
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-3xl font-bold">記事一覧</h1>
          <p className="text-gray-500 text-sm mt-2">
            ページ {currentPage} / {totalPages}
          </p>
        </div>
        <Image 
          src="/favicon.png" 
          alt="ブログアイコン" 
          width={50} 
          height={50}
          className="rounded-lg"
        />
      </div>
      
      <div className="mb-6">
        <Link 
          href="/blog/search" 
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          🔍 記事を検索する
        </Link>
      </div>
      
      {posts.length === 0 ? (
        <p className="text-gray-500">記事がありません</p>
      ) : (
        <>
          <ul className="space-y-0">
            {posts.map((post) => (
              <li key={post.slug} className="border-b border-gray-700 pb-4 mb-4 pt-2">
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="text-blue-400 hover:text-blue-300 hover:underline text-lg font-semibold"
                >
                  <span className="text-green-600">#{post.id}</span> {post.title}
                </Link>
                <p className="text-gray-500 text-sm mt-1">
                  {post.update ? `作成日時: ${post.create}、更新日時: ${post.update}` : `作成日時: ${post.create}`}
                </p>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {post.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
          
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            basePath="/blog/page"
          />
        </>
      )}
    </div>
  );
}