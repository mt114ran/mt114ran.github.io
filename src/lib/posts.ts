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
    /<h2[^>]*>([^<]*クイズ：この記事でわかること[^<]*)<\/h2>/gi,
    '<h2 class="quiz-title">$1</h2>'
  );
  
  // クイズの質問と回答を抽出して構造化
  const extractQuestionsAndAnswers = (html: string) => {
    // 質問を抽出
    const quizMatch = html.match(/<h2[^>]*>[^<]*クイズ：この記事でわかること[^<]*<\/h2>\s*<ol[^>]*>([\s\S]*?)<\/ol>/i);
    const questions: string[] = [];
    if (quizMatch) {
      const questionMatches = quizMatch[1].match(/<li[^>]*>([^<]+)<\/li>/g);
      if (questionMatches) {
        questionMatches.forEach(q => {
          questions.push(q.replace(/<li[^>]*>|<\/li>/g, '').trim());
        });
      }
    }
    
    // 回答を抽出
    const answerMatch = html.match(/<h2[^>]*>(?:クイズの答え|記事冒頭の質問の回答|クイズの回答：ふりかえり)<\/h2>\s*<ol[^>]*>([\s\S]*?)<\/ol>/i);
    const answers: string[] = [];
    if (answerMatch) {
      const answerMatches = answerMatch[1].match(/<li[^>]*>([\s\S]*?)<\/li>/g);
      if (answerMatches) {
        answerMatches.forEach(a => {
          answers.push(a.replace(/<li[^>]*>|<\/li>/g, '').trim());
        });
      }
    }
    
    return { questions, answers };
  };
  
  const { questions, answers } = extractQuestionsAndAnswers(contentHtml);
  
  // クイズの答えセクションを折りたたみ式に変更
  contentHtml = contentHtml.replace(
    /<h2[^>]*>(?:クイズの答え|記事冒頭の質問の回答|クイズの回答：ふりかえり)<\/h2>\s*<(?:ul|ol)[^>]*>[\s\S]*?<\/(?:ul|ol)>/gi,
    () => {
      let result = '<h2 class="quiz-answer-title">クイズの回答：ふりかえり</h2>\n';
      
      questions.forEach((question, index) => {
        const answer = answers[index] || '回答が見つかりません';
        result += `<div class="quiz-answer-wrapper">
  <button class="quiz-answer-toggle" onclick="this.classList.toggle('open'); this.nextElementSibling.classList.toggle('show');">
    ${index + 1}. ${question}
  </button>
  <div class="quiz-answer-content">
    <p>${answer}</p>
  </div>
</div>\n`;
      });
      
      return result;
    }
  );

  return {
    slug,
    contentHtml,
    ...(matterResult.data as { id: number; title: string; create: string; update?: string; tags?: string[] }),
  };
}
