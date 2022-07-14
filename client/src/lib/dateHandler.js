
export default function dateHandler (dateString) {
  // receives date string and returns parsed version
  let dateObj = new Date(dateString);
  let month = dateObj.toLocaleString("en-US", { month: "long" });
  let day = dateObj.getUTCDate("en-US", { day: "long" });
  let year = dateObj.getFullYear()
  let date = month + ' ' + day + ', ' + year;

  return date;
}