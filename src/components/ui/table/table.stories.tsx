import type { Meta, StoryObj } from '@storybook/react'

import s from './table.module.scss'

import { Table, TableBody, TableCell, TableHeader, TableRow } from './'

const meta = {
  title: 'Components/UI/Table',
  component: Table,
  tags: ['autodocs'],
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <TableHeader>
          <TableRow>
            <TableCell className={s.headCell}>Question</TableCell>
            <TableCell className={s.headCell}>Answer</TableCell>
            <TableCell className={s.headCell}>Last Updated</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className={s.tableCell}>2+2?</TableCell>
            <TableCell className={s.tableCell}>4</TableCell>
            <TableCell className={s.tableCell}>31.08.2023</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={s.tableCell}>2-2?</TableCell>
            <TableCell className={s.tableCell}>0</TableCell>
            <TableCell className={s.tableCell}>31.08.2023</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={s.tableCell}>2*2t?</TableCell>
            <TableCell className={s.tableCell}>4</TableCell>
            <TableCell className={s.tableCell}>31.08.2023</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={s.tableCell}>2/2</TableCell>
            <TableCell className={s.tableCell}>1</TableCell>
            <TableCell className={s.tableCell}>31.08.2023</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={s.tableCell}>1+1</TableCell>
            <TableCell className={s.tableCell}>2</TableCell>
            <TableCell className={s.tableCell}>31.08.2023</TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
}
