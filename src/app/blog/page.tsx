import { redirect } from 'next/navigation'

/**
 * /blog へのアクセスを /blog/page/1/ にリダイレクト
 * 最初のページを表示
 */
export default function BlogIndex() {
  redirect('/blog/page/1/')
}
