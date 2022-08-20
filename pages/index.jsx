import styles from '../styles/Home.module.css'
import { ToSearchButton } from '~/components/top/ToSearchButton'
import { TodayAvailableClassroom } from "~/components/top/TodayAvailableClassroom";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>中央大学空き教室確認</h1>

      <TodayAvailableClassroom />

      <hr />

      <ToSearchButton />

      <footer className={styles.footer}>Powered by ぱいおにあ</footer>
    </div>
  );
}
