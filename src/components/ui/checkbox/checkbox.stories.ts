import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './'

const meta = {
  title: 'Components/UI/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Disabled: Story = {
  args: {
    label: 'Click here',
    checked: true,
    disabled: true,
  },
}

export const WithoutLabel: Story = {
  args: {
    checked: false,
    disabled: false,
  },
}
