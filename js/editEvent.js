
let eventName = document.getElementById("event-name");
let startDate = document.getElementById("inputStart");
let endDate = document.getElementById("inputEnd");
let eventReccurance = document.getElementById("recurrenceType");
let eventDiscription = document.getElementById("inputDescription");


var editableEvent = JSON.parse(localStorage.getItem("editableEvent"));
console.log(editableEvent)
var values = Object.values(editableEvent);

if (editableEvent) {
    let values = Object.values(editableEvent);
    eventName.value = values[0];
    startDate.value = values[1];
    endDate.value = values[2];
    eventDiscription.value = values[3];
    eventReccurance.value = values[4];
}

var form = document.getElementById("newEventForm");
form.addEventListener('submit', (event) => {
    let editableEvent = JSON.parse(localStorage.getItem("editableEvent"));
    console.log(editableEvent)
    let values = Object.values(editableEvent);
    event.preventDefault();
    if (valideForm) {
        window.location.href = "../eventlist.html";
        var eventName = document.getElementById("event-name").value;
        var eventStart = document.getElementById("inputStart").value;
        var eventEnd = document.getElementById("inputEnd").value;
        var recurrenceType = document.getElementById("recurrenceType").value;
        var eventDescription = document.getElementById("inputDescription").value;

        let userEvent = JSON.parse(localStorage.getItem("userEvent")) || [];
        userEvent.push({
            eventName: eventName,
            eventStart: eventStart,
            eventEnd: eventEnd,
            eventDescription: eventDescription,
            recurrenceType: recurrenceType
        });
        localStorage.setItem("userEvent", JSON.stringify(userEvent));
    }
})


function valideForm() {
    var eventName = document.getElementById("event-name").value;
    var recurrenceType = document.getElementById("recurrenceType").value;
    var eventStart = document.getElementById("inputStart").value;
    if (eventName == "" || eventName.length > 25) {
        alert("Please Enter Valid EventName");
        return false;
    }
    if (eventStart == "") {
        alert("Please Select Event Strat Date");
        return false;
    }
    if (recurrenceType == 0) {
        alert("Please Select Recurrence Type");
        return false;
    }
    return true;
}




var todayDate = new Date();
var month = todayDate.getMonth() + 1;
var year = todayDate.getFullYear() - 0;
var tdate = todayDate.getDate();

if (month < 10) {
    month = "0" + month
}

if (tdate < 10) {
    tdate = "0" + tdate;
}

var maxDate = year + "-" + month + "-" + tdate;

var values = Object.values(editableEvent);
document.getElementById("inputStart").setAttribute("min", values[1]);
document.getElementById("inputEnd").setAttribute("min", maxDate);
