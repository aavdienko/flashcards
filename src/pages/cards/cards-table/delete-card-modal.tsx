import { FC } from 'react'

import { TrashOutline } from '@/assets/icons'
import { Button, Typography } from '@/components/ui'
import { Modal } from '@/components/ui/modal'
import { useDeleteCardMutation } from '@/services/cards'

type DeleteCardModalProps = { cardId: string }

export const DeleteCardModal: FC<DeleteCardModalProps> = ({ cardId }) => {
  const [deleteCard] = useDeleteCardMutation()

  const handleDeleteCard = (id: string) => {
    deleteCard(id)
  }

  return (
    <Modal
      trigger={<TrashOutline />}
      title="Delete Card"
      footerBtn={<Button onClick={() => handleDeleteCard(cardId)}>Delete Card</Button>}
    >
      <Typography>Do you really want to remove Card Name? All cards will be deleted.</Typography>
    </Modal>
  )
}
