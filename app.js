const clock = document.getElementsByClassName('clock')

setInterval(function () {
    let date = new Date();
    clock.innerhtml = date.toLocaleTimeString();
}, 1000);