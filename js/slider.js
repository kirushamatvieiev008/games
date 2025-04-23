const studentsInfoList = document.querySelector(`.students`);
const student1 = document.querySelector(`.inf1`);
const student2 = document.querySelector(`.inf2`);
const student3 = document.querySelector(`.inf3`);
const arrayStudents = document.querySelectorAll(`.student`);
const buttonSlideLeft = document.querySelector(`.slide_button_left`);
const buttonSlideRight = document.querySelector(`.slide_button_right`);
const line1 = document.querySelector(`.line1`);
const line2 = document.querySelector(`.line2`);
const line3 = document.querySelector(`.line3`);

let arrayClics = [];
let clics = 0;
let clics2 = 0;

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

        line1.style.width = `30px`;
        line2.style.width = `18px`;
        line3.style.width = `18px`;

        line1.style.backgroundColor = `#797979`;
        line2.style.backgroundColor = `#D9D9D9`;
        line3.style.backgroundColor = `#D9D9D9`;

    } else if (arrayStudents[clics].classList.contains(`inf2`)) {
        student1.style.display = `none`;
        student2.style.display = `flex`;
        student3.style.display = `none`;

        line1.style.width = `18px`;
        line2.style.width = `30px`;
        line3.style.width = `18px`;

        line1.style.backgroundColor = `#D9D9D9`;
        line2.style.backgroundColor = `#797979`;
        line3.style.backgroundColor = `#D9D9D9`;

    } else {
        student1.style.display = `none`;
        student2.style.display = `none`;
        student3.style.display = `flex`;

        line1.style.width = `18px`;
        line2.style.width = `18px`;
        line3.style.width = `30px`;

        line1.style.backgroundColor = `#D9D9D9`;
        line2.style.backgroundColor = `#D9D9D9`;
        line3.style.backgroundColor = `#797979`;
    }
    
})



buttonSlideLeft.addEventListener(`click`, (e) => {
    clics2++;
    if (clics2 > 2) {
        clics2 = 0;
    } else {

    }
    // arrayStudents[clics].style.display = `block`;
    // arrayStudents[clics - 1].style.display = `none`;

    if (arrayStudents[clics2].classList.contains(`inf1`)) {
        student1.style.display = `none`;
        student2.style.display = `none`;
        student3.style.display = `flex`;

        line1.style.width = `18px`;
        line2.style.width = `18px`;
        line3.style.width = `30px`;

        line1.style.backgroundColor = `#D9D9D9`;
        line2.style.backgroundColor = `#D9D9D9`;
        line3.style.backgroundColor = `#797979`;

    } else if (arrayStudents[clics2].classList.contains(`inf2`)) {
        student1.style.display = `none`;
        student2.style.display = `flex`;
        student3.style.display = `none`;

        line1.style.width = `18px`;
        line2.style.width = `30px`;
        line3.style.width = `18px`;

        line1.style.backgroundColor = `#D9D9D9`;
        line2.style.backgroundColor = `#797979`;
        line3.style.backgroundColor = `#D9D9D9`;
    } else {
        student1.style.display = `flex`;
        student2.style.display = `none`;
        student3.style.display = `none`;

        line1.style.width = `30px`;
        line2.style.width = `18px`;
        line3.style.width = `18px`;

        line1.style.backgroundColor = `#797979`;
        line2.style.backgroundColor = `#D9D9D9`;
        line3.style.backgroundColor = `#D9D9D9`;
    }
    
})