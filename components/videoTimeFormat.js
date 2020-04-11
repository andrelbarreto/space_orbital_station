
// export function videoTimeFormat(time) {
//   if (!time) {
//     return '--:--';
//   }

//   const timeS = Math.floor(time);
//   const seconds = timeS % 60;
//   const minutes = Math.floor(timeS / 60) % 60;
//   const h = Math.floor(timeS / 3600);
//   // Mandate two digit minutes only if h is non-zero
//   const mm = h ? `0${minutes}`.slice(-2) : minutes;
//   const ss = `0${seconds}`.slice(-2);
//   const timertext = h ? `${h}:${mm}:${ss}` : `${mm}:${ss}`;
//   return timertext;
// }