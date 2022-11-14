import { SelectBox } from '@/component/SelectBox'
import { Prefecture } from '@/type/Prefecture'
import { Dispatch, FC, SetStateAction } from 'react'
import styles from './PrefectureLayout.module.css'

export const PrefectureLayout: FC<{ prefList: Prefecture[] }> = ({ prefList }) => {
  return (
    <div className={styles.wrapper}>
      <h3>都道府県</h3>
      <div className={styles.grid}>
        {prefList.map((pref) => {
          return <SelectBox pref={pref} key={pref.prefCode} />
        })}
      </div>
    </div>
  )
}
