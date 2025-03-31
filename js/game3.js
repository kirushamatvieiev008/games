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
const scissors2 = document.querySelector(`.scissors2`);
const paper2 = document.querySelector(`.paper2`);
const rock2 = document.querySelector(`.rock2`);

const changeYourChoise = document.querySelector(`.change_your_choise`);
// console.log(imgsPc[1]);



let j = 0;
let y;
let yourScore = 0;
let cpScore = 0;
let drawScore = 0;
// let r;




let qwerty1 = [];





rockLi.addEventListener(`click`, (e) => {
    e.preventDefault
    y = 1;
    // console.log(x);

    scissors.style.opacity = `0.3`;
    paper.style.opacity = `0.3`;

    scissors2.style.cursor = `default`;
    paper2.style.cursor = `default`;
    rock2.style.cursor = `default`;

    scissors2.setAttribute(`disabled`, ``);
    rock2.setAttribute(`disabled`, ``);
    paper2.setAttribute(`disabled`, ``);
    pcChoise.removeAttribute(`disabled`, ``);


    for (let i = 0; i < 1000; i += 1) {
    let x = Math.round(Math.random() * 10);
    if (x > 3 || x == 0) {
        continue
    } else {
        qwerty1.push(x);
        
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
            // choise.classList.remove(`paperpc`);
            // choise.classList.remove(`scissorspc`);
            // choise.classList.add(`rockpc`);
        })

        // r = 2;
        cpChoiseFn(qwerty1[j]);
        j += 1;
        console.log(j);
        

        break
    }

    }
})

// console.log(r);


scissors.addEventListener(`click`, (e) => {
    e.preventDefault
    y = 2;
    // console.log(x);


     rock2.style.opacity = `0.3`;
    paper.style.opacity = `0.3`;

    scissors2.style.cursor = `default`;
    paper2.style.cursor = `default`;
    rock2.style.cursor = `default`;

    scissors2.setAttribute(`disabled`, ``);
    rock2.setAttribute(`disabled`, ``);
    paper2.setAttribute(`disabled`, ``);
    pcChoise.removeAttribute(`disabled`, ``);


    for (let i = 0; i < 1000; i += 1) {
    let x = Math.round(Math.random() * 10);
    if (x > 3 || x == 0) {
        continue
    } else {

        qwerty1.push(x);

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
            // choise.classList.remove(`rockpc`);
            // choise.classList.remove(`paperpc`);
            // choise.classList.add(`scissorspc`);
        })

        

        cpChoiseFn(qwerty1[j]);
        j += 1;
        break
    }

}
})

paper.addEventListener(`click`, (e) => {
    e.preventDefault
    y = 3;
    // console.log(x);

    scissors.style.opacity = `0.3`;
    rock2.style.opacity = `0.3`;

    scissors2.style.cursor = `default`;
    paper2.style.cursor = `default`;
    rock2.style.cursor = `default`;

    scissors2.setAttribute(`disabled`, ``);
    rock2.setAttribute(`disabled`, ``);
    paper2.setAttribute(`disabled`, ``);
    pcChoise.removeAttribute(`disabled`, ``);

    for (let i = 0; i < 1000; i += 1) {
    let x = Math.round(Math.random() * 10);
    if (x > 3 || x == 0) {
        continue
    } else {
        qwerty1.push(x);
        // console.log(typeof qwerty1[0]);
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
        console.log(cpScore);
        console.log(yourScore);
        console.log(drawScore);
        
        // console.log(x);

        
        
        cpChoiseFn(qwerty1[j]);
        j += 1;
        break
        }
        

}
})

// pcChoise.setAttribute(`disabled`, true);
// pcChoise.setAttribute().remove.disabled;


pcChoise.removeAttribute(`disabled`);

let randomNumber = Math.round(Math.random() * (2 - 0) + 0);

pcChoise.addEventListener(`click`, (e) => {
    const randomChoise = imgsPc[randomNumber];
    // console.log(1);

    // qwerty1.push(randomNumber + 1);
    if (randomNumber == 0) {
        imgsPc[0].style.display = `none`;
        imgsPc[1].style.display = `none`;
        imgsPc[2].style.display = `none`;
    } else if (randomNumber == 1) {
        imgsPc[0].style.display = `none`;
        imgsPc[1].style.display = `none`;
        imgsPc[2].style.display = `none`;
    } else {
        imgsPc[2].style.display = `none`;
        imgsPc[0].style.display = `none`;
        imgsPc[1].style.display = `none`;
    }
    // const randomChoise = imgsPc[randomNumber];
    // console.log(randomChoise);

    scissors.style.opacity = `1`;
    paper.style.opacity = `1`;
    rock2.style.opacity = `1`;

    scissors2.removeAttribute(`disabled`);
    paper2.removeAttribute(`disabled`);
    rock2.removeAttribute(`disabled`);

    scissors2.style.cursor = `pointer`;
    paper2.style.cursor = `pointer`;
    rock2.style.cursor = `pointer`;
   
    randomChoise.style.display = `block`;
    // randomChoise.style.opacity = `0.3`;
    // const randomChoiseString = randomChoise.outerHTML;
    // console.log(randomChoiseString);
    
    // divForImgs.innerHTML = randomChoiseString;
    // console.log(qwerty1);
    

    
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




const cpChoiseFn = (a) => {
    if (a == 1) {
        randomNumber = 0;
    } else if (a == 2) {
        randomNumber = 1;
    } else {
        randomNumber = 2;
    }
};


changeYourChoise.addEventListener(`click`, (e) => {

    scissors.style.opacity = `1`;
    paper.style.opacity = `1`;
    rock2.style.opacity = `1`;

    scissors2.removeAttribute(`disabled`);
    paper2.removeAttribute(`disabled`);
    rock2.removeAttribute(`disabled`);

    scissors2.style.cursor = `pointer`;
    paper2.style.cursor = `pointer`;
    rock2.style.cursor = `pointer`;

    j - 1;

    if (yourScore > 0) {
        yourScore -= 1;
    } else {

    }

    if (cpScore > 0) {
        cpScore -= 1;
    } else {

    }

    if (drawScore > 0) {
        drawScore -= 1;
    } else {

    }
})
