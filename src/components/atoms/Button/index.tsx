'use client'

import type { ButtonProps } from './types'

export const Button = ({ label, ...props }: ButtonProps) => (
  <button
    className="fs-md tx-white flex size-fit cursor-pointer bg-sky-700 px-10 py-4 transition-colors ease-in-out br-md center fw-medium hover:bg-sky-500 active:bg-sky-700"
    {...props}
  >
    {label}
  </button>
)
