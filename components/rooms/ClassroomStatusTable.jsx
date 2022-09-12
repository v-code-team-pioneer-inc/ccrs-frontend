// TODO: 多田さん実装お願いします
//       divの中に実装をお願いします
// 　　　 CSSはClassroomStatusTable.module.cssを使用してください
//       http://localhost:3000/rooms/ に実装が反映されます

import styles from "~/styles/rooms/ClassroomStatusTable.module.css";

export const ClassroomStatusTable = () => {
  return (
    <table border="1" className={styles.room_table}>
      <thead>
        <tr className={styles.room_head}>
          <th>時間/教室</th> 
          <th>F301</th> <th>F302</th> <th>F303</th> <th>F304</th> <th>F305</th> 
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className={styles.room_main}>9:00-10:40</th> <td></td> <td></td> <td></td> <td></td> <td></td>  
        </tr>
        <tr>
          <th className={styles.room_main}>10:50-12:30</th> <td></td> <td></td> <td></td> <td></td> <td></td>
        </tr>
        <tr>
          <th className={styles.room_sub}>昼休み</th> <td className={styles.room_sub}></td> <td className={styles.room_sub}></td> 
          <td className={styles.room_sub}></td> <td className={styles.room_sub}></td> <td className={styles.room_sub}></td> 
        </tr>
        <tr>
          <th className={styles.room_main}>13:20-15:00</th> <td></td> <td></td> <td></td> <td></td> <td></td>
        </tr>
        <tr>
          <th className={styles.room_main}>15:10-16:50</th> <td></td> <td></td> <td></td> <td></td> <td></td>
        </tr>
        <tr>
          <th className={styles.room_main}>17:00-18:40</th> <td></td> <td></td> <td></td> <td></td> <td></td>
        </tr>
        <tr>
          <th className={styles.room_main}>18:50-20:30</th> <td></td> <td></td> <td></td> <td></td> <td></td> 
        </tr>


        <tr className={styles.room_head}>
          <th>時間/教室</th> 
          <th>F401</th> <th>F402</th> <th>F403</th> <th>F404</th> <th>F405</th> 
        </tr>
        <tr>
          <th className={styles.room_main}>9:00-10:40</th> <td></td> <td></td> <td></td> <td></td> <td></td>  
        </tr>
        <tr>
          <th className={styles.room_main}>10:50-12:30</th> <td></td> <td></td> <td></td> <td></td> <td></td>
        </tr>
        <tr>
          <th className={styles.room_sub}>昼休み</th> <td className={styles.room_sub}></td> <td className={styles.room_sub}></td> 
          <td className={styles.room_sub}></td> <td className={styles.room_sub}></td> <td className={styles.room_sub}></td> 
        </tr>
        <tr>
          <th className={styles.room_main}>13:20-15:00</th> <td></td> <td></td> <td></td> <td></td> <td></td>
        </tr>
        <tr>
          <th className={styles.room_main}>15:10-16:50</th> <td></td> <td></td> <td></td> <td></td> <td></td>
        </tr>
        <tr>
          <th className={styles.room_main}>17:00-18:40</th> <td></td> <td></td> <td></td> <td></td> <td></td>
        </tr>
        <tr>
          <th className={styles.room_main}>18:50-20:30</th> <td></td> <td></td> <td></td> <td></td> <td></td> 
        </tr>

        <tr className={styles.room_head}>
          <th>時間/教室</th> 
          <th>F501</th> <th>F502</th> <th>F503</th> <th>F504</th> <th>F505</th> 
        </tr>
        <tr>
          <th className={styles.room_main}>9:00-10:40</th> <td></td> <td></td> <td></td> <td></td> <td></td>  
        </tr>
        <tr>
          <th className={styles.room_main}>10:50-12:30</th> <td></td> <td></td> <td></td> <td></td> <td></td>
        </tr>
        <tr>
          <th className={styles.room_sub}>昼休み</th> <td className={styles.room_sub}></td> <td className={styles.room_sub}></td> 
          <td className={styles.room_sub}></td> <td className={styles.room_sub}></td> <td className={styles.room_sub}></td> 
        </tr>
        <tr>
          <th className={styles.room_main}>13:20-15:00</th> <td></td> <td></td> <td></td> <td></td> <td></td>
        </tr>
        <tr>
          <th className={styles.room_main}>15:10-16:50</th> <td></td> <td></td> <td></td> <td></td> <td></td>
        </tr>
        <tr>
          <th className={styles.room_main}>17:00-18:40</th> <td></td> <td></td> <td></td> <td></td> <td></td>
        </tr>
        <tr>
          <th className={styles.room_main}>18:50-20:30</th> <td></td> <td></td> <td></td> <td></td> <td></td> 
        </tr>

        <tr className={styles.room_head}>
          <th>時間/教室</th> 
          <th>F601</th> <th>F602</th> <th>F603</th> <th>F604</th> <th>F605</th> 
        </tr>
        <tr>
          <th className={styles.room_main}>9:00-10:40</th> <td></td> <td></td> <td></td> <td></td> <td></td>  
        </tr>
        <tr>
          <th className={styles.room_main}>10:50-12:30</th> <td></td> <td></td> <td></td> <td></td> <td></td>
        </tr>
        <tr>
          <th className={styles.room_sub}>昼休み</th> <td className={styles.room_sub}></td> <td className={styles.room_sub}></td> 
          <td className={styles.room_sub}></td> <td className={styles.room_sub}></td> <td className={styles.room_sub}></td> 
        </tr>
        <tr>
          <th className={styles.room_main}>13:20-15:00</th> <td></td> <td></td> <td></td> <td></td> <td></td>
        </tr>
        <tr>
          <th className={styles.room_main}>15:10-16:50</th> <td></td> <td></td> <td></td> <td></td> <td></td>
        </tr>
        <tr>
          <th className={styles.room_main}>17:00-18:40</th> <td></td> <td></td> <td></td> <td></td> <td></td>
        </tr>
        <tr>
          <th className={styles.room_main}>18:50-20:30</th> <td></td> <td></td> <td></td> <td></td> <td></td> 
        </tr>
        </tbody>
    </table>
  );
};
