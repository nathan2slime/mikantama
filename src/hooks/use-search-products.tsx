import { useRouter } from 'next/navigation'

export const useSearchProducts = (searchParams: Record<string, string>) => {
  const router = useRouter()

  const onSearch = (args: Record<string, string>) => {
    const newSearchParams = new URLSearchParams({ ...searchParams, ...args })

    router.push(`?${newSearchParams}`, { scroll: true })
  }

  return { onSearch }
}
