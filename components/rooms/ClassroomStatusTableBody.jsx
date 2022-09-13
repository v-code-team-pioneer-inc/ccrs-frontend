import styles from "~/styles/rooms/ClassroomStatusTable.module.css";

export const ClassroomStatusTableBody = ({ rooms }) => {
  const roomNames = rooms.map((room) => room.name);
  // NOTE: 5階が12部屋あるあためなかったら足りない分の空白を追加
  while (roomNames.length < 12) {
    roomNames.push("ー");
  }

  const timeTables = [
    "09:00-10:40",
    "10:50-12:30",
    "12:30-13:20",
    "13:20-15:00",
    "15:10-16:50",
    "17:00-18:40",
    "18:50-20:30",
  ];

  // TODO: 中級者が出てきたらTypeScriptで型を定義すること。
  let columnDataArr = [];
  for (let i = 0; i < 7; i++) {
    columnDataArr.push({
      time: timeTables[i],
      statuses: [],
    });
  }

  columnDataArr = columnDataArr.map((columnData) => {
    rooms.forEach((room) => {
      let statuses = "◯";
      room.room_use_schedules?.forEach((schedule) => {
        // NOTE: Dateでhh:mmにするために2021/01/01を足している
        const startTime = new Date(`2021/01/01/${schedule.timetable.start_at}`);
        const endTime = new Date(`2021/01/01/${schedule.timetable.end_at}`);

        // TODO: timeTablesをバックエンドから取得するようにしてリファクタリングをする
        if (
          columnData.time.includes(`${startTime.getHours()}:${startTime.getMinutes()}`) &&
          columnData.time.includes(`${endTime.getHours()}:${endTime.getMinutes()}`)
        ) {
          statuses = "×";
        }
      });
      columnData["statuses"] = columnData["statuses"].concat(statuses);
    });
    while (columnData["statuses"].length < 12) {
      columnData["statuses"].push("ー");
    }
    return columnData;
  });

  return (
    <>
      <tr className={styles.room_head}>
        <th>時間/教室</th>{" "}
        {roomNames.map((roomName, index) => (
          <th key={index}>{roomName}</th>
        ))}
      </tr>
      {columnDataArr.map((columnData, index) => (
        <tr key={index}>
          <th className={styles.room_main}>{columnData.time}</th>
          {columnData.statuses.map((status, index) => (
            <td className={styles.room_status} key={index}>
              {status}
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}
