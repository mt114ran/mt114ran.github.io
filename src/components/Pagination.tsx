import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath?: string;
}

/**
 * ページネーションコンポーネント
 * 前へ/次へボタンと中央にページ番号を表示
 */
export default function Pagination({ currentPage, totalPages, basePath = '/blog' }: PaginationProps) {
  // ページ番号の配列を生成（最大5ページを表示）
  const getPageNumbers = () => {
    const delta = 2; // 現在のページの前後に表示するページ数
    const range: number[] = [];
    const rangeWithDots: (number | string)[] = [];
    let l: number | undefined;

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
        range.push(i);
      }
    }

    range.forEach((i) => {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    });

    return rangeWithDots;
  };

  if (totalPages <= 1) {
    return null;
  }

  const pageNumbers = getPageNumbers();

  return (
    <nav className="flex justify-center items-center space-x-2 mt-8 mb-4" aria-label="ページネーション">
      {/* 前へボタン */}
      {currentPage > 1 ? (
        <Link
          href={`${basePath}/${currentPage - 1}/`}
          className="px-3 py-2 bg-gray-800 text-gray-300 rounded hover:bg-gray-700 transition-colors"
          aria-label="前のページへ"
        >
          ← 前へ
        </Link>
      ) : (
        <span className="px-3 py-2 bg-gray-900 text-gray-600 rounded cursor-not-allowed">
          ← 前へ
        </span>
      )}

      {/* ページ番号 */}
      <div className="flex items-center space-x-1">
        {pageNumbers.map((pageNum, index) => {
          if (pageNum === '...') {
            return (
              <span key={`dots-${index}`} className="px-2 py-1 text-gray-500">
                …
              </span>
            );
          }
          
          const page = pageNum as number;
          if (page === currentPage) {
            return (
              <span
                key={page}
                className="px-3 py-1 bg-blue-600 text-white rounded font-semibold"
                aria-current="page"
              >
                {page}
              </span>
            );
          }
          
          return (
            <Link
              key={page}
              href={`${basePath}/${page}/`}
              className="px-3 py-1 bg-gray-800 text-gray-300 rounded hover:bg-gray-700 transition-colors"
              aria-label={`ページ${page}へ`}
            >
              {page}
            </Link>
          );
        })}
      </div>

      {/* 次へボタン */}
      {currentPage < totalPages ? (
        <Link
          href={`${basePath}/${currentPage + 1}/`}
          className="px-3 py-2 bg-gray-800 text-gray-300 rounded hover:bg-gray-700 transition-colors"
          aria-label="次のページへ"
        >
          次へ →
        </Link>
      ) : (
        <span className="px-3 py-2 bg-gray-900 text-gray-600 rounded cursor-not-allowed">
          次へ →
        </span>
      )}
    </nav>
  );
}