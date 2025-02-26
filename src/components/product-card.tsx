import { Star } from 'lucide-react'
import Image from 'next/image'

import { Badge } from '~/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader } from '~/components/ui/card'

import type { Product } from '~/types/product.types'

type Props = Product

export const ProductCard = ({ title, image, category, rating, ...props }: Props) => {
  const isHighRated = rating.rate > 4.5

  const price = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(props.price)

  return (
    <Card className="w-full cursor-pointer max-w-[256px] tracking-wide overflow-hidden">
      <CardHeader className="p-0 bg-white">
        <div className="relative aspect-square w-auto h-fit p-3">
          <Image src={image || '/icons/mg-holder.svg'} width={653} priority height={934} alt={title} className="w-auto h-[240px] object-cover" />
          {isHighRated && (
            <Badge className="absolute top-2 right-2">
              <Star className="h-3 w-3 fill-primary mr-1" />
              Top Rated
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="grid gap-2.5 p-4">
        <h3 className="font-semibold text-xl truncate" title={title}>
          {title}
        </h3>
        <Badge variant="secondary" className="w-fit">
          {category}
        </Badge>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="font-semibold text-base">{price}</div>
        <span className="text-xs font-semibold text-foreground/80 hover:text-primary">View Details</span>
      </CardFooter>
    </Card>
  )
}
