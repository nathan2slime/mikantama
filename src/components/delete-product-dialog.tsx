'use client'

import { useMutation } from '@tanstack/react-query'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { useSnapshot } from 'valtio'

import { deleteProductMutation } from '~/api/mutations/product.mutation'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from '~/components/ui/alert-dialog'
import { dialogState } from '~/store/dialog.state'
import { productState } from '~/store/product.state'

const Loading = dynamic(async () => (await import('~/components/loading')).Loading, { ssr: false })

export const DeleteProductDialog = () => {
  const { isOpenDeleteProduct } = useSnapshot(dialogState)
  const { deletedProduct } = useSnapshot(productState)

  const router = useRouter()

  const mutation = useMutation({
    mutationFn: deleteProductMutation,
    mutationKey: ['delete-product', deletedProduct],
    onSuccess: () => {
      toast.success('Product deleted')
      dialogState.isOpenDeleteProduct = false
      router.push('/home')
    }
  })

  return (
    <AlertDialog
      open={isOpenDeleteProduct}
      onOpenChange={e => {
        dialogState.isOpenDeleteProduct = e
      }}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="font-semibold w-28">Cancel</AlertDialogCancel>
          <AlertDialogAction className="font-semibold w-28" onClick={() => mutation.mutate(String(deletedProduct))}>
            {mutation.isPending ? <Loading name="cardio" size="22" speed="2" /> : 'Continue'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
