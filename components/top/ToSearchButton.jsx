// TODO: みおさん実装お願いします
//       divの中に実装をお願いします
// 　　　 CSSはToSearchButton.module.cssを使用してください
//       http://localhost:3000/ に実装が反映されます

import styles from "~/styles/top/ToSearchButton.module.css";

export const ToSearchButton = () => {
  return (
    <div>
      <button type="button" className={styles.link_button}>
        空き教室を確認する
      </button>

      <button type="button">
        各教室の<br/>今後のスケジュールを<br/>確認する
      </button>

    </div>
  );
};
