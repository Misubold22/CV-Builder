import { ConvertToDisplayDate } from "../utils/dateUtils.js";

export function EmploymentDate({ onStartDateChange, selectedStartDate, id }) {
  const handleDateChange = (e) => {
    const inputDate = e.target.value;
    const formattedDate = ConvertToDisplayDate(inputDate);
    if (onStartDateChange) {
      onStartDateChange(formattedDate);
    }
  };

  return (
    <>
      <input
        id={id}
        type="date"
        selected={selectedStartDate}
        onChange={handleDateChange}
      />
    </>
  );
}
