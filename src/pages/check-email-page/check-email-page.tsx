import s from './check-email-page.module.scss'

import { CheckEmail } from '@/components/auth/check-email'
import { useMeQuery } from '@/services/auth/auth.api.ts'

export const CheckEmailPage = () => {
  const { data } = useMeQuery()

  return (
    <div className={s.container}>
      <CheckEmail email={data?.email} />
    </div>
  )
}
