var currentDay = document.getElementById("currentDay")
var currentDate = moment().format("dddd, MMMM Do");
var container = document.getElementsByClassName('container');
var timeBlocks = document.getElementsByClassName("time-block");
var buttons = document.getElementsByTagName('button')
var textAreas = document.getElementsByTagName('textarea')
console.log(buttons)
currentDay.textContent = currentDate;

var storage = JSON.parse(localStorage.getItem('tasks')) || []
console.log(storage)

var time = document.getElementById("time");
var calendarTime = moment().format("h a");
time.textContent = calendarTime;


for (var i = 0; i < timeBlocks.length; i++) {
    console.log("SHOWING YOUR TIME GIRL");
    timeBlocks[i].innerHTML = String(i+9)+":00";
    // console.log(timeBlocks[i])
    buttons[i].setAttribute("position", String(i))
    buttons[i].addEventListener('click', saveTask)
    if(storage[i]){
        textAreas[i].innerHTML = storage[i]
    } else{
        storage.push(null)
    }

}

// need to add submit button to all save button icons to save event 
var texta = document.getElementsByClassName("texta")
console.log(texta);

function saveTask(event){
    event.preventDefault()
    console.log(event.target.parentElement.getAttribute('position'))
    let index = event.target.parentElement.getAttribute('position')
    console.log(textAreas[index])
    console.log(textAreas[index].innerHTML)
    storage[index] = textAreas[index].innerHTML
    console.log(storage)
    localStorage.setItem('tasks',JSON.stringify(storage))
}

// function content(){
// for (var i = 0; i < texta.length; i++){
// texta[i].addEventListener("click", function openTextBox(){
//     console.log("ouch!");
// //     var textBox = document.createElement("textarea");
// //     textBox.textContent = "";
// //     texta.append(textBox);
// // })
// })
// }
// }
// content()
// need to add textbox to all events. 

// work on input form for events

