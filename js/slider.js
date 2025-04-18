const studentsInfoList = document.querySelector(`.students`);
const student1 = document.querySelector(`.inf1`);
const student2 = document.querySelector(`.inf2`);
const student3 = document.querySelector(`.inf3`);
const arrayStudents = document.querySelectorAll(`.student`);
const buttonSlideLeft = document.querySelector(`.slide_button_left`);
const buttonSlideRight = document.querySelector(`.slide_button_right`);

let arrayClics = [];
let clics = 0;

buttonSlideRight.addEventListener(`click`, (e) => {
    clics++;
    if (clics > 2) {
        clics = 0;
    } else {

    }
    // arrayStudents[clics].style.display = `block`;
    // arrayStudents[clics - 1].style.display = `none`;

    if (arrayStudents[clics].classList.contains(`inf1`)) {
        student1.style.display = `flex`;
        student2.style.display = `none`;
        student3.style.display = `none`;

    } else if (arrayStudents[clics].classList.contains(`inf2`)) {
        student1.style.display = `none`;
        student2.style.display = `flex`;
        student3.style.display = `none`;
    } else {
        student1.style.display = `none`;
        student2.style.display = `none`;
        student3.style.display = `flex`;
    }
    
})

