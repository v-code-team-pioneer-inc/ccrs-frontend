import styles from '../styles/Home.module.css'
import { ToSearchButton } from '~/components/top/ToSearchButton'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        中央大学空き教室確認
      </h1>

      <ToSearchButton />

      <footer className={styles.footer}>Powered by ぱいおにあ</footer>
    </div>
  );
}
