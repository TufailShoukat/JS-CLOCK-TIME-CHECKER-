

function updateClock() {
    var currentTime = new Date();
    var currentHour = currentTime.getHours();
    var currentMinute = currentTime.getMinutes();
    var currentSecond = currentTime.getSeconds();
    currentMinute = (currentMinute < 10 ? "0" : "") + currentMinute;
    currentSecond = (currentSecond < 10 ? "0" : "") + currentSecond;
    var timeOfDay = (currentHour < 12) ? "AM" : "PM";
    currentHour = (currentHour > 12) ? currentHour - 12 : currentHour;
    currentHour = (currentHour == 0) ? 12 : currentHour;
    var currentTimeString = currentHour + ":" + currentMinute + ":" + currentSecond + " " + timeOfDay;
    document.getElementById("current-time").innerHTML = currentTimeString;
}

function updateCountdown(eventDate) {
    var now = new Date();

    var timeDifference = eventDate.getTime() - now.getTime();

    var daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var hoursLeft = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutesLeft = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var secondsLeft = Math.floor((timeDifference % (1000 * 60)) / 1000);

    if (daysLeft > 1) {
        document.getElementById("countdown").innerHTML = daysLeft + " days, " + hoursLeft + " hours, " + minutesLeft + " minutes, " + secondsLeft + " seconds";
    } else if (daysLeft == 1) {
        document.getElementById("countdown").innerHTML = "1 day, " + hoursLeft + " hours, " + minutesLeft + " minutes, " + secondsLeft + " seconds";
    } else {
        document.getElementById("countdown").innerHTML = hoursLeft + " hours, " + minutesLeft + " minutes, " + secondsLeft + " seconds";
    }
}

function setCountdown() {
    var eventDateInput = document.getElementById("event-date").value;
    var eventName = document.getElementById("event-name");
    var eventDate = new Date(eventDateInput);

    eventName.innerHTML = "be happy Eid ul-Adha is comming soon";

    updateCountdown(eventDate);
}

updateClock();

setInterval(updateClock, 1000);
















