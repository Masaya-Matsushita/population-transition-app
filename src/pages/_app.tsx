import '@/style/globals.css'
import type { AppProps } from 'next/app'
import { ErrorFallback } from '@/component/ErrorFallback'
import { ErrorBoundary } from 'react-error-boundary'

const onError = (error: Error) => {
  console.log('Error Message:', error.message)
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback} onError={onError}>
        <Component {...pageProps} />
      </ErrorBoundary>
    </>
  )
}
