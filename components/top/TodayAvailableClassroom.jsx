// TODO: 藤原さん実装お願いします
//       divの中に実装をお願いします
// 　　　 CSSはTodayAvailableClassroom.module.cssを使用してください
//       http://localhost:3000/ に実装が反映されます

import styles from "~/styles/top/TodayAvailableClassroom.module.css";

export const TodayAvailableClassroom = () => {
  return (
    <div>
      {/* TODO: APIから受け取ったデータを表示するようにする */}
      <ul className={styles.box}>
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
    </div>
  );
};

export const Card = () => {
  return (
    <li className={styles.content}>
      <p className={styles.class_room}>F301</p>
      <p className={styles.time}>14:00-15:30</p>
      <button onClick={() => { alert("クリックされました"); }}
 className={styles.decision}>行くかも</button>
    </li>
  );
};
