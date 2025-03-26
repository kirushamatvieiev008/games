const rockLi = document.querySelector(`.rock`);
const scissors = document.querySelector(`.cutter`);
const paper = document.querySelector(`.paper`);
const pc = document.querySelector(`.pc`);
const you = document.querySelector(`.you`);
const draw = document.querySelector(`.draw`);

let y;
let yourScore = 0;
let cpScore = 0;
let drawScore = 0;


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
        
        console.log(x);
        

        break
    }

}
})

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
        console.log(x);



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
        console.log(x);
        
        break
        }
        

}
})