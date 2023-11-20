import s from './forgot-password-page.module.scss'

import { ForgotPassword } from '@/components/auth/forgot-password'
import { useSendEmailMutation } from '@/services/auth/auth.api.ts'
export const ForgotPasswordPage = () => {
  const [sendEmail] = useSendEmailMutation()

  return (
    <div className={s.container}>
      <ForgotPassword onSubmit={sendEmail} />
    </div>
  )
}
