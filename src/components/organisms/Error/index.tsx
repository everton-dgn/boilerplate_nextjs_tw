'use client'

import { Button } from 'components/atoms'

import type { ErrorProps } from './types'

export const Error = ({ reset }: ErrorProps) => (
  <div className="min-h-screen p-8 center col-full">
    <header className="mb-32 text-32 font-500" role="banner">
      Error!
    </header>
    <main className="p-0 ai-center col-full g-8">
      <h1 className="text-center text-28 font-500">Page not found!</h1>
      <Button label="Try again" onClick={reset} />
    </main>
  </div>
)
