import '@/style/globals.css'
import type { AppProps } from 'next/app'
import { ErrorFallback } from '@/component/ErrorFallback'
import { ErrorBoundary } from 'react-error-boundary'
import Head from 'next/head'
import { Header } from '@/component/Header'

const onError = (error: Error) => {
  console.log('Error Message:', error.message)
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>人口推移確認アプリ</title>
      </Head>
      <Header />
      <ErrorBoundary FallbackComponent={ErrorFallback} onError={onError}>
        <Component {...pageProps} />
      </ErrorBoundary>
    </>
  )
}
