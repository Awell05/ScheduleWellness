var currentDay = document.getElementById("currentDay")
var currentDate = moment().format("dddd, MMMM Do");


currentDay.textContent = currentDate;

var time = document.getElementById("time");
var calendarTime = moment().format("8 a");
time.textContent = calendarTime;

// need to add submit button to all save button icons to save event 

// work on input form for events


