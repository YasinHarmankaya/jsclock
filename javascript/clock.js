let username = prompt("İsminizi giriniz.")
document.getElementById("myName").innerHTML = `${username}`;

let days=["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
function time() {

    const dateTime = new Date();
    let day = days[dateTime.getDay()];
    let hour = dateTime.getHours();
    let minute = dateTime.getMinutes();
    let second = dateTime.getSeconds();

    document.getElementById("myClock").innerHTML = `${hour}:${minute}:${second}  ${day}`;
}

setInterval(time, 1000);