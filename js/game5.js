const formCulcTime = document.querySelector(`.form_game5`);
const answer = document.querySelector(`.answer`);


formCulcTime.addEventListener(`submit`, (e) => {
    e.preventDefault();
    const minutesText = e.currentTarget.elements.enterMinutes.value;
    const minutes = Number(minutesText);
    let hours = Math.floor(minutes / 60);
    let minutesLessSixty = minutes - (hours * 60);
    let days = Math.floor(hours / 24);
    let hoursLessTwentyFour = hours - (days * 24);
    console.log(days, hoursLessTwentyFour, minutesLessSixty);
    
    answer.textContent = `days: ${days}, hours: ${hoursLessTwentyFour}, minutes: ${minutesLessSixty}`;
    e.target.elements.enterMinutes.value = ``;
})