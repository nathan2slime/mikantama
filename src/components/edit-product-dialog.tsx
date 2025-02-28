'use client'

import { useSnapshot } from 'valtio'

import { EditProductForm } from '~/components/edit-product-form'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '~/components/ui/dialog'
import { dialogState } from '~/store/dialog.state'

export const EditProductDialog = () => {
  const { isOpenEditProduct } = useSnapshot(dialogState)

  return (
    <Dialog
      open={isOpenEditProduct}
      onOpenChange={e => {
        dialogState.isOpenEditProduct = e
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-lg text-foreground">Edit product</DialogTitle>
        </DialogHeader>

        <EditProductForm />
      </DialogContent>
    </Dialog>
  )
}
