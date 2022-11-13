import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.wrapper}>
      <h2 className={styles.title}>人口推移確認アプリ</h2>
    </header>
  )
}
