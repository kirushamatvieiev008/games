const num1 = document.querySelector(`.num1`);
const num2 = document.querySelector(`.num2`);
const formCulc = document.querySelector(`.formSection4`);
const actionUl = document.querySelector(`.action_culc`);
const actionButtons = document.querySelectorAll(`.calc`);
const btnSubmit = document.querySelector(`.equivalent`);
const resultDiv = document.querySelector(`.result`);


btnSubmit.addEventListener(`click`, (e) => {
    e.preventDefault()
    
    let result;
    
    let number1;
    let number2;
    
    let x = [];
    
    // console.log(prevResult);
    

    
    num1.addEventListener(`change`, (e) => {
        number1 = num1.textContent;
        console.log(number1);
        
    })


    num2.addEventListener(`change`, (e) => {
        number2 = num2.textContent;
        console.log(number2);
        
    })





    
    // formCulc.addEventListener(`submit`, (e) => {
    //     e.preventDefault();
        
    //     let value1 = e.currentTarget.elements.value1.value;
    //     let value2 = e.currentTarget.elements.value2.value;
        
    //     number1 = Number(value1);
    //     number2 = Number(value2);
    //     // console.log(value1, value2);
    
    // })


    actionButtons.forEach(btn => btn.addEventListener(`click`, (e) => {
        if (btn.classList.contains(`plus`)) {
            result = number1 + number2;

            console.log(result);

            x.push(result);
            // console.log(prevResult);

        } else if (btn.classList.contains(`mnozhenya`)) {
            result = number1 * number2;

            console.log(result);

            x.push(result);
            // console.log(prevResult);

        } else if (btn.classList.contains(`minus`)) {
            result = number1 - number2;
            console.log(result);
            x.push(result);
            // console.log(prevResult);
        } else {
            result = number1 / number2;
            console.log(result);
            // x.push(result);
        }
        // console.log(prevResult);
        
    }))

    // console.log(x);
    
    // resultDiv.textContent = prevResult;
})


// formCulc.addEventListener(`submit`, (e) => {
//     e.preventDefault();

//     let value1 = e.currentTarget.elements.value1.value;
//     let value2 = e.currentTarget.elements.value2.value;

//     // console.log(value1, value2);
    
//     const number1 = Number(value1);
//     const number2 = Number(value2);
    
//     let result;

    

//     if (actionButtons[0].classList.contains(`plus`)) {
//         result = number1 + number2;
//     } else if (actionButtons[1].classList.contains(`mnozhenya`)) {
//         result = number1 * number2;
//     } else if (actionButtons[2].classList.contains(`minus`)) {
//         result = number1 - number2;
//     } else {
//         result = number1 / number2;
//     }

//     console.log(result);
    


// })