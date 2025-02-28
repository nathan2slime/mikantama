'use client'

import { AlertCircle } from 'lucide-react'
import Link from 'next/link'

import { Alert, AlertDescription, AlertTitle } from '~/components/ui/alert'
import { Button } from '~/components/ui/button'

const Handle = () => {
  return (
    <div className="w-screen h-screen p-4 flex justify-center items-center">
      <div className="w-full gap-4 max-w-sm flex flex-col items-center justify-center">
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription className="italic">Unable to load product details. Please try again later.</AlertDescription>
        </Alert>

        <Link href="/">
          <Button variant="outline">Go to Home</Button>
        </Link>
      </div>
    </div>
  )
}

export default Handle
