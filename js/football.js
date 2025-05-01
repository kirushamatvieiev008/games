const peach = document.querySelector(`.football_div`);
const ball = document.querySelector(`.ball_div`);

let x = 0;
let y = 0;

peach.addEventListener(`click`, (e) => {
    x = e.pageX;
    y = e.pageY;
    console.log(x, y);
    
    ball.style.top = `${y - 1650}px`;
    ball.style.left = `${x - 185}px`
})
