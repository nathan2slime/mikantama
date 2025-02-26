import type { AppChildren } from '~/types'

export const AppLayout = ({ children }: AppChildren) => {
  return <div className="w-screen h-screen bg-background">{children}</div>
}
