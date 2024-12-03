


const today = new Date(); //global date declaration
today.setHours(0,0,0,0)// normalize todays date for accurate calculation


//select dom elements
let eventDateInput = document.getElementById("eventDate");
let daysRemainingDisplay = document.getElementById("daysRemainingDisplay");

let birthdateInput = document.getElementById("birthdate");
let calculateAgeButton = document.getElementById("calculateAge");
let ageDisplay = document.getElementById("ageDisplay");


function calculateDaysRemaining(){
    let eventDate = new Date(eventDateInput.value)
    let timeDiff = eventDate - today
    let daysRemaning = Math.ceil(timeDiff/(1000*60*60*24))
    let message = daysRemaning>=0 ? `days remaning until the event: ${daysRemaning}` : `the selected day is in the past`
    daysRemainingDisplay.textContent = message
}


function calculateAge(){
    let user_input = document.getElementById("name").value
    let birthdate = new Date(birthdateInput.value)
    let age = today.getFullYear() - birthdate.getFullYear()
    let monthDiff = today.getMonth() - birthdate.getFullYear()
    ageDisplay.textContent =`${user_input} is ${age} years old`
}

calculateAgeButton.addEventListener("click" ,calculateAge)


