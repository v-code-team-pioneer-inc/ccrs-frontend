import styles from "~/styles/Home.module.css";
import { ClassroomStatusTable } from "~/components/rooms/ClassroomStatusTable";
import { ClassroomStatusTableFilters } from "~/components/rooms/Filters";

export default function Rooms() {
  return (
    <div>
      <h1 className={styles.title}>教室状況検索</h1>

      <div className="mb-5">
        <ClassroomStatusTableFilters />
      </div>

      <ClassroomStatusTable />
    </div>
  );
}
