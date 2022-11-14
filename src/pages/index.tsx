import { API_URL_PREFECTURE } from '@/lib/const/apiUrl'
import { Prefecture } from '@/type/Prefecture'
import { GetStaticProps, NextPage } from 'next'
import { useState } from 'react'
import { PrefectureLayout } from '@/component/PrefectureLayout'

export const getStaticProps: GetStaticProps<{ initPrefList: Prefecture[] }> = async () => {
  // 都道府県コード/名前を取得
  const res = await fetch(API_URL_PREFECTURE, {
    headers: { 'x-api-key': process.env.API_KEY },
  })
  const json = await res.json()

  // checkedプロパティを追加
  const initPrefList = json.result.map((prefData: Pick<Prefecture, 'prefCode' | 'prefName'>) => {
    return { ...prefData, checked: false }
  })

  return {
    props: { initPrefList },
  }
}

const Home: NextPage<{ initPrefList: Prefecture[] }> = ({ initPrefList }) => {
  const [prefList, setPrefList] = useState<Prefecture[]>(initPrefList)

  return (
    <>
      <PrefectureLayout prefList={prefList} setPrefList={setPrefList} />
    </>
  )
}

export default Home
