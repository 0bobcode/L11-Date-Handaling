//function to add text to the body of the document
function addParaToBody(text) {
    const p = document.createElement("p");
    p.textContent = text;
    document.body.appendChild(p);

}


addParaToBody("hey hi bob i am a doughnut watch how i roll");

//// Creating a new Date object for the current date and time

const now = new Date()
addParaToBody(`current date and time: ${now}`);


// Getting and displaying components of the date   
const year = now.getFullYear();
addParaToBody(`year: ${year}`);

const month = now.getMonth();
addParaToBody(`month: ${month + 1}`);

const dayOfMonth = now.getDate();
addParaToBody(`day of the Month: ${dayOfMonth}`);

const dayOfTheWeek = now.getDay();
addParaToBody(`day of the week:${dayOfTheWeek}`);

const hours = now.getHours();
addParaToBody(`Hour:${hours}`);

const minutes = now.getMinutes();
addParaToBody(`minutes : ${minutes}`)

const seconds = now.getSeconds();
addParaToBody(`second:${seconds}`);

const milliseconds = now.getMilliseconds();
addParaToBody(`milliseconds : ${milliseconds}`);
     
       