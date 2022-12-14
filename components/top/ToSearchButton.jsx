// TODO: みおさん実装お願いします
//       divの中に実装をお願いします
// 　　　 CSSはToSearchButton.module.cssを使用してください
//       http://localhost:3000/ に実装が反映されます

import styles from "~/styles/top/ToSearchButton.module.css";
import Link from "next/link"

export const ToSearchButton = () => {
  return (
  
    <div className={styles.container}>
     <Link href="/rooms">
      <button type="button" className={styles.link_button}>
        空き教室を確認する
      </button>
     </Link>
      <br/>
      <button type="button" className={styles.link_button2}>
        各教室の<br/>今後のスケジュールを<br/>確認する
      </button>
     
    </div>
  );
};
