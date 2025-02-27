import { Nav } from '~/components/nav'
import { ScrollArea } from '~/components/ui/scroll-area'

import type { AppChildren } from '~/types'

export const AppLayout = ({ children }: AppChildren) => {
  return (
    <ScrollArea className="w-screen h-screen overflow-x-auto overflow-y-auto bg-background">
      <Nav />
      {children}
    </ScrollArea>
  )
}
