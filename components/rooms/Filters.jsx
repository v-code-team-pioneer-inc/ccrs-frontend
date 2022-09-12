import "react-datepicker/dist/react-datepicker.css";

import { useState } from "react";
import DatePicker from "react-datepicker";

export const ClassroomStatusTableFilters = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <div className="mr-20 text-left block ml-auto">
        <DatePicker
          locale="ja"
          dateFormat="yyyy/MM/dd"
          selected={date}
          onChange={(date) => setDate(date)}
          className="mr-20 text-left block ml-auto h-full"
        />
      </div>
    </div>
  );
}
