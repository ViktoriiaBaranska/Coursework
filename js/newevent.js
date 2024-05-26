var form = document.getElementById("newEventForm");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (valideForm() == true) {

        window.location.href = "../eventlist.html";

        var eventName = document.getElementById("event-name").value;
        var eventStart = document.getElementById("inputStart").value;
        var eventEnd = document.getElementById("inputEnd").value;
        var recurrenceType = document.getElementById("recurrenceType").value;
        var eventDescription = document.getElementById("inputDescription").value;
        var eventType = document.getElementById("eventType").value; // Додаємо тип події

        let userEvent = JSON.parse(localStorage.getItem("userEvent")) || [];

        userEvent.push({
            eventName: eventName,
            eventStart: eventStart,
            eventEnd: eventEnd,
            eventDescription: eventDescription,
            recurrenceType: recurrenceType,
            eventType: eventType // Додаємо тип події
        });

        localStorage.setItem("userEvent", JSON.stringify(userEvent));
        document.querySelector('form').reset();
    }
});

function valideForm() {
    var eventName = document.getElementById("event-name").value;
    var recurrenceType = document.getElementById("recurrenceType").value;
    var eventStart = document.getElementById("inputStart").value;
    var eventType = document.getElementById("eventType").value;

    if (eventName == "" || eventName.length > 25) {
        alert("Please Enter Valid Event Name");
        return false;
    }
    if (eventStart == "") {
        alert("Please Select Event Start Date");
        return false;
    }
    if (recurrenceType == 0) {
        alert("Please Select Recurrence Type");
        return false;
    }
    if (eventType == 0) {
        alert("Please Select Event Type");
        return false;
    }
    return true;
}

var todayDate = new Date();
var month = todayDate.getMonth() + 1;
var year = todayDate.getUTCFullYear();
var tdate = todayDate.getDate();
if (month < 10) {
    month = "0" + month;
}

if (tdate < 10) {
    tdate = "0" + tdate;
}
var maxDate = year + "-" + month + "-" + tdate;

document.getElementById("inputStart").setAttribute("min", maxDate);
document.getElementById("inputEnd").setAttribute("min", maxDate);
