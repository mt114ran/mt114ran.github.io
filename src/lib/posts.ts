import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getAllPostSlugs() {
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => {
    // 番号付きファイル名から番号を除去
    const slug = filename.replace(/^\d+_/, '').replace(/\.md$/, '');
    return { slug };
  });
}

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
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
  const matchingFile = fileNames.find((fileName) => {
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
