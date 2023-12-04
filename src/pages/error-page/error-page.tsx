import { Link } from 'react-router-dom'

import s from './error-page.module.scss'

import { NotFound } from '@/assets/icons'
import { Button, Typography } from '@/components/ui'

export const ErrorPage = () => {
  return (
    <div className={s.container}>
      <NotFound className={s.image} />
      <Typography className={s.description}>Sorry! The Page was not found!</Typography>
      <Button as={Link} to={'/'}>
        Back to home page
      </Button>
    </div>
  )
}
