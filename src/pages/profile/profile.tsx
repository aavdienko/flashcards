import { ChangeEvent, useState } from 'react'

import s from './profile.module.scss'

import { ProfileInfo } from '@/components/auth/profile-info'
import {
  useChangeProfileMutation,
  useLogoutMutation,
  useMeQuery,
} from '@/services/auth/auth.api.ts'

export const Profile = () => {
  const [showTextField, setShowTextField] = useState(false)
  const [ava, setAva] = useState<File | null>(null)

  const { currentData } = useMeQuery()
  const [logout] = useLogoutMutation()
  const [changeProfile, { isLoading }] = useChangeProfileMutation()

  const handleFormSubmit = (data: { email: string; name: string }) => {
    setShowTextField(false)

    const form = new FormData()

    form.append('email', currentData.email)
    form.append('name', data.name)
    ava && form.append('avatar', ava)

    changeProfile(form)
  }

  const handleChangeAvatar = (e: ChangeEvent<HTMLInputElement>) => {
    setShowTextField(true)
    const file = e.target.files![0]

    setAva(file)
  }

  if (isLoading) return <span className={s.loader}></span>

  return (
    <ProfileInfo
      name={currentData.name}
      email={currentData.email}
      src={
        currentData
          ? currentData.avatar
          : 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-14.jpg'
      }
      handleChangeAvatar={handleChangeAvatar}
      onSubmit={handleFormSubmit}
      handleLogout={() => logout({})}
      showTextField={showTextField}
      setShowTextField={setShowTextField}
    />
  )
}
