'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import { ReactNode, useState } from 'react'
import { queryClient as baseClient } from './client'

export function ReactQueryProvider({ children }: { children: ReactNode }) {
  const [client] = useState(() => baseClient)

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
