import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import dynamic from 'next/dynamic'
import { useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { createProductMutation } from '~/api/mutations/product.mutation'
import { Button } from '~/components/ui/button'
import { DialogClose } from '~/components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '~/components/ui/form'
import { Input } from '~/components/ui/input'
import { Textarea } from '~/components/ui/textarea'
import { NewProductSchema, newProductSchema } from '~/lib/schemas/product.schema'
import { dialogState } from '~/store/dialog.state'
import { Product } from '~/types/product.types'

const Loading = dynamic(async () => (await import('~/components/loading')).Loading, { ssr: false })

export const NewProductForm = () => {
  const searchParams = useSearchParams()

  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: createProductMutation,
    mutationKey: ['create-product'],
    onSuccess: data => {
      const limit = Number.parseInt(String(searchParams.get('limit')))

      // 10 represents the default limit of items per fetch
      const newProduct: Product = { ...data, rating: { count: 1, rate: 1 } }
      queryClient.setQueryData<Product[]>(['products', Number.isInteger(limit) ? limit : 10], (prev = []) => [newProduct, ...prev])

      toast.success('New product created')
      dialogState.isOpenNewProduct = false
    }
  })

  const form = useForm<NewProductSchema>({
    mode: 'all',
    resolver: zodResolver(newProductSchema),
    defaultValues: {
      category: '',
      description: '',
      image: '',
      price: 0,
      title: ''
    }
  })

  const { isValid } = form.formState

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(values => mutation.mutate(values))} className="space-y-4">
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
              <FormLabel id="bio">Bio</FormLabel>
              <FormControl>
                <Textarea placeholder="Apple Vision Pro" className="resize-none" {...field} />
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
