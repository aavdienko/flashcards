import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'

import s from './sign-in.module.scss'

import { BODY_2 } from '@/assets/common/consts'
import { Button, Card, ControlledCheckbox, Typography } from '@/components/ui'
import { ControlledTextField } from '@/components/ui/controlled'

const signInSchema = z.object({
  email: z.string().nonempty('Enter email').email('Invalid email address'),
  password: z.string().min(3),
  rememberMe: z.boolean().optional(),
})

export type signInFormValues = z.infer<typeof signInSchema>

type Props = {
  onSubmit: (data: signInFormValues) => void
  isSubmitting?: boolean
}

export const SignIn = (props: Props) => {
  const { handleSubmit, control } = useForm<signInFormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  })

  return (
    <Card className={s.card}>
      <Typography variant={'large'} as={'h1'} className={s.title}>
        Sign In
      </Typography>
      <form onSubmit={handleSubmit(props.onSubmit)}>
        <DevTool control={control} />
        <div className={s.fields}>
          <ControlledTextField name={'email'} control={control} label={'Email'} type={'email'} />
          <ControlledTextField
            name={'password'}
            control={control}
            label={'Password'}
            type={'password'}
          />
        </div>
        <ControlledCheckbox name={'rememberMe'} control={control} label={'Remember me'} />
        <Typography variant={'link1'} as={Link} to="/recover-password" className={s.forgotPassLink}>
          Forgot Password?
        </Typography>
        <Button fullWidth type={'submit'} disabled={props.isSubmitting}>
          <Typography variant={'subtitle2'}>Sign In</Typography>
        </Button>
      </form>
      <Typography variant={BODY_2} as={'div'} className={s.caption}>
        Don&#39;t have an account?
      </Typography>
      <Typography variant={BODY_2} as={Link} to="/sign-up" className={s.signUpLink}>
        Sign Up
      </Typography>
    </Card>
  )
}
