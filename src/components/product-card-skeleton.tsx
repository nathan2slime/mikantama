import { Card, CardContent, CardFooter, CardHeader } from '~/components/ui/card'
import { Skeleton } from '~/components/ui/skeleton'

export const ProductCardSkeleton = () => (
  <Card className="w-full cursor-pointer h-[298px] max-w-[236px] tracking-wide overflow-hidden">
    <CardHeader className="p-0 bg-white">
      <div className="relative w-auto flex h-fit p-3">
        <Skeleton className="w-full h-[140px]" />
      </div>
    </CardHeader>
    <CardContent className="grid gap-2.5 p-4">
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </CardContent>
    <CardFooter className="p-4 pt-0 flex items-center justify-between">
      <Skeleton className="h-5 w-16" />
      <Skeleton className="h-4 w-20" />
    </CardFooter>
  </Card>
)
