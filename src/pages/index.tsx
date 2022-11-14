import { API_URL_PREFECTURE } from '@/lib/const/apiUrl'
import { Prefecture } from '@/type/Prefecture'
import { GetStaticProps, NextPage } from 'next'
import { useState } from 'react'
import { PrefectureLayout } from '@/component/PrefectureLayout'

export const getStaticProps = async () => {
  // 都道府県コード/名前を取得
  const res = await fetch(API_URL_PREFECTURE, {
    headers: { 'x-api-key': process.env.API_KEY },
  })
  const json = await res.json()

  // checkedプロパティを追加
  const initPrefList = await json.result.map((prefData: any) => {
    return { ...prefData, checked: false }
  })

  return {
    props: { initPrefList },
  }
}

const Home: NextPage<{ initPrefList: any }> = ({ initPrefList }) => {
  // const [prefList, setPrefList] = useState<Prefecture[]>(initPrefList)

  // デプロイ時のエラー調査用テストデータ
  const foo = [
    { prefCode: 1, prefName: '北海道', checked: false },
    { prefCode: 2, prefName: '青森県', checked: false },
    { prefCode: 3, prefName: '岩手県', checked: false },
    { prefCode: 4, prefName: '宮城県', checked: false },
    { prefCode: 5, prefName: '秋田県', checked: false },
    { prefCode: 6, prefName: '山形県', checked: false },
    { prefCode: 7, prefName: '福島県', checked: false },
    { prefCode: 8, prefName: '茨城県', checked: false },
    { prefCode: 9, prefName: '栃木県', checked: false },
    { prefCode: 10, prefName: '群馬県', checked: false },
    { prefCode: 11, prefName: '埼玉県', checked: false },
    { prefCode: 12, prefName: '千葉県', checked: false },
    { prefCode: 13, prefName: '東京都', checked: false },
    { prefCode: 14, prefName: '神奈川県', checked: false },
    { prefCode: 15, prefName: '新潟県', checked: false },
    { prefCode: 16, prefName: '富山県', checked: false },
    { prefCode: 17, prefName: '石川県', checked: false },
    { prefCode: 18, prefName: '福井県', checked: false },
    { prefCode: 19, prefName: '山梨県', checked: false },
    { prefCode: 20, prefName: '長野県', checked: false },
    { prefCode: 21, prefName: '岐阜県', checked: false },
    { prefCode: 22, prefName: '静岡県', checked: false },
    { prefCode: 23, prefName: '愛知県', checked: false },
    { prefCode: 24, prefName: '三重県', checked: false },
    { prefCode: 25, prefName: '滋賀県', checked: false },
    { prefCode: 26, prefName: '京都府', checked: false },
    { prefCode: 27, prefName: '大阪府', checked: false },
    { prefCode: 28, prefName: '兵庫県', checked: false },
    { prefCode: 29, prefName: '奈良県', checked: false },
    { prefCode: 30, prefName: '和歌山県', checked: false },
    { prefCode: 31, prefName: '鳥取県', checked: false },
    { prefCode: 32, prefName: '島根県', checked: false },
    { prefCode: 33, prefName: '岡山県', checked: false },
    { prefCode: 34, prefName: '広島県', checked: false },
    { prefCode: 35, prefName: '山口県', checked: false },
    { prefCode: 36, prefName: '徳島県', checked: false },
    { prefCode: 37, prefName: '香川県', checked: false },
    { prefCode: 38, prefName: '愛媛県', checked: false },
    { prefCode: 39, prefName: '高知県', checked: false },
    { prefCode: 40, prefName: '福岡県', checked: false },
    { prefCode: 41, prefName: '佐賀県', checked: false },
    { prefCode: 42, prefName: '長崎県', checked: false },
    { prefCode: 43, prefName: '熊本県', checked: false },
    { prefCode: 44, prefName: '大分県', checked: false },
    { prefCode: 45, prefName: '宮崎県', checked: false },
    { prefCode: 46, prefName: '鹿児島県', checked: false },
    { prefCode: 47, prefName: '沖縄県', checked: false },
  ]

  return <>{/* <PrefectureLayout prefList={foo} /> */}</>
}

export default Home
