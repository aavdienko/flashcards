import { ChangeEvent, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { CreateDeckModal } from './create-decks-modal'
import { DecksFilters } from './decks-filters'
import { DecksTable } from './decks-table'
import s from './decks.module.scss'

import { useDebounce } from '@/assets/common/hooks/use-debounce'
import { Pagination, Typography } from '@/components/ui'
import { useMeQuery } from '@/services/auth/auth.api'
import { useGetDecksQuery } from '@/services/decks'
import { decksSelectors } from '@/services/decks/decks-selectors.ts'
import { setCurrentPage, setItemsPerPage, setSearchByName } from '@/services/decks/decks.slice.ts'

export const Decks = () => {
  const [cover, setCover] = useState<File | null>(null)
  const currentPage = useSelector(decksSelectors.selectCurrentPage)
  const itemsPerPage = useSelector(decksSelectors.selectItemsPerPage)
  const maxCardsCount = useSelector(decksSelectors.selectMaxCardsCount)
  const minCardsCount = useSelector(decksSelectors.selectMinCardsCount)
  const orderBy = useSelector(decksSelectors.selectOrderBy)
  const authorId = useSelector(decksSelectors.selectAuthorId)
  const dispatch = useDispatch()

  const [searchValue, setSearchValue] = useState('')
  const debouncedValue = useDebounce(searchValue, 500)

  const changeCurrentPage = (page: number) => dispatch(setCurrentPage({ page }))
  const changeItemsPerPage = (perPage: number) => dispatch(setItemsPerPage({ perPage }))
  const changeSearch = (search: string) => dispatch(setSearchByName({ search }))

  const handleSearchValue = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearchValue(e.currentTarget.value)
    changeSearch(e.currentTarget.value)
    changeCurrentPage(1)
  }

  const { currentData } = useMeQuery()
  const { decks, totalPages, isLoading, isFetching } = useGetDecksQuery(
    {
      name: debouncedValue,
      maxCardsCount,
      minCardsCount,
      currentPage,
      itemsPerPage,
      orderBy,
      authorId,
    },
    {
      selectFromResult: ({ currentData: data, isLoading, isFetching }) => {
        return {
          decks: data?.items,
          totalPages: data?.pagination.totalPages,
          max: data?.maxCardsCount,
          isLoading,
          isFetching,
        }
      },
    }
  )

  const handleCurrentPage = (e: number) => changeCurrentPage(e)
  const handleItemsPerPage = (e: string) => changeItemsPerPage(Number(e))

  if (isLoading || isFetching) return <span className={s.loader}></span>

  return (
    <div className={s.container}>
      <div className={s.titleBlock}>
        <Typography variant="large">Decks list</Typography>
        <CreateDeckModal cover={cover} setCover={setCover} />
      </div>
      <DecksFilters
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSearchValue={handleSearchValue}
      />
      {decks?.length !== 0 && (
        <>
          <DecksTable data={decks} cover={cover} setCover={setCover} />
          <Pagination
            count={totalPages ? totalPages : 100}
            page={currentPage}
            onChange={e => handleCurrentPage(e)}
            perPage={String(itemsPerPage)}
            onPerPageChange={e => handleItemsPerPage(e)}
            perPageOptions={[4, 8, 16]}
          />
        </>
      )}
      {decks?.length === 0 && authorId !== currentData.id && (
        <Typography variant={'h2'} className={s.empty}>
          No decks with the entered name were found 😔. Change request parameters
        </Typography>
      )}
      {decks?.length === 0 && authorId === currentData.id && (
        <Typography variant={'h2'} className={s.empty}>
          You have not created any decks yet
        </Typography>
      )}
    </div>
  )
}
