import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');
export const POSTS_PER_PAGE = 10;

export function getAllPostSlugs() {
  const filenames = fs.readdirSync(postsDirectory);

  return filenames
    .filter((filename) => {
      // .mdファイルのみを対象とする（ディレクトリを除外）
      const fullPath = path.join(postsDirectory, filename);
      return fs.statSync(fullPath).isFile() && filename.endsWith('.md');
    })
    .map((filename) => {
      // 番号付きファイル名から番号を除去
      const slug = filename.replace(/^\d+_/, '').replace(/\.md$/, '');
      return { slug };
    });
}

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames
    .filter((fileName) => {
      // .mdファイルのみを対象とする（ディレクトリを除外）
      const fullPath = path.join(postsDirectory, fileName);
      return fs.statSync(fullPath).isFile() && fileName.endsWith('.md');
    })
    .map((fileName) => {
      // 番号付きファイル名から番号を除去
      const slug = fileName.replace(/^\d+_/, '').replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      return {
        slug,
        ...(matterResult.data as { id: number; title: string; create: string, update?: string, tags?: string[] }),
      };
    });

  return allPostsData.sort((a, b) => (b.id - a.id));
}


export async function getPostData(slug: string) {
  // postsディレクトリ内のファイルを検索
  const fileNames = fs.readdirSync(postsDirectory);
  const matchingFile = fileNames
    .filter((fileName) => {
      // .mdファイルのみを対象とする（ディレクトリを除外）
      const fullPath = path.join(postsDirectory, fileName);
      return fs.statSync(fullPath).isFile() && fileName.endsWith('.md');
    })
    .find((fileName) => {
      const fileSlug = fileName.replace(/^\d+_/, '').replace(/\.md$/, '');
      return fileSlug === slug;
    });

  if (!matchingFile) {
    throw new Error(`Post not found: ${slug}`);
  }

  const fullPath = path.join(postsDirectory, matchingFile);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...(matterResult.data as { id: number; title: string; create: string; update?: string; tags?: string[] }),
  };
}

/**
 * ページネーション対応の記事データ取得関数
 * @param page ページ番号（1から始まる）
 * @returns 指定ページの記事データと総ページ数
 */
export function getPostsWithPagination(page: number) {
  const allPosts = getSortedPostsData();
  const totalPosts = allPosts.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  
  // ページ番号の検証
  if (page < 1 || page > totalPages) {
    return {
      posts: [],
      currentPage: page,
      totalPages,
      hasNextPage: false,
      hasPrevPage: false,
    };
  }
  
  const startIndex = (page - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const posts = allPosts.slice(startIndex, endIndex);
  
  return {
    posts,
    currentPage: page,
    totalPages,
    hasNextPage: page < totalPages,
    hasPrevPage: page > 1,
  };
}

/**
 * 総ページ数を取得
 */
export function getTotalPages() {
  const allPosts = getSortedPostsData();
  return Math.ceil(allPosts.length / POSTS_PER_PAGE);
}
