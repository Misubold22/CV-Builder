export function ConvertToDisplayDate(inputDate) {
  const [year, month] = inputDate.split("-");

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return ` ${months[Number(month) - 1]} ${year}`;
}
