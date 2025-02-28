'use client'

import { useQuery } from '@tanstack/react-query'
import { ChevronLeft, Edit, Star, Trash } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { fetchProductById } from '~/api/queries/product.query'
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import { cn } from '~/lib/utils'
import { dialogState } from '~/store/dialog.state'
import { productState } from '~/store/product.state'

type Props = {
  id: string
}

export const ProductOverview = ({ id }: Props) => {
  const { data } = useQuery(fetchProductById(id))

  if (!data) throw new Error('Product not found')

  const isHighRated = data.rating.rate > 4.5

  const price = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(data.price)

  return (
    <div className="w-full pt-7 px-4 max-w-7xl mx-auto">
      <Link aria-label="Back" href="/home">
        <Button size="icon" variant="outline">
          <ChevronLeft />
        </Button>
      </Link>

      <div className="w-full pt-3 flex gap-6 flex-col md:flex-row">
        <div className="border-b md:border-b-0 md:border-r border-border bg-white dark:rounded-lg px-5 py-3 aspect-square flex w-full max-w-96">
          <Image src={data.image} alt={data.title} width={653} priority height={934} className="object-contain w-full rounded-lg" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <Star className={cn('w-5 h-5', isHighRated ? 'fill-primary' : 'fill-muted')} />
            <span className="text-muted-foreground">{data.rating.rate} rating</span>
          </div>

          <h1 className="text-2xl text-primary font-bold">{data.title}</h1>

          <p className="text-muted-foreground mb-2 text-base mt-3">{data.description}</p>

          <div className="flex my-2  justify-start gap-3 items-center">
            <div className="font-bold text-chart-2 text-2xl">{price}</div>

            {isHighRated && (
              <Badge>
                <Star className="h-3 w-3 fill-primary mr-1" />
                Top Rated
              </Badge>
            )}
          </div>

          <div className="bg-muted rounded-lg flex gap-2 mt-3 p-3 sm:max-w-xs w-full">
            <Button
              size="sm"
              onClick={() => {
                productState.editedProduct = data
                dialogState.isOpenEditProduct = true
              }}
              className="font-semibold w-full"
            >
              <Edit />
              Edit
            </Button>
            <Button
              onClick={() => {
                productState.deletedProduct = data.id.toString()
                dialogState.isOpenDeleteProduct = true
              }}
              size="sm"
              variant="destructive"
              className="font-semibold w-full"
            >
              <Trash />
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
