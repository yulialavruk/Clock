  var secondHand = document.querySelector('.second-hand'),
    minsHand = document.querySelector('.min-hand'),
    hoursHand = document.querySelector('.hour-hand');

function setDate() {
    var now = new Date(),
        seconds = now.getSeconds(),
        mins = now.getMinutes(),
        hours = now.getHours(),
        secondDegree = ((seconds / 60) * 360) + 90,
        minDegree = ((mins / 60) * 360) + ((seconds/60)*6) + 90,
        hoursDegree = ((hours / 12) * 360) + ((mins/60)*30) + 90;
    secondHand.style.transform = 'rotate(' + secondDegree + 'deg)';
    minsHand.style.transform = 'rotate(' + minDegree + 'deg)';
    hoursHand.style.transform = 'rotate(' + hoursDegree + 'deg)';
}

setInterval(setDate, 1000);
setDate();