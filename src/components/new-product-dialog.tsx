'use client'

import { useSnapshot } from 'valtio'
import { NewProductForm } from '~/components/new-product-form'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '~/components/ui/dialog'
import { dialogState } from '~/store/dialog.state'

export const NewProductDialog = () => {
  const { isOpenNewProduct } = useSnapshot(dialogState)

  return (
    <Dialog
      open={isOpenNewProduct}
      onOpenChange={e => {
        dialogState.isOpenNewProduct = e
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-lg text-foreground">New product</DialogTitle>
        </DialogHeader>

        <NewProductForm />
      </DialogContent>
    </Dialog>
  )
}
