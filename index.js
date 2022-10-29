// Creating a function
function showTime() {
  let date = new Date();
  let h = date.getHours(); //Getting Hour by getHours() method (0 - 23)
  let m = date.getMinutes(); //Getting minutes by getMinutes() method (0 - 59)
  let s = date.getSeconds(); //Getting seconds by getSeconds() method (0 - 59)
  let session = "AM";

  // Calculation for HOURS
  if (h == 0) {
    h = 12;
  }

  //   Converting 12PM to Rotating time
  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  //   Using Ternary Operator to change the value to add Upto
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  let time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerHTML = time;
  //   document.getElementById("MyClockDisplay").innerContent = time;
  setTimeout(showTime, 2000);
}

showTime();
