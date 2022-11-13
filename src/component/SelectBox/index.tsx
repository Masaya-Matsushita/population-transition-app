import { FC } from 'react'
import styles from './SelectBox.module.css'

export const SelectBox: FC<{ text: string }> = ({ text }) => {
  return (
    <label className={styles.wrapper}>
      <input type='checkbox' className={styles.checkbox} />
      <span className={styles.text}>{text}</span>
    </label>
  )
}
