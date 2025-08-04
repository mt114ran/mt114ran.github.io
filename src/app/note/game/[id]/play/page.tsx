import { notFound } from 'next/navigation'
import { getGameById, games } from '@/lib/games'
import GamePlayer from '@/components/games/GamePlayer'

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export default async function GamePlayPage(props: PageProps) {
  const { id } = await props.params
  const game = getGameById(id)

  if (!game) {
    notFound()
  }

  return <GamePlayer gameId={id} />
}

export async function generateStaticParams() {
  return games.map((game) => ({
    id: game.id
  }))
}