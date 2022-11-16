import { SelectBox } from '@/component/SelectBox'
import { Prefecture } from '@/type/Prefecture'
import { Dispatch, FC, SetStateAction } from 'react'
import styles from './PrefectureLayout.module.css'

export const PrefectureLayout: FC<{
  prefList: Prefecture[]
  setPrefList: Dispatch<SetStateAction<Prefecture[]>>
}> = ({ prefList, setPrefList }) => {
  return (
    <div className={styles.wrapper}>
      <h3>都道府県</h3>
      <div className={styles.grid}>
        {prefList.map((pref) => {
          return <SelectBox pref={pref} setPrefList={setPrefList} key={pref.prefCode} />
        })}
      </div>
    </div>
  )
}
