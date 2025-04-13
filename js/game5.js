const formCulcTime = document.querySelector(`.form_game5`);

formCulcTime.addEventListener(`submit`, (e) => {
    e.preventDefault();
    const minutes = e.currentTarget.elements.enterMinutes.value;
    for (let i = 0; i < Number(minutes); i++) {
        let hours = 0;
        let days = 0;
        if (hours === 24) {
            days + 1;
        } else {
            
        }
        if (Number(minutes) > 60) {
            Number(minutes) - 60;
            hours + 1;
        } else {
            console.log(days, hours, minutes);
            
            break
        }
    }
});