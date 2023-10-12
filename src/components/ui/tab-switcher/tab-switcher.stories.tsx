import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from '../typography'

import { TabSwitcherItem } from './tab-switcher-item'
import s from './tab-switcher.module.scss'

import { TabSwitcher } from './'

import { BODY_1 } from '@/assets/common/consts'

const meta = {
  title: 'Components/UI/TabSwitcher',
  component: TabSwitcher,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TabSwitcher>

export default meta
type Story = StoryObj<typeof meta>

const onClickHandler1 = () => {
  console.log('onClickHandler1')
}
const onClickHandler2 = () => {
  console.log('onClickHandler2')
}

export const Default: Story = {
  args: {
    label: 'Show packs cards',
    children: (
      <>
        <TabSwitcherItem value={'tab1'} onClick={onClickHandler1} className={s.tabsTrigger}>
          <Typography variant={BODY_1}>Button 1</Typography>
        </TabSwitcherItem>
        <TabSwitcherItem value={'tab2'} onClick={onClickHandler2} className={s.tabsTrigger}>
          <Typography variant={BODY_1}>Button 2</Typography>
        </TabSwitcherItem>
      </>
    ),
  },
}
