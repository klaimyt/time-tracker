export function secondsToTime(sec: number) {
  const hours = Math.floor(sec / (60 * 60));

  const divisorForMinutes = sec % (60 * 60);
  const minutes = Math.floor(divisorForMinutes / 60);

  const divisorForSeconds = divisorForMinutes % 60;
  const seconds = Math.ceil(divisorForSeconds);

  const obj = {
    h: hours,
    m: minutes,
    s: seconds,
  };
  return obj;
}
