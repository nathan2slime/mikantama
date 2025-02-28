import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useSnapshot } from 'valtio'
import { editProductMutation } from '~/api/mutations/product.mutation'

import { Button } from '~/components/ui/button'
import { DialogClose } from '~/components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '~/components/ui/form'
import { Input } from '~/components/ui/input'
import { Textarea } from '~/components/ui/textarea'
import { EditProductSchema, editProductSchema } from '~/lib/schemas/product.schema'
import { dialogState } from '~/store/dialog.state'
import { productState } from '~/store/product.state'

const Loading = dynamic(async () => (await import('~/components/loading')).Loading, { ssr: false })

export const EditProductForm = () => {
  const { editedProduct } = useSnapshot(productState)
  const queryClient = useQueryClient()

  if (!editedProduct) return

  const mutation = useMutation({
    mutationFn: editProductMutation,
    onSuccess: data => {
      queryClient.setQueryData(['get-product', data.id.toString()], prev => prev && { ...prev, ...data })

      toast.success('Product edited')
      dialogState.isOpenEditProduct = false
      form.reset()
    }
  })

  const form = useForm<EditProductSchema>({
    mode: 'all',
    resolver: zodResolver(editProductSchema),
    defaultValues: editedProduct
  })

  useEffect(() => {
    editedProduct && form.reset(editedProduct)
  }, [editedProduct])

  const { isValid } = form.formState

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(values => mutation.mutate({ id: editedProduct.id, data: values }))} className="space-y-4">
        <div className="flex flex-col md:flex-row justify-start gap-4 items-start">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel id="title">Title</FormLabel>
                <FormControl>
                  <Input placeholder="Vision Pro" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel id="price">Price</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="24" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel id="description">Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Apple Vision Pro" className="min-h-24 resize-none" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col md:flex-row justify-start gap-4 items-start">
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel id="image">Image</FormLabel>
                <FormControl>
                  <Input placeholder="https://plus.unsplash.com/" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            disabled
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel id="category">Category</FormLabel>
                <FormControl>
                  <Input placeholder="Tech" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full justify-end flex items-center gap-2">
          <DialogClose asChild>
            <Button type="reset" variant="outline" className="font-semibold">
              Cancel
            </Button>
          </DialogClose>
          <Button type="submit" className="font-semibold w-28" disabled={!isValid}>
            {mutation.isPending ? <Loading name="cardio" size="22" speed="2" /> : 'Save changes'}
          </Button>
        </div>
      </form>
    </Form>
  )
}
