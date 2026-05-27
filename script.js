
const targetDate = new Date("2026-08-01T15:00:00").getTime();

function updateCountdown(){
const now = new Date().getTime();
const distance = targetDate - now;

if(distance < 0){
document.getElementById("countdown").innerHTML = "Сегодня праздник!";
return;
}

const days = Math.floor(distance / (1000*60*60*24));
const hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
const minutes = Math.floor((distance % (1000*60*60))/(1000*60));

document.getElementById("countdown").innerHTML =
`${days} дней ${hours} часов ${minutes} минут`;
}

updateCountdown();
setInterval(updateCountdown, 60000);

function sendTelegram() {

const guests = document.getElementById("guests").value;

const drinks = [...document.querySelectorAll('input[type="checkbox"]:checked')]
.map(el => el.value)
.join(", ");

const message = document.getElementById("message").value;

const text =
`Здравствуйте! Подтверждаем участие.
👥 Количество гостей: ${guests}
🥂 Напитки: ${drinks}
💬 Комментарий: ${message}`;

const encodedText = encodeURIComponent(text);

window.open(`https://t.me/Ignau2?text=${encodedText}`, "_blank");
}
