const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const time = document.getElementById("time");

const today = new Date();

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

date.innerHTML = String(today.getDate()).padStart(2, '0');
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = allMonths[today.getMonth()];
year.innerHTML = today.getFullYear();

function updateTime() {
    const now = new Date();
    let hrs = String(now.getHours()).padStart(2, '0');
    let mins = String(now.getMinutes()).padStart(2, '0');
    let secs = String(now.getSeconds()).padStart(2, '0');
    time.innerHTML = `${hrs}:${mins}:${secs}`;
}

updateTime();
setInterval(updateTime, 1000);
