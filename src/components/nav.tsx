import { PlusIcon } from 'lucide-react'

import { ModeToggle } from '~/components/toggle-theme'
import { Button } from '~/components/ui/button'

export const Nav = () => {
  return (
    <div className="w-full z-10 h-16 border-b px-4 flex justify-between items-center gap-2 border-border bg-background/80 backdrop-blur-md sticky top-0">
      <div className="flex items-center gap-2 justify-center">
        <Button size="icon">
          <PlusIcon />
        </Button>

        <ModeToggle />
      </div>
    </div>
  )
}
