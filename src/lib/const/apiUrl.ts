// 都道府県一覧 : https://opendata.resas-portal.go.jp/docs/api/v1/prefectures.html
export const API_URL_PREFECTURE = 'https://opendata.resas-portal.go.jp/api/v1/prefectures'

// 指定都道府県の人口構成 : https://opendata.resas-portal.go.jp/docs/api/v1/population/composition/perYear.html
export const API_URL_POPULATION = (prefectureCode: number) => {
  return `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefectureCode}`
}
