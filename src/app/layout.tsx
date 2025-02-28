import type { Metadata } from 'next'
import { Comic_Neue } from 'next/font/google'

import { Providers } from '~/components/providers'
import { AppLayout } from '~/components/providers/layout'
import { ThemeProvider } from '~/components/providers/theme'
import type { AppChildren } from '~/types'

import '~/styles/globals.css'

export const metadata: Metadata = {
  title: 'Mikantama',
  description: 'Generated by create next app'
}

const base = Comic_Neue({
  subsets: ['latin'],
  weight: ['300', '400', '700']
})

const RootLayout = ({ children }: AppChildren) => {
  return (
    <html lang="en">
      <body className={base.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Providers>
            <AppLayout>{children}</AppLayout>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
