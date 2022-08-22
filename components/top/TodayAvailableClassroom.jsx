// TODO: 藤原さん実装お願いします
//       divの中に実装をお願いします
// 　　　 CSSはTodayAvailableClassroom.module.cssを使用してください
//       http://localhost:3000/ に実装が反映されます

import styles from "~/styles/top/TodayAvailableClassroom.module.css";

export const TodayAvailableClassroom = () => {
  return (
    <div>
      {/* TODO: タイトルと横並びのカードの実装 */}
      <ul className={styles.ul}>
        <li className={styles.li}>
          <p className={styles.class_room}>F301</p>
          <p className={styles.time}>14:00-15:30</p>
          <p className={styles.decision}>行くかも</p>
        </li>
        <li className={styles.li}>
          <p className={styles.class_room}>F305</p>
          <p className={styles.time}>11:00-12:30</p>
          <p className={styles.decision}>行くかも</p>
        </li>
        <li className={styles.li}>
          <p className={styles.class_room}>F306</p>
          <p className={styles.time}>14:00-15:30</p>
          <p className={styles.decision}>行くかも</p>
        </li>
        <li className={styles.li}>
          <p className={styles.class_room}>F306</p>
          <p className={styles.time}>15:30-17:00</p>
          <p className={styles.decision}>行くかも</p>
        </li>
      </ul>
    </div>
  );
};
