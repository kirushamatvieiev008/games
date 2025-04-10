const formOfInps = document.querySelector(`.three_numbers`);
const buttonCheckBiggerNum = document.querySelector(`.check_numbers`);
const inpNums = document.querySelectorAll(`.enter_numGameNums`);
const numResult = document.querySelector(`.the_biggest_num_of_nums`);

let arrayThreeNum = [];



formOfInps.addEventListener(`submit`, (e) => {
    e.preventDefault();
    inpNums.forEach(num => arrayThreeNum.push(Number(num.value)));

    let max = 0;
    for (let i = 0; i < arrayThreeNum.length; i++) {
        if (arrayThreeNum[max] <= arrayThreeNum[i]) {
            max = i;
            
        } else {
        
    }} 

    numResult.textContent = arrayThreeNum[max];
    
    let num1 = e.currentTarget.elements.num1.value;
    let num3 = e.currentTarget.elements.num1.value;
    let num2 = e.currentTarget.elements.num1.value;
    console.log(num1);
    
    num1 = ``;
    num2 = ``;
    num3 = ``;

    e.currentTarget.elements.num1.value = ``;
    e.currentTarget.elements.num2.value = ``;
    e.currentTarget.elements.num3.value = ``;
    
})
