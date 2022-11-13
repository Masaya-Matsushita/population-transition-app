import { FC } from 'react'
import type { FallbackProps } from 'react-error-boundary'

export const ErrorFallback: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    // TODO: 429エラー対処　https://opendata.resas-portal.go.jp/docs/api/v1/detail/index.html
    <div>
      <h2>エラーが発生しました</h2>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}
