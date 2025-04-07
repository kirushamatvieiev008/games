const firstNum = document.querySelector(`.enter_num`);
const actionCulc = document.querySelector(`.action_culc`);
const secondNum = document.querySelector(`.enter_num2`);
const resultBtn = document.querySelector(`.equivalent`);
const form1 = document.getElementById(`form1`);
const resultDiv = document.querySelector(`.result`);

const calcButtons = document.querySelectorAll(`.calc`);



// form1.addEventListener(`change`, (e) => {
//     e.preventDefault();
//     let valueFirst = 0;
//     let valueSecond = 0;
//     if (e.target.classList.contains(`num1`)) {
//         valueFirst = Number(e.target.value);
//     } 

//     if (e.target.classList.contains(`num2`)) {
//         valueSecond = Number(e.target.value);
//         valueFirst = valueFirst;
//     }

    form1.addEventListener(`submit`, (e) => {
    e.preventDefault();
    const valueFirst = e.currentTarget.elements.value1.value;
    // console.log(valueFirst);
    
    const valueSecond = e.currentTarget.elements.value2.value;
    let result = 0;

    calcButtons.forEach((btn) => {
        btn.addEventListener(`click`, (e) => {
            if (e.target.classList.contains(`plus`)) {
                result = valueFirst + valueSecond;
            } else if (e.target.classList.contains(`mnozhenya`)) {
                result = valueFirst * valueSecond;   
            } else if (e.target.classList.contains(`minus`)) {
                result = valueFirst - valueSecond;   
            } else {
                result = valueFirst / valueSecond;   
            } 
            resultDiv.textContent = result;
            console.log(result);
            
        })
    });
    

})


//     calcButtons.forEach((btn) => {
    
    
//         let result = 0;
//         // let resultDiv;
        
//         btn.addEventListener(`click`, (e) => {
//             if (e.target.classList.contains(`plus`)) {
//             result = valueFirst + valueSecond;
//             // console.log(result);
//             console.log(valueFirst, valueSecond);
            
//         } else if (e.target.classList.contains(`mnozhenya`)) {
//             result = valueFirst * valueSecond;   
//         } else if (e.target.classList.contains(`minus`)) {
//             result = valueFirst - valueSecond;   
//         } else {
//             result = valueFirst / valueSecond;   
//         } 
        
//         resultBtn.addEventListener(`click`, (e) => {
//             resultDiv.textContent = result;
            
//         })
        
//     })
// });
    
// })
