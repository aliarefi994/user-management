import {
  QueryClient,
  QueryCache,
  DefaultOptions,
} from '@tanstack/react-query'

const defaultQueryOptions: DefaultOptions = {
  queries: {
    retry: false,
  },
}

const queryCache = new QueryCache({
  onError: (error: unknown) => {
    console.error('Global Query Error:', error)
  },
})

export const queryClient = new QueryClient({
  defaultOptions: defaultQueryOptions,
  queryCache, 
})
