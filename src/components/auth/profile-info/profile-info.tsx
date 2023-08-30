import { ChangeEvent, FC } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import s from './profile-info.module.scss'
import { ProfileSchemaType, profileSchema } from './profile-info.schema'

import { EditOutline, LogOutOutline } from '@/assets/icons'
import { Card, Typography, Avatar, Button } from '@/components/ui'
import { ControlledTextField } from '@/components/ui/controlled'

type ProfileInfoProps = {
  name: string
  email: string
  src: string
  handleChangeAvatar: (event: ChangeEvent<HTMLInputElement>) => void
  handleLogout: () => void
  onSubmit: (data: ProfileSchemaType) => void
  showTextField: boolean
  setShowTextField: (showTextField: boolean) => void
}

export const ProfileInfo: FC<ProfileInfoProps> = ({
  name,
  email,
  src,
  handleChangeAvatar,
  handleLogout,
  onSubmit,
  showTextField,
  setShowTextField,
}) => {
  const handleChangeName = () => {
    setShowTextField(true)
  }

  const { handleSubmit, control } = useForm<ProfileSchemaType>({
    mode: 'onSubmit',
    resolver: zodResolver(profileSchema),
    defaultValues: {
      email: '',
      name: '',
    },
  })

  return (
    <Card className={s.card}>
      <Typography variant="large" className={s.title}>
        Personal Information
      </Typography>
      <div className={s.imgBlock}>
        <Avatar src={src} name="user" size={96} />
        <label>
          <input
            type="file"
            accept="image/*"
            onChange={handleChangeAvatar}
            style={{ display: 'none' }}
          />
          <Button variant="secondary" as={'span'} className={s.img}>
            <EditOutline />
          </Button>
        </label>
      </div>
      {!showTextField ? (
        <>
          <Typography variant="h1" className={s.name}>
            {name} <EditOutline onClick={handleChangeName} />
          </Typography>
          <Typography variant="body2" className={s.email}>
            {email}
          </Typography>
          <Button variant="secondary" onClick={handleLogout} className={s.logoutBtn}>
            <LogOutOutline /> <Typography>Logout</Typography>
          </Button>
        </>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
          <ControlledTextField label="Nickname" name="name" control={control} defaultValue="" />
          <Button className={s.submitBtn} fullWidth>
            Save Changes
          </Button>
        </form>
      )}
    </Card>
  )
}
