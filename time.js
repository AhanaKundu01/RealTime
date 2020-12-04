let a;
let date;
let time;

setInterval(() => {
  a = new Date();
  date = a.toDateString();

  //day = a.getDay() + ',' + a.getMonth() + ',' + a.getFullYear()

  time = checkTime(a.getHours()) + ':' + checkTime(a.getMinutes()) + ':' + checkTime(a.getSeconds())
  document.getElementById('time').innerHTML = time + " on " + date;
}, 1000);


function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}


