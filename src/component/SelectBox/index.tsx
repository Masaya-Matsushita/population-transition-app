import { Prefecture } from '@/type/Prefecture'
import { Dispatch, FC, SetStateAction } from 'react'
import styles from './SelectBox.module.css'

export const SelectBox: FC<{
  pref: Prefecture
  setPrefList: Dispatch<SetStateAction<Prefecture[]>>
}> = ({ pref, setPrefList }) => {
  // セレクトボックスをクリック
  const handleSelect = (prefCode: number) => {
    setPrefList((prevPrefList) => {
      return prevPrefList.map((pref) => {
        if (pref.prefCode === prefCode) {
          return { ...pref, checked: !pref.checked }
        }
        return pref
      })
    })
  }

  return (
    <label className={styles.wrapper} key={pref.prefCode}>
      <input
        type='checkbox'
        checked={pref.checked}
        onChange={() => handleSelect(pref.prefCode)}
        className={styles.checkbox}
      />
      <span className={styles.text}>{pref.prefName}</span>
    </label>
  )
}
