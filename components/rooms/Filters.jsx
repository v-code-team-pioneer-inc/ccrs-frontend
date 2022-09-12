import "react-datepicker/dist/react-datepicker.css";

import { useState } from "react";
import DatePicker from "react-datepicker";

export const ClassroomStatusTableFilters = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <div className="ml-20 text-left block mr-auto">
        <DatePicker
          locale="ja"
          label="日付"
          dateFormat="yyyy/MM/dd"
          selected={date}
          onChange={(date) => setDate(date)}
          className="ml-20 text-left block mr-auto h-full"
        />
      </div>
    </div>
  );
}
