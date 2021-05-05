setInterval(() => {
    date = new Date();
    hourtime = date.getHours();
    minutetime = date.getMinutes();
    secondtime = date.getSeconds();
    hrotation = 30*hourtime + minutetime/2;
    mrotation = 6*minutetime;
    srotation = 6*secondtime;

    hours.style.transform = `rotate(${hrotation}deg)`;
    minutes.style.transform = `rotate(${mrotation}deg)`;  
    seconds.style.transform = `rotate(${srotation}deg)`;  

}, 1000);