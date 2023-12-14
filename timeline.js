// Cashe the elements
const tableBody = document.querySelector("tbody");

startHour = 8;
const startTime = new Date();
startTime.setHours(startHour,0,0,0);
let Hour = startTime.getHours();
let Minute = startTime.getMinutes();
for (let i = 0; i < 20; i++){
    const tableRow = tableBody.appendChild(document.createElement("tr"));
    const timeTd = tableRow.appendChild(document.createElement("td"));

    const formattedStart = `${Hour.toString().padStart(2, '0')}:${Minute.toString().padStart(2, '0')}`;
    Minute += 30;
    if (Minute >= 60){
        Hour += 1;
        Minute %= 60;
    }
    const formattedEnd = `${Hour.toString().padStart(2, '0')}:${Minute.toString().padStart(2, '0')}`;

    console.log(`${formattedStart} - ${formattedEnd}`)

    timeTd.textContent = `${formattedStart} - ${formattedEnd}`;


}