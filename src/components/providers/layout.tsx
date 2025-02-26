import type { AppChildren } from '~/types'

export const AppLayout = ({ children }: AppChildren) => {
  return <div className="w-screen h-screen overflow-x-auto overflow-y-auto bg-background">{children}</div>
}
