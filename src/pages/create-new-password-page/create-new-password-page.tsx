import { useParams } from 'react-router-dom'

import s from './create-new-password-page.module.scss'

import { CreateNewPassword } from '@/components/auth/create-new-password'
import { useResetPasswordMutation } from '@/services/auth/auth.api'

export const CreateNewPasswordPage = () => {
  const { token } = useParams()

  const [resetPassword] = useResetPasswordMutation()

  return (
    <div className={s.container}>
      <CreateNewPassword onSubmit={resetPassword} token={token} />
    </div>
  )
}
