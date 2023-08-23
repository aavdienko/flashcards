import { Button, Card, Checkbox, Typography } from './components/ui'

export function App() {
  return (
    <div>
      <Button as={'button'}>Hello</Button>
      <div>
        <Typography variant={'large'}>What is Curriculum Development ? </Typography>
      </div>
      <Checkbox />
      <Card />
    </div>
  )
}
