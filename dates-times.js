let date,
  date1,
  date2,
  date3,
  day,
  hours,
  milliseconds,
  minutes,
  month,
  time,
  timeString,
  today,
  tomorrow,
  val,
  year;

// create date instance - current date/time
today = new Date(); // 2018-05-13T17:26:19.196Z
// create date instance - specified date/time
date1 = new Date('3-22-2007 12:10'); // 2007-03-22T19:10:00.000Z
// 2 more formats for same date
date2 = new Date('March 22, 2007'); // 2007-03-22T07:00:00.000Z
date3 = new Date('03/22/2007'); // 2007-03-22T07:00:00.000Z

const now = new Date(); // 2018-05-13T18:16:31.790Z
// Get month (zero-based: 0=jan, 1=feb, etc.)
month = now.getMonth(); // 4
// Get day of week (0=Sun, 1=Mon, etc)
day = now.getDay(); // 0
// Get date (not zero-based)
date = now.getDate(); // 13
// Get year
year = now.getFullYear(); // 2018
// Get hours
hours = now.getHours(); // 11
// Get minutes
minutes = now.getMinutes(); // 16
// Get seconds
seconds = now.getSeconds(); // 31
// Get milliseconds
milliseconds = now.getMilliseconds(); // 790
// Pull time from date instance
timeString = now.toTimeString(); // 11:16:31 GMT-700 (Pacific Daylight Time)
// Get elapsed time in ms since Jan 1 1970
time = now.getTime(); // 1526235724919
// Set month
date1.setMonth(1);
// Set date
date1.setDate(22);
// Set year
date1.setFullYear(1962);
// Set hours
date1.setHours(7);
// Set minutes
date1.setMinutes(4);
// Set seconds
date1.setSeconds(19);
// Set time in ms elapsed since Jan 1 1970
date2.setTime(-247913741000);

console.log(now);
console.log(month);
console.log(day);
console.log(date);
console.log(year);
console.log(hours);
console.log(minutes);
console.log(seconds);
console.log(milliseconds);
console.log(time);
console.log(date1);
console.log(date2);
