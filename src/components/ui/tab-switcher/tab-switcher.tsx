import { FC, ReactNode } from 'react'

import * as Tabs from '@radix-ui/react-tabs'

import { Typography } from '../typography'

import s from './tab-switcher.module.scss'

import { BODY_2 } from '@/assets/common/consts'

type TabSwitcherProps = {
  label: string
  children: ReactNode
}

export const TabSwitcher: FC<TabSwitcherProps> = ({ label, children }) => {
  return (
    <div>
      <Typography variant={BODY_2} className={s.label}>
        {label}
      </Typography>
      <Tabs.Root className={s.tabsRoot} defaultValue="tab2">
        <Tabs.List className={s.tabsList}>{children}</Tabs.List>
      </Tabs.Root>
    </div>
  )
}
