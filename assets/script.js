var currentDay = document.getElementById("currentDay")
var currentDate = moment().format("dddd, MMMM Do");


currentDay.textContent = currentDate;

var time = document.getElementById("time");
var calendarTime = moment().format("8 a");
time.textContent = calendarTime;

// need to add submit button to all save button icons to save event 
var texta = document.getElementsByClassName("texta")
console.log(texta);

for (var i = 0; i < texta.length; i++){
texta[i].addEventListener("click", function openTextBox(){
    console.log("ouch!");
    var textBox = document.createElement("textarea");
})
}
// need to add textbox to all events. 

// work on input form for events

