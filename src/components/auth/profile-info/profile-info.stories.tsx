import type { Meta } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import { ProfileInfo } from './profile-info'

const meta = {
  title: 'Components/Auth/ProfileInfo',
  component: ProfileInfo,
  decorators: [
    Story => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof ProfileInfo>

export default meta

export const Default = () => {
  const img = 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-14.jpg'

  return (
    <ProfileInfo
      name={'Alex Avd'}
      email={'aavd@gmail.com'}
      src={img}
      handleChangeAvatar={() => {}}
      onSubmit={() => {}}
      handleLogout={() => {}}
      showTextField={false}
      setShowTextField={() => {}}
    />
  )
}
