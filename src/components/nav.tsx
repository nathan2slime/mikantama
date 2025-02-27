'use client'

import { PlusIcon } from 'lucide-react'
import Link from 'next/link'
import { Planet } from 'react-kawaii'

import { ModeToggle } from '~/components/toggle-theme'
import { Button } from '~/components/ui/button'

export const Nav = () => {
  return (
    <div className="w-full right-1 z-10 rounded-br-lg rounded-bl-lg h-16 border-b px-4 flex justify-between items-center gap-2 border-border bg-muted-foreground/90 backdrop-blur-md sticky top-0">
      <Link href="/home">
        <Planet size={120} className="translate-y-3 -translate-x-6" color="#C4A7E7" />
      </Link>

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
