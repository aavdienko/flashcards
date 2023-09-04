import type { Meta, StoryObj } from '@storybook/react'

import { Avatar } from './'

const meta = {
  title: 'Components/UI/Avatar',
  component: Avatar,
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    src: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-14.jpg',
    name: 'Igor',
    size: 96,
  },
}
