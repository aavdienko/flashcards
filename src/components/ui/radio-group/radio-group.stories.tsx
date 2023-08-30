import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from './radio-group'

const options = [
  {
    value: 'Radio Group1',
    label: 'Radio Group1',
  },
  {
    value: 'Radio Group2',
    label: 'Radio Group2',
  },
  {
    value: 'Radio Group3',
    label: 'Radio Group3',
  },
  {
    value: 'Radio Group4',
    label: 'Radio Group4',
  },
]

const meta = {
  title: 'Components/UI/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => {
    const [value, setValue] = useState(null)

    return (
      <>
        <RadioGroup {...args} value={value} onChange={setValue} />
        <div>Selected value: {value}</div>
      </>
    )
  },

  args: {
    options,
    disabled: false,
  },
}

export const DefaultDisabled = {
  ...Default,
  args: {
    ...Default.args,
    disabled: true,
  },
}
