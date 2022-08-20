import styles from "~/styles/Home.module.css";
import { ClassroomStatusTable } from "~/components/rooms/ClassroomStatusTable";

export default function Rooms() {
  return (
    <div>
      <h1 className={styles.title}>教室状況検索</h1>

      <ClassroomStatusTable />
    </div>
  );
}
