import type { Meta, StoryObj } from '@storybook/react'

import { Typography, Avatar } from '..'

import s from './dropdown.module.scss'

import { Dropdown, DropdownItem, DropdownItemWithIcon } from './'

import { AVATAR } from '@/assets/common/consts'
import { PersonOutline, LogOutOutline } from '@/assets/icons'
const meta = {
  title: 'Components/UI/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    trigger: {},
    children: {},
  },
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

const src = 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-14.jpg'

export const Default: Story = {
  args: {
    trigger: (
      <>
        <Typography variant={'subtitle1'}>Alex</Typography>
        <Avatar src={src} name={AVATAR} size={36} />
      </>
    ),
    children: (
      <>
        <DropdownItem disabled>
          <div className={s.item}>
            <Avatar src={src} name={AVATAR} size={36} />
            <div>
              <Typography variant={'subtitle2'}>Alex</Typography>
              <Typography variant={'caption'}>alexavd@gmail.com</Typography>
            </div>
          </div>
        </DropdownItem>
        <DropdownItemWithIcon icon={<PersonOutline />} text={'Profile'} />
        <DropdownItemWithIcon icon={<LogOutOutline />} text={'Logout'} />
      </>
    ),
  },
}
