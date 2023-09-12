function Fecha() {
  const days = {
    0: "sunday",
    1: "monday",
    2: "tuesday",
    3: "wednesday",
    4: "thursday",
    5: "friday",
    6: "saturday",
  };
  const months = {
    0: "january",
    1: "febraury",
    2: "march",
    3: "april",
    4: "may",
    5: "june",
    6: "july",
    7: "august",
    8: "september",
    9: "october",
    10: "november",
    11: "december",
  };
  const date = new Date();
  const dayN = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const dayW = date.getDay();
  return (
    <div>
      <p className="font-bold dark:text-white">
        {days[dayW].toUpperCase()}, {dayN} {months[month].toUpperCase()}, {year}
      </p>
      {/* <p>
        {dayN}-{month + 1}-{year}
      </p>  TODO like a Hover*/}
    </div>
  );
}

export default Fecha;
