const hourSpan = document.querySelector(".hour");
const minituesSpan = document.querySelector(".minitues");
const secondsSpan = document.querySelector(".seconds");

const amSpan = document.querySelector(".am");
const pmSpan = document.querySelector(".pm");

setInterval(() => {

    const time = new Date();
    const hours = time.getHours();
    const minitues = time.getMinutes();
    const seconds  =time.getSeconds();

    if (hours > 11) {
        pmSpan.className = "pm active";
        amSpan.className = "am";
        if (hours > 12) {
            hourSpan.innerText = (hours - 12).toString().padStart(2, 0);
        } else {
            hourSpan.innerText = hours.toString().padStart(2, 0);
        }
    } else {
        amSpan.className = "am active";
        pmSpan.className = "pm";
        if (hours == 0) {
            hourSpan.innerText = 12;
        } else {
            hourSpan.innerText  = hours.toString().padStart(2, 0);
        }
    }

minituesSpan.innerText = minitues.toString().padStart(2, 0);
secondsSpan.innerText = seconds.toString().padStart(2, 0);

}, 1000);

