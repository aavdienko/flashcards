import { ChangeEvent, FC } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import s from '../decks.module.scss'

import { UpdateDeck, updateDeckSchema } from './update-deck.schema'

import { BlankDeckCover, EditOutline, ImageOutline } from '@/assets/icons'
import { Button, ControlledCheckbox, Modal, Typography } from '@/components/ui'
import { ControlledTextField } from '@/components/ui/controlled'
import { useUpdateDeckMutation } from '@/services/decks'

type UpdateDeckModalProps = {
  deckId: string
  cover: File | null
  setCover: (cover: File | null) => void
}

export const UpdateDeckModal: FC<UpdateDeckModalProps> = ({ deckId, cover, setCover }) => {
  const [updateDeck] = useUpdateDeckMutation()

  const handleChangeCover = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0]

    setCover(file)
  }

  const handleUpdate = (id: string) => {
    const form = new FormData()

    form.append('name', getValues().name)
    form.append('isPrivate', getValues().isPrivate)
    cover && form.append('cover', cover)

    updateDeck({ id, form })
  }

  const { control, handleSubmit, getValues } = useForm<UpdateDeck>({
    resolver: zodResolver(updateDeckSchema),
    defaultValues: {
      name: '',
      isPrivate: false,
    },
  })

  return (
    <Modal
      trigger={<EditOutline />}
      title="Update deck"
      footerBtn={<Button onClick={handleSubmit(() => handleUpdate(deckId))}>Save changes</Button>}
    >
      <div className={s.coverModal}>
        {cover ? (
          <img className={s.img} src={URL.createObjectURL(cover)} alt="cover" />
        ) : (
          <BlankDeckCover />
        )}
      </div>
      <label htmlFor="change-cover" className={s.fileLabel}>
        <Button as={'a'} variant="secondary" fullWidth>
          <ImageOutline />
          <Typography as="span" variant="subtitle2">
            Change Cover
          </Typography>
        </Button>
        <input
          id="change-cover"
          type="file"
          accept="image/*"
          onChange={handleChangeCover}
          style={{ display: 'none' }}
        />
      </label>
      <form onSubmit={handleSubmit(() => handleUpdate(deckId))} className={s.form}>
        <ControlledTextField name="name" control={control} label="Name deck" />
        <ControlledCheckbox name="isPrivate" control={control} label="Private deck" />
      </form>
    </Modal>
  )
}
