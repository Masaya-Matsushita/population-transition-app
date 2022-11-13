import { SelectBox } from '@/component/SelectBox'
import { API_URL_PREFECTURE } from '@/lib/const/apiUrl'
import { Prefecture } from '@/type/Prefecture'
import { GetStaticProps, NextPage } from 'next'
import { useErrorHandler } from 'react-error-boundary'

export const getStaticProps: GetStaticProps<{ prefList: Prefecture[] }> = async () => {
  // 都道府県コード/名前を取得
  const res = await fetch(API_URL_PREFECTURE, {
    headers: { 'x-api-key': process.env.API_KEY },
  })
  const json = await res.json()
  const prefList = json.result

  return {
    props: { prefList },
  }
}

const Home: NextPage<{ prefList: Prefecture[] }> = ({ prefList }) => {
  const handleError = useErrorHandler()

  console.log(prefList)

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
      <div>
        {prefList.map(({ prefCode, prefName }) => {
          return <SelectBox text={prefName} key={prefCode} />
        })}
      </div>
    </>
  )
}

export default Home
