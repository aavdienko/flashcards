import { FC } from 'react'

import * as Tabs from '@radix-ui/react-tabs'
import { TabsTriggerProps } from '@radix-ui/react-tabs'

export const TabSwitcherItem: FC<TabsTriggerProps> = props => {
  return <Tabs.Trigger {...props} />
}
