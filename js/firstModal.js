const close = document.querySelector(`.close`);
const backdropElement = document.querySelector(`.backdrop`);
const nameInp = document.querySelector(`.enter_name_inp`);
const formModal1 = document.querySelector(`.form_enter_name_inp`);
const user = document.querySelector(`.userlet`);
const modalError = document.querySelector(`.err`);


// console.log(close);


close.addEventListener(`click`, (e) => {

    console.log(nameInp.value);
    
    backdropElement.classList.add(`hidden`)
    // console.log(e.target);
    // console.log(e.currentTarget);
    
})

formModal1.addEventListener(`submit`, (e) => {
    e.preventDefault()
    const inputValue = e.target.elements.username.value
    console.log(inputValue);
    user.textContent = inputValue;
    
    if (inputValue === ``) {
        modalError.classList.add(`show`)
    } else {
        
        backdropElement.classList.add(`hidden`)
    }
})

