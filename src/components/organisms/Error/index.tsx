'use client'

import { Button } from 'components/atoms'

import type { ErrorProps } from './types'

export const Error = ({ reset }: ErrorProps) => (
  <div className="min-h-screen p-8 col-full center">
    <header className="mb-5 fs-3xl-medium" role="banner">
      Error!
    </header>
    <main className="p-0 ai-center col-full g-5">
      <h1 className="text-center fs-3xl-medium">Page not found!</h1>
      <Button label="Try again" onClick={reset} />
    </main>
  </div>
)
