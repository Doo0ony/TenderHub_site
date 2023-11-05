function counts() {
    let now = new Date();
    gap = date - now;

    let days = Math.floor(gap / 1000 / 60 / 60 / 24);
    let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(gap / 1000 / 60) % 60;
    let secunds = Math.floor(gap / 1000) % 60;
    console.log(days);
    daysVal.innerText = days;
    console.log(daysVal)
}
