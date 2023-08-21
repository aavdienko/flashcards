import { ComponentPropsWithoutRef, forwardRef } from 'react'

import s from './card.module.scss'

export type CardProps = {
  className?: string
} & ComponentPropsWithoutRef<'div'>

// export const Typography = <T extends ElementType = 'p'>(
//   props: TypographyProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>
// ) => {
//   const { variant = 'body1', className, as: Component = 'p', ...rest } = props

//   return <Component className={`${s[variant]} ${className}`} {...rest} />
// }

export const Card = forwardRef<HTMLDivElement, CardProps>(({ className, ...restProps }, ref) => {
  return <div ref={ref} className={s.root} {...restProps}></div>
})
