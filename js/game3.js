const rockLi = document.querySelector(`.rock`);
const scissors = document.querySelector(`.cutter`);
const paper = document.querySelector(`.paper`);
const pc = document.querySelector(`.pc`);
const you = document.querySelector(`.you`);
const draw = document.querySelector(`.draw`);
const pcChoise = document.querySelector(`.computer_choise`);
// const choise = document.querySelector(`.choise`);
const imgsPc = document.querySelectorAll(`.choise`);
const divForImgs = document.querySelector(`.for_imgsPc`);
console.log(imgsPc[1]);


let y;
let yourScore = 0;
let cpScore = 0;
let drawScore = 0;
// let r;





function getValueFromUser (e) {
    
}

let qwerty1 = [];
let qwerty2 = [];
let qwerty3 = [];



rockLi.addEventListener(`click`, (e) => {
    e.preventDefault
    y = 1;
    // console.log(x);


    for (let i = 0; i < 1000; i += 1) {
    let x = Math.round(Math.random() * 10);
    if (x > 3 || x == 0) {
        continue
    } else {

        
        // console.log(x);
        if (y == x) {
            drawScore += 1;
        } else if (x == 2) {
            yourScore += 1;
        } else {
            cpScore += 1;
        }
        pc.textContent = `Комп’ютер - ${cpScore}`;
        you.textContent = `Ви - ${yourScore}`;
        draw.textContent = `нічия - ${drawScore}`;
        
        // console.log(x);
        
        pcChoise.addEventListener(`click`, (e) => {
            choise.classList.remove(`paperpc`);
            choise.classList.remove(`scissorspc`);
            choise.classList.add(`rockpc`);
        })

        // r = 2;
        
        break
    }

    }
})

// console.log(r);


scissors.addEventListener(`click`, (e) => {
    e.preventDefault
    y = 2;
    // console.log(x);


    for (let i = 0; i < 1000; i += 1) {
    let x = Math.round(Math.random() * 10);
    if (x > 3 || x == 0) {
        continue
    } else {



        // console.log(x);
        if (y == x) {
            drawScore += 1;
        } else if (x == 1) {
            cpScore += 1;
        } else {
            yourScore += 1;
        }
        pc.textContent = `Комп’ютер - ${cpScore}`;
        you.textContent = `Ви - ${yourScore}`;
        draw.textContent = `нічия - ${drawScore}`;
        // console.log(x);

        pcChoise.addEventListener(`click`, (e) => {
            choise.classList.remove(`rockpc`);
            choise.classList.remove(`paperpc`);
            choise.classList.add(`scissorspc`);
        })

        


        break
    }

}
})

paper.addEventListener(`click`, (e) => {
    e.preventDefault
    y = 3;
    // console.log(x);


    for (let i = 0; i < 1000; i += 1) {
    let x = Math.round(Math.random() * 10);
    if (x > 3 || x == 0) {
        continue
    } else {
        // console.log(x);
        if (y == x) {
            drawScore += 1;
        } else if (x == 1) {
            yourScore += 1;
        } else {
            cpScore += 1;
        }
        pc.textContent = `Комп’ютер - ${cpScore}`;
        you.textContent = `Ви - ${yourScore}`;
        draw.textContent = `нічия - ${drawScore}`;
        // console.log(x);

        
        
        
        break
        }
        

}
})




pcChoise.addEventListener(`click`, (e) => {
    // console.log(1);

    const randomNumber = Math.round(Math.random() * (2 - 0) + 0);
    const randomChoise = imgsPc[randomNumber];
    // console.log(randomChoise);
    randomChoise.style.display = `block`;
    const randomChoiseString = randomChoise.outerHTML;
    // console.log(randomChoiseString);
    
    divForImgs.innerHTML = randomChoiseString;
    

    
    // for (let i = 0; i < 1000; i += 1) {
    //     let r = Math.round(Math.random() * 10);
    //     let imgToInsert = imgsPc[r];
    
    //     if (r > 2) {
    //         continue
    //     } else {
    //         console.log(imgToInsert);
    //         console.log(divForImgs);
            
    //         imgsPc[r].style.display = `block`;
    //         if (r == 0) {
    //             imgsPc[1].style.display = `none`;
    //             imgsPc[2].style.display = `none`;
    //         } else if (r == 1) {
    //             imgsPc[0].style.display = `none`;
    //             imgsPc[2].style.display = `none`;
    //         } else {
    //             imgsPc[0].style.display = `none`;
    //             imgsPc[1].style.display = `none`;
    //         }
    //         // imgToInsert.style.display = `block`;
    //         divForImgs.append(imgToInsert);
    //         break
    //     }
    // }
})


