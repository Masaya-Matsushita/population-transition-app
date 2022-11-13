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
      <div>Hello World</div>
      <button onClick={handleClick}>Throw Error</button>
    </>
  )
}
