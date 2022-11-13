import { SelectBox } from '@/component/SelectBox'
import { Prefecture } from '@/type/Prefecture'
import { FC } from 'react'
import styles from './PrefectureLayout.module.css'

export const PrefectureLayout: FC<{ prefList: Prefecture[] }> = ({ prefList }) => {
  return (
    <div className={styles.wrapper}>
      <h3>都道府県</h3>
      <div className={styles.grid}>
        {prefList.map(({ prefCode, prefName }) => {
          return <SelectBox text={prefName} key={prefCode} />
        })}
      </div>
    </div>
  )
}
