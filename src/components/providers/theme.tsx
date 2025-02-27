'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ComponentProps } from 'react'

// TODO: Dynamically importing causes 2 or more additional renders
// const NextThemesProvider = dynamic(() => import('next-themes').then(e => e.ThemeProvider), {
//   ssr: false
// })

export const ThemeProvider = ({ children, ...props }: ComponentProps<typeof NextThemesProvider>) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
