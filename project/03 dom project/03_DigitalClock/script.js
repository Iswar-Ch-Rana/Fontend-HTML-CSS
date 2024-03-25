const clock = document.getElementById("clock");
console.log(clock);

setInterval(() => {
    const  date = new Date();
    clock.innerHTML = date.toLocaleTimeString([], { hour12: true });
},1000);

