const leapForm = document.querySelector(`.form_vysokosnyi`);
const leaResult = document.querySelector(`.you_was_born`);
const inpLeap = document.querySelector(`.inp_one_in_4`);
// let x = 111;




leapForm.addEventListener(`submit`, (e) => {
    e.preventDefault();
    let inputValue = e.target.elements.leap.value;
    // console.log(inputValue);
    
    if (inputValue % 4 === 0 && (inputValue % 100 !== 0 || inputValue % 400 === 0)) {
        // leaResult.textContent(`Ви народилися у високосний рік!`)
        leaResult.textContent = `Ви народилися у високосний рік!`;
        leaResult.style.color = `#039900`;

        console.log(inpLeap);

        
    } else {

        leaResult.textContent = `Ви не народилися у високосний рік!`;
        leaResult.style.color = `red`;

    }
    
    e.target.elements.leap.value = ``;

    
})

