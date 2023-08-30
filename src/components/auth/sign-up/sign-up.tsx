import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

import s from './sign-up.module.scss'
import { signUpSchema, FormValues } from './sign-up.schema'

import { Card, Typography, Button } from '@/components/ui'
import { ControlledTextField } from '@/components/ui/controlled'

type Props = {
  onSubmit: (data: Omit<FormValues, 'confirmPassword'>) => any
}

const BODY_2 = 'body2'

export const SignUp = (props: Props) => {
  const navigate = useNavigate()

  const { handleSubmit, control } = useForm<FormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  const handleFormSubmit = handleSubmit(({ email, password }) => {
    props
      .onSubmit({ email, password })
      .unwrap()
      .then(() => navigate('/sign-in'))
  })

  return (
    <Card className={s.card}>
      <Typography variant={'large'} as={'h1'} className={s.title}>
        Sign Up
      </Typography>
      <form onSubmit={handleFormSubmit}>
        <div className={s.fields}>
          <ControlledTextField name={'email'} control={control} label={'Email'} type={'email'} />
          <ControlledTextField
            name={'password'}
            control={control}
            label={'Password'}
            type={'password'}
          />
          <ControlledTextField
            name={'confirmPassword'}
            control={control}
            label={'Confirm password'}
            type={'password'}
          />
        </div>
        <Button fullWidth type={'submit'}>
          <Typography variant={'subtitle2'}>Sign Up</Typography>
        </Button>
      </form>
      <Typography variant={BODY_2} as={'div'} className={s.caption}>
        Already have an account?
      </Typography>
      <Typography variant={BODY_2} as={Link} to="/sign-in" className={s.signInLink}>
        Sign In
      </Typography>
    </Card>
  )
}
