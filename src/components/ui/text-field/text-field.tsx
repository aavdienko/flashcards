import { ComponentProps, ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { Typography } from '..'

import s from './text-field.module.scss'

import { SearchOutline, EyeOutline, EyeOffOutline, CloseOutline } from '@/assets/icons'

export type TextFieldProps = {
  error?: string
  label?: string
  search?: boolean
  className?: string
  onClearClick?: () => void
  errorMessage?: string
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const { search = false, label, disabled, type, error, onClearClick, ...rest } = props

  const [showPassword, setShowPassword] = useState<boolean>(false)

  const isShowPasswordButton = type === 'password' && !search

  const isShowClearButton =
    onClearClick && typeof rest?.value === 'string' && rest?.value?.length > 0 && search

  const finalType = getFinalType(search, type, showPassword)

  return (
    <div className={s.root}>
      <Typography variant={'body2'} as={'label'} className={`${s.label} ${disabled && s.disabled}`}>
        {label}
      </Typography>
      <div className={`${s.inputContainer} ${error ? s.error : ''} ${disabled && s.disabled}`}>
        {search && (
          <span className={s.icon}>
            <SearchOutline />
          </span>
        )}

        <input
          ref={ref}
          className={`${s.input} ${error ? s.error : ''}`}
          type={finalType}
          disabled={disabled}
          {...rest}
        />
        {isShowPasswordButton && (
          <button
            className={s.icon}
            type={'button'}
            onClick={() => setShowPassword(prev => !prev)}
            disabled={disabled}
          >
            {showPassword ? <EyeOffOutline /> : <EyeOutline />}
          </button>
        )}
        {isShowClearButton && (
          <button className={s.icon} type={'button'} onClick={onClearClick} disabled={disabled}>
            <CloseOutline />
          </button>
        )}
      </div>
      <Typography variant={'caption'} as={'div'} className={s.error}>
        {error}
      </Typography>
    </div>
  )
})

function getFinalType(
  search: boolean | undefined,
  type: ComponentProps<'input'>['type'],
  showPassword: boolean
) {
  if (type === 'password' && showPassword && !search) {
    return 'text'
  }

  return type
}
