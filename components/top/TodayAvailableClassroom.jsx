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
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
      <input type="button" className={styles.decision} value="行くかも"/>
    </div>
  );
};

export const Card = () => {
  return (
    <li className={styles.li}>
      <p className={styles.class_room}>F301</p>
      <p className={styles.time}>14:00-15:30</p>
      <input type="button" className={styles.decision} value="行くかも"/>
    </li>
  );
};
