const hour = document.getElementById("clock-hour");
const minutes = document.getElementById("clock-minutes");
const seconds = document.getElementById("clock-seconds");

setInterval(() => {
    const date = new Date();
    const hh = date.getHours() * 30;
    const mm = date.getMinutes() * 6;
    const ss = date.getSeconds() * 6;
    hour.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    minutes.style.transform = `rotateZ(${mm}deg)`;
    seconds.style.transform = `rotateZ(${ss}deg)`;
})

const textHour = document.getElementById("text-hour");
const textMinutes = document.getElementById("text-minutes");
const textSeconds = document.getElementById("text-seconds");
const ampm = document.getElementById("text-ampm");

setInterval(() => {
    const date = new Date();
    let hh = date.getHours();
    let ampmDay = "AM";
    if(hh >= 12) {
        hh = hh - 12;
        ampmDay = "PM";
    }
    hh = hh < 10 ? "0" + hh : hh;
    textHour.innerHTML = hh;
    textMinutes.innerHTML = date.getMinutes();
    textSeconds.innerHTML = date.getSeconds();
    ampm.innerHTML = ampmDay;
})
const dateDay = document.getElementById("date-day");
const dateMonth = document.getElementById("date-month");
const dateYear = document.getElementById("date-year");


setInterval(() => {
    const date = new Date();
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    dateDay.innerHTML = days[day];
    dateMonth.innerHTML = months[month];
    dateYear.innerHTML = year;
})

// Dark/Light
const themeIcon = document.getElementById("theme-icon");
const darkTheme = "dark-theme";
const iconTheme = "bxs-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () => themeIcon.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

if(selectedTheme) {
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
    themeIcon.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](iconTheme);
}

themeIcon.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme);
    themeIcon.classList.toggle(iconTheme);

    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
})



