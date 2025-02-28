import { Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Badge } from '~/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader } from '~/components/ui/card'

import type { Product } from '~/types/product.types'

type Props = Product

export const ProductCard = ({ title, id, image, category, rating, ...props }: Props) => {
  const isHighRated = rating.rate > 4.5

  const price = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(props.price)

  return (
    <Link href={`/product/${id}`}>
      <Card className="cursor-pointer group hover:border-primary duration-150 transition-colors w-[236px] tracking-wide overflow-hidden">
        <CardHeader className="p-0 bg-white">
          <div className="relative w-auto flex h-fit p-3">
            <Image src={image} width={653} priority height={934} alt={title} className="w-auto mx-auto h-[140px] object-contain" />
            {isHighRated && (
              <Badge className="absolute top-2 right-2">
                <Star className="h-3 w-3 fill-primary mr-1" />
                Top Rated
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="grid gap-2.5 p-4">
          <p className="font-semibold group-hover:text-primary text-lg truncate" title={title}>
            {title}
          </p>
          <Badge variant="secondary" className="w-fit">
            {category}
          </Badge>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex items-center justify-between">
          <div className="font-semibold text-base">{price}</div>
          <span className="text-xs font-semibold text-foreground/80 hover:text-primary">View Details</span>
        </CardFooter>
      </Card>
    </Link>
  )
}
