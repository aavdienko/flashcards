import { useGetDecksQuery } from '@/services/decks'

export const Decks = () => {
  const { data } = useGetDecksQuery()

  return <div>{JSON.stringify(data || '')}</div>
}
