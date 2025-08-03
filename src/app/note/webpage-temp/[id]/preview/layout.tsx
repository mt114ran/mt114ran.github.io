import { getAllTemplates } from '@/lib/templates'

export async function generateStaticParams() {
  const templates = getAllTemplates()
  return templates.map((template) => ({
    id: template.id,
  }))
}

export default function PreviewLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}