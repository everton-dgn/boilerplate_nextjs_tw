'use client'

import type { ButtonProps } from './types'

export const Button = ({ label, ...props }: ButtonProps) => (
  <button
    className="fs-md flex size-fit cursor-pointer rounded-md bg-sky-700 px-10 py-4 text-white transition-colors ease-in-out center fw-medium hover:bg-sky-500 active:bg-sky-700"
    {...props}
  >
    {label}
  </button>
)
