const formGuess = document.querySelector(`.form_game2`);
const divCongratulations = document.querySelector(`.you_guessed_num`);

formGuess.addEventListener(`submit`, (e) => {
    // console.log(x);
    e.preventDefault();
    
    let inpGuess = e.target.elements.inpGuess.value;
    let x = Math.round(Math.random() * 10);
    if (inpGuess == x) {
        divCongratulations.textContent = `Вітаю, ви вгадали число! ${x}`;
        divCongratulations.style.color = `#039900`;
        // inpGuess.textContent = ``;
    } else {
        divCongratulations.textContent = `Нажаль, ви не вгадали число! ${x}`;
        divCongratulations.style.color = `red`;
        // inpGuess.textContent = ``;
    }
    // console.log(inpGuess);
    e.target.elements.inpGuess.value = ``;
    

})


