import { API_URL_PREFECTURE } from '@/lib/const/apiUrl'
import { GetStaticProps, NextPage } from 'next'
import { useErrorHandler } from 'react-error-boundary'

export const getStaticProps: GetStaticProps = async () => {
  // 都道府県コード/名前を取得
  const res = await fetch(API_URL_PREFECTURE, {
    headers: { 'x-api-key': process.env.API_KEY },
  })
  const json = await res.json()
  const prefectureList = json.result

  return {
    props: { prefectureList },
  }
}

const Home: NextPage<any> = (props) => {
  const handleError = useErrorHandler()

  console.log(props)

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

export default Home
