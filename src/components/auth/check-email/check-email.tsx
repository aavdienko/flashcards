import { FC } from 'react'

import { Link } from 'react-router-dom'

import s from './check-email.module.scss'

import { BODY_2 } from '@/assets/common/consts'
import { CheckEmailSVG } from '@/assets/icons'
import { Card, Typography, Button } from '@/components/ui'

type CheckEmailProps = { email: string }

export const CheckEmail: FC<CheckEmailProps> = ({ email }) => {
  return (
    <Card className={s.card}>
      <Typography variant="large" as="h1" className={s.title}>
        Check Email
      </Typography>
      <CheckEmailSVG className={s.emailImage} />
      <Typography
        variant={BODY_2}
        className={s.description}
      >{`We’ve sent an Email with instructions to ${email}`}</Typography>
      <Button as={Link} to={'/sign-in'} fullWidth>
        <Typography variant={BODY_2}>Back to Sign in</Typography>
      </Button>
    </Card>
  )
}
