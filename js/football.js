const peach = document.querySelector(`.football_div`);
const ball = document.querySelector(`.ball_div`);

let x = 0;
let y = 0;

peach.addEventListener(`click`, (e) => {
    x = e.pageX;
    y = e.pageY;
    console.log(x, y);
    console.dir(e.target);
    
    
    ball.style.top = `${y - 34}px`;
    ball.style.left = `${x}px`
})
