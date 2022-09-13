import "react-datepicker/dist/react-datepicker.css";

import DatePicker from "react-datepicker";

export const ClassroomStatusTableFilters = ({ date, setDate }) => {
  return (
    <div>
      <div className="ml-20 text-left block mr-auto">
        <DatePicker
          label="日付"
          dateFormat="yyyy/MM/dd"
          selected={date}
          onChange={(date) => setDate(date)}
          className="ml-20 text-left block mr-auto h-full"
        />
      </div>
    </div>
  );
};
