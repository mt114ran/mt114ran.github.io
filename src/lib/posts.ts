import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import rehypeRaw from 'rehype-raw';

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
  
  // Mermaidブロックを一時的にプレースホルダーに置換
  let content = matterResult.content;
  const mermaidRegex = /```mermaid\r?\n([\s\S]*?)\r?\n```/g;
  const mermaidBlocks: string[] = [];
  let mermaidIndex = 0;
  
  // Mermaidブロックを収集してプレースホルダーに置換
  content = content.replace(mermaidRegex, (_, code) => {
    // HTMLエンティティをエスケープ
    const escapedCode = code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
    mermaidBlocks.push(escapedCode);
    // 一時的なプレースホルダーを使用
    return `\n<!-- MERMAID_PLACEHOLDER_${mermaidIndex++} -->\n`;
  });
  
  console.log(`Found ${mermaidBlocks.length} mermaid blocks in ${slug}`);
  
  // Markdownを処理
  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSlug)
    .use(rehypeStringify)
    .process(content);
  let contentHtml = processedContent.toString();
  
  // プレースホルダーをMermaidブロックに戻す
  mermaidBlocks.forEach((code, index) => {
    const placeholder = `<!-- MERMAID_PLACEHOLDER_${index} -->`;
    const mermaidDiv = `<div class="mermaid">${code}</div>`;
    contentHtml = contentHtml.replace(placeholder, mermaidDiv);
  });

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
