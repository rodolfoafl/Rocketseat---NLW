export default function convertHourToMinutes(time: string) {
  let [hour, minutes] = time.split(":").map(Number);
  let timeInMinutes = hour * 60 + minutes;
  return timeInMinutes;
}
