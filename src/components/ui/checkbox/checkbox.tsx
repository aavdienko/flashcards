import { FC } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'

import { Typography } from '../typography'

import s from './checkbox.module.scss'

import { Check } from '@/assets/icons'

export type CheckboxProps = {
  checked?: boolean
  onValueChange?: (checked: boolean) => void
  label?: string
  disabled?: boolean
  required?: boolean
}
export const Checkbox: FC<CheckboxProps> = ({
  checked,
  disabled,
  required,
  label,
  onValueChange,
}) => {
  return (
    <Typography variant={'body2'} as={'label'} className={`${s.label} ${disabled && s.disabled}`}>
      <div className={`${s.buttonWrapper} ${disabled && s.disabled}`}>
        <CheckboxRadix.Root
          className={`${s.root} ${disabled && s.disabled}`}
          checked={checked}
          disabled={disabled}
          required={required}
          onCheckedChange={onValueChange}
        >
          {checked && (
            <CheckboxRadix.Indicator style={{ width: 24, height: 24 }}>
              <Check />
            </CheckboxRadix.Indicator>
          )}
        </CheckboxRadix.Root>
      </div>
      {label}
    </Typography>
  )
}
