import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getAllPostSlugs() {
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ''),
  }));
}

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      ...(matterResult.data as { id: number; title: string; create: string, update?: string, tags?: string[] }),
    };
  });

  return allPostsData.sort((a, b) => (a.create > b.create ? -1 : 1));
}

export async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(matterResult.content);
  let contentHtml = processedContent.toString();
  
  // クイズセクションにカスタムクラスを追加
  contentHtml = contentHtml.replace(
    /<h2[^>]*>([^<]*記事を読むとわかるようになること[^<]*)<\/h2>/gi,
    '<h2 class="quiz-title">$1</h2>'
  );
  
  // クイズの答えセクションを折りたたみ式に変更
  contentHtml = contentHtml.replace(
    /<h2[^>]*>(?:クイズの答え|記事冒頭の質問の回答)<\/h2>\s*(<(?:ul|ol)[^>]*>[\s\S]*?<\/(?:ul|ol)>)/gi,
    (match, list) => {
      return `<h2 class="quiz-answer-title">記事冒頭の質問の回答</h2>
<div class="quiz-answer-wrapper">
  <button class="quiz-answer-toggle" onclick="this.classList.toggle('open'); this.nextElementSibling.classList.toggle('show');">
    クリックして回答を表示
  </button>
  <div class="quiz-answer-content">
    ${list}
  </div>
</div>`;
    }
  );

  return {
    slug,
    contentHtml,
    ...(matterResult.data as { id: number; title: string; create: string; update?: string; tags?: string[] }),
  };
}
