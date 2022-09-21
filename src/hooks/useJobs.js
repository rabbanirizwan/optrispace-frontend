import * as Sentry from '@sentry/nextjs'
import getConfig from 'next/config'
import useSWR from 'swr'
import { fetcher } from '../lib/fetcher'

export const useJobs = () => {
  const { publicRuntimeConfig } = getConfig()

  const { data, error } = useSWR(`${publicRuntimeConfig.api_url}/jobs`, fetcher)

  if (error) {
    if (error.message.match(/failed to fetch/i)) {
      Sentry.captureMessage('Server is not available')
      return { error: 'Server is not available' }
    }

    Sentry.captureException(error)
    return { error }
  }

  if (!data) return { isLoading: true }

  return { jobs: data }
}
