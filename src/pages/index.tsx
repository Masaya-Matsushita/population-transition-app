import { API_URL_PREFECTURE } from '@/lib/const/apiUrl'
import { Prefecture } from '@/type/Prefecture'
import { GetStaticProps, NextPage } from 'next'
import { PrefectureLayout } from '@/component/PrefectureLayout'

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
  return (
    <>
      <PrefectureLayout prefList={prefList} />
    </>
  )
}

export default Home
