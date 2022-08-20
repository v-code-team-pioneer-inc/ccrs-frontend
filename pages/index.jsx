import styles from '../styles/Home.module.css'
import { ToSearchButton } from '~/components/top/ToSearchButton'

export default function Home() {
  return (
    <div className={styles.container}>

      <ToSearchButton />

      <footer className={styles.footer}>
        Powered by ぱいおにあ
      </footer>
    </div>
  )
}
