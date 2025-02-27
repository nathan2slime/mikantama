type Rating = {
  rate: number
  count: number
}

export type Product = {
  id: number
  title: string
  description: string
  category: string
  rating: Rating
  price: number
  image: string
}
