import styles from '@/style/Home.module.css'
import { useErrorHandler } from 'react-error-boundary'

export default function Home() {
  const handleError = useErrorHandler()

  const handleClick = () => {
    try {
      throw new Error('Error is occurred!')
    } catch (error: any) {
      handleError(error)
    }
  }

  return (
    <>
      <div className={styles.title}>Hello World</div>
      <button onClick={handleClick}>Throw Error</button>
    </>
  )
}
