import styles from './ErrorFallback.module.css'
import { FC } from 'react'
import type { FallbackProps } from 'react-error-boundary'
import Image from 'next/image'
import { isWider } from '@/lib/func/isWider'

export const ErrorFallback: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    // TODO: 429エラー対処　https://opendata.resas-portal.go.jp/docs/api/v1/detail/index.html
    <div className={styles.wrapper}>
      <Image
        src='/error.svg'
        alt=''
        width={isWider(600) ? 300 : 200}
        height={isWider(600) ? 300 : 200}
      />
      <section className={styles.text_section}>
        <h3>エラーが発生しました</h3>
        <p className={styles.description}>時間を置いてもう一度お試しください。</p>
      </section>
      <button onClick={resetErrorBoundary} className={styles.button}>
        再読み込み
      </button>
    </div>
  )
}
