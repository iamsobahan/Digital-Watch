const digital = () => {
  const newDate = new Date();

  let hour = newDate.getHours();
  let minute = newDate.getMinutes();
  let second = newDate.getSeconds();
  let session = "AM";

  if (hour == 0) {
    hour = 12;
  }
  if (hour > 12 && second > 0) {
    hour = hour - 12;
    session = "PM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  const time = hour + ":" + minute + ":" + second + " " + session;
  document.getElementById("diplay").textContent = time;

  setTimeout(digital, 1000);
};

digital();
