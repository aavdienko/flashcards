import { FC, useEffect, useState, ChangeEvent } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import s from './../cards.module.scss'
import { DeleteCardModal } from './delete-card-modal'
import { UpdateCardModal } from './update-card-modal'

import { BlankDeckCover } from '@/assets/icons'
import { Grade } from '@/components/ui/grade'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { Column, Sort, TableHeader } from '@/components/ui/table/table-header'
import { Card } from '@/services/cards'
import { setOrderBy } from '@/services/cards/cards.slice.ts'
import { decksSelectors } from '@/services/decks/decks-selectors.ts'

type CardsTableProps = {
  data: any
  data2: any
  questionCover: File | null
  handleQuestionCover: (e: ChangeEvent<HTMLInputElement>) => void
  answerCover: File | null
  handleAnswerCover: (e: ChangeEvent<HTMLInputElement>) => void
}

export const CardsTable: FC<CardsTableProps> = ({
  data,
  data2,
  questionCover,
  handleQuestionCover,
  answerCover,
  handleAnswerCover,
}) => {
  const [sort, setSort] = useState<Sort>(null)

  const authorId = useSelector(decksSelectors.selectAuthorId)
  const changeOrderBy = (orderBy: string) => dispatch(setOrderBy({ orderBy }))
  const dispatch = useDispatch()

  const columns: Column[] = [
    {
      key: 'question',
      title: 'Question',
      isSortable: true,
    },
    {
      key: 'answer',
      title: 'Answer',
      isSortable: true,
    },
    {
      key: 'updated',
      title: 'Last Updated',
      isSortable: true,
    },
    {
      key: 'grade',
      title: 'Grade',
    },
    {
      key: 'options',
      title: '',
    },
  ]

  useEffect(() => {
    if (!sort) return
    changeOrderBy(`${sort?.key}-${sort?.direction}`)
  })

  return (
    <Table className={s.table}>
      <TableHeader columns={columns} onSort={setSort} sort={sort} />
      <TableBody>
        {data?.map((card: Card) => (
          <TableRow key={card.id}>
            <TableCell className={s.tableCell}>
              <div className={s.coverCell}>
                {card.questionImg ? (
                  <img src={card.questionImg} alt={'cover'} className={s.cover} />
                ) : (
                  <BlankDeckCover style={{ backgroundColor: 'gray' }} />
                )}
                {card.question}
              </div>
            </TableCell>
            <TableCell className={s.tableCell}>
              <div className={s.coverCell}>
                {card.answerImg ? (
                  <img src={card.answerImg} alt={'cover'} className={s.cover} />
                ) : (
                  <BlankDeckCover style={{ backgroundColor: 'gray' }} />
                )}
                {card.answer}
              </div>
            </TableCell>
            <TableCell className={s.tableCell}>
              {new Date(card.updated).toLocaleString('en-GB')}
            </TableCell>
            <TableCell className={s.tableCell}>
              <Grade value={card.grade} onClick={() => {}} />
            </TableCell>
            <TableCell className={s.tableCell}>
              {data2.id === authorId && (
                <div className={s.iconsBlock}>
                  <UpdateCardModal
                    cardId={card.id}
                    questionCover={questionCover}
                    handleQuestionCover={handleQuestionCover}
                    answerCover={answerCover}
                    handleAnswerCover={handleAnswerCover}
                  />
                  <DeleteCardModal cardId={card.id} />
                </div>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
