// TODO: 多田さん実装お願いします
//       divの中に実装をお願いします
// 　　　 CSSはClassroomStatusTable.module.cssを使用してください
//       http://localhost:3000/rooms/ に実装が反映されます

import styles from "~/styles/rooms/ClassroomStatusTable.module.css";
import { getRooms } from "~/hooks/room/getRooms";
import { ClassroomStatusTableBody } from "~/components/rooms/ClassroomStatusTableBody";

export const ClassroomStatusTable = () => {
  const { data, error } = getRooms();

  if (error) {
    return <div>読み込みに失敗しました</div>;
  }

  const rooms = data?.rooms;

  const roomsByFloor = rooms?.reduce((acc, room) => {
    const key = `${room.floor}`;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(room);
    return acc;
  }, {});

  return (
    <table border="1" className={styles.room_table}>
      <tbody>
        {roomsByFloor &&
          Object.keys(roomsByFloor).map((floor) => (
            <ClassroomStatusTableBody rooms={roomsByFloor[floor]} />
        ))}
      </tbody>
    </table>
  );
};
