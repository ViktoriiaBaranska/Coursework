let eventName = document.getElementById("eventName");
let startDate = document.getElementById("eventStartDate");
let endDate = document.getElementById("eventEndDate");
let eventReccurance = document.getElementById("eventrecurrenceType");
let eventDescription = document.getElementById("eventDescription");
let eventType = document.getElementById("eventType"); // Новий елемент для типу події

let selectedEvent = JSON.parse(localStorage.getItem("eventDetails"));
let values = Object.values(selectedEvent);
console.log(values);

if (selectedEvent) {
    let values = Object.values(selectedEvent);
    eventName.innerHTML = values[0];
    startDate.innerHTML = values[1];
    endDate.innerHTML = values[2];
    eventReccurance.innerHTML = values[3];
    eventType.innerHTML = values[4]; // Додаємо значення для типу події
    eventDescription.innerHTML = values[5];
}

function show() {
    var userEventData = JSON.parse(localStorage.getItem("userEvent"));
    var showFiveDetails = document.getElementById("fiveDetails");
    showFiveDetails.innerHTML = "";

    userEventData.slice(0, 200)
        .map((data, i) => {
            showFiveDetails.innerHTML += `
        <h4>Подія №:</h4>
        <p>${i + 1}</p>
        <h4>Назва події:</h4>
        <p>${data.eventName}</p>
        <h4>Дата початку події:</h4>
        <p>${data.eventStart}</p>
        <h4>Дата закінчення події:</h4>
        <p>${data.eventEnd}</p>
        <h4>Тип повторення події:</h4>
        <p>${data.recurrenceType}</p>
        <h4>Тип події:</h4> 
        <p>${data.eventType}</p>
        <h4>Опис події:</h4>
        <p>${data.eventDescription}</p>
        <hr>
    `;
        });
}
show();

function goBack() {
    window.history.back();
}
