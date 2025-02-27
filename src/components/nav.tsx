'use client'

import { PlusIcon } from 'lucide-react'
import { Planet } from 'react-kawaii'

import { ModeToggle } from '~/components/toggle-theme'
import { Button } from '~/components/ui/button'

export const Nav = () => {
  return (
    <div className="w-full z-10 h-16 border-b px-4 flex justify-between items-center gap-2 border-border bg-background/80 backdrop-blur-md sticky top-0">
      <Planet className="translate-y-3" size={120} color="#C4A7E7" />

      <div className="flex items-center gap-2 justify-center">
        <Button className="font-semibold">
          New Product
          <PlusIcon />
        </Button>

        <ModeToggle />
      </div>
    </div>
  )
}
