import { ChangeEvent, FC } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import s from './cards.module.scss'
import { NewCard, newCardSchema } from './new-card.schema'

import { BlankDeckCover, ImageOutline } from '@/assets/icons'
import { Button, Typography } from '@/components/ui'
import { ControlledTextField } from '@/components/ui/controlled'
import { Modal } from '@/components/ui/modal'
import { useCreateCardMutation } from '@/services/cards'

type CreateCardModalProps = {
  questionCover: File | null
  handleQuestionCover: (e: ChangeEvent<HTMLInputElement>) => void
  answerCover: File | null
  handleAnswerCover: (e: ChangeEvent<HTMLInputElement>) => void
}

export const CreateCardModal: FC<CreateCardModalProps> = ({
  questionCover,
  handleQuestionCover,
  answerCover,
  handleAnswerCover,
}) => {
  const { id } = useParams()

  const [createCard] = useCreateCardMutation()

  const { control, handleSubmit, getValues } = useForm<NewCard>({
    resolver: zodResolver(newCardSchema),
    defaultValues: {
      question: '',
      answer: '',
      questionImg: '',
      answerImg: '',
    },
  })

  const handleCreateCard = () => {
    const form = new FormData()

    form.append('question', getValues().question)
    form.append('answer', getValues().answer)
    questionCover && form.append('questionImg', questionCover)
    answerCover && form.append('answerImg', answerCover)

    createCard({ id, form })
  }

  return (
    <Modal
      trigger={<Button>Add new card</Button>}
      title={'Add New Card'}
      footerBtn={<Button onClick={handleSubmit(handleCreateCard)}>Add New Card</Button>}
    >
      <form onSubmit={handleSubmit(handleCreateCard)} className={s.form}>
        <div className={s.coverModal}>
          {questionCover ? (
            <img className={s.img} src={URL.createObjectURL(questionCover)} alt="cover" />
          ) : (
            <BlankDeckCover />
          )}
        </div>
        <label htmlFor="change-question" className={s.fileLabel}>
          <Button as={'a'} variant="secondary" fullWidth>
            <ImageOutline />
            <Typography as="span" variant="subtitle2">
              Change Cover
            </Typography>
          </Button>
          <input
            id="change-question"
            type="file"
            accept="image/*"
            onChange={handleQuestionCover}
            style={{ display: 'none' }}
          />
        </label>
        <ControlledTextField label="Question" name="question" control={control} />
        <div className={s.coverModal}>
          {answerCover ? (
            <img className={s.img} src={URL.createObjectURL(answerCover)} alt="cover" />
          ) : (
            <BlankDeckCover />
          )}
        </div>
        <label htmlFor="change-answer" className={s.fileLabel}>
          <Button as={'a'} variant="secondary" fullWidth>
            <ImageOutline />
            <Typography as="span" variant="subtitle2">
              Change Cover
            </Typography>
          </Button>
          <input
            id="change-answer"
            type="file"
            accept="image/*"
            onChange={handleAnswerCover}
            style={{ display: 'none' }}
          />
        </label>
        <ControlledTextField label="Answer" name="answer" control={control} />
      </form>
    </Modal>
  )
}
