const close = document.querySelector(`.close`);
const backdropElement = document.querySelector(`.backdrop`);
const footerForm = document.querySelector(`.footerForm`);
const errorFooter = document.querySelector(`.errorFooter`);
// backdropElement.style.display = `none`;


footerForm.addEventListener(`submit`, (e) => {
    e.preventDefault();
    let inpFooter = e.target.elements.inpFooter.value;
    console.log(inpFooter);
    
    if (inpFooter.includes(`@`) && inpFooter.includes(`.com`) && inpFooter.length > 5) {
        // backdropElement.style.display = `block`;
        backdropElement.classList.remove(`hidden`)
        errorFooter.textContent = ``;
        // inpFooter.textContent() = ``;
        

    } else {
        errorFooter.textContent = `Введіть усе правильно!`;
    }
    e.target.elements.inpFooter.value = ``;

})

close.addEventListener(`click`, (e) => {

    
    backdropElement.classList.add(`hidden`)
    // console.log(e.target);
    // console.log(e.currentTarget);
    
})