type Rating = {
  rate: number
  count: number
}

export type Product = {
  id: number
  title: string
  description: string
  category: string
  image: string
  rating: Rating
  price: number
}
