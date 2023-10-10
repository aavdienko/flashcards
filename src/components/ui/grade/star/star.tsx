import { FC } from 'react'

import s from '../../grade/grade.module.scss'
import { RatingValue } from '../grade'

import { Star, StarOutline } from '@/assets/icons'

type StarItemProps = {
  value: RatingValue
  selected: boolean
  onClick: (value: RatingValue) => void
}

export const StarItem: FC<StarItemProps> = ({ value, selected, onClick }) => {
  return (
    <button
      onClick={() => {
        onClick(value)
      }}
      className={s.button}
    >
      {selected ? <Star /> : <StarOutline />}
    </button>
  )
}
