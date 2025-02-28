'use client'

import { PlusIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { Planet } from 'react-kawaii'

import { ModeToggle } from '~/components/toggle-theme'
import { Button } from '~/components/ui/button'
import { dialogState } from '~/store/dialog.state'

export const Nav = () => {
  const { theme } = useTheme()
  return (
    <div className="w-full right-1 z-10 border-b border-border mx-auto max-w-7xl h-16 px-4 flex justify-between items-center gap-2 bg-card/80 backdrop-blur-md sticky top-0">
      <Link href="/home" aria-label="Go to Home">
        <Planet size={120} className="translate-y-3 -translate-x-6" color={theme === 'dark' ? '#fff' : '#e8e8e8'} />
      </Link>

      <div className="flex items-center gap-2 justify-center">
        <Button
          onClick={() => {
            dialogState.isOpenNewProduct = true
          }}
          className="font-semibold"
        >
          New Product
          <PlusIcon />
        </Button>

        <ModeToggle />
      </div>
    </div>
  )
}
