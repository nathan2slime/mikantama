import { ModeToggle } from '~/components/toggle-theme'
import { Button } from '~/components/ui/button'

import { env } from '~/env.mjs'

const Home = () => {
  return (
    <div className="w-screen h-screen bg-background">
      {env.NEXT_PUBLIC_API_URL}
      <h1>Heading</h1>
      <Button>Create</Button>
      <ModeToggle />
    </div>
  )
}

export default Home
