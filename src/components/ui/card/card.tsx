import { ComponentPropsWithoutRef, FC } from 'react'

import s from './card.module.scss'

export type CardProps = ComponentPropsWithoutRef<'div'>

export const Card: FC<CardProps> = ({ className, ...rest }) => {
  return <div className={`${s.card} ${className}`} {...rest} />
}
