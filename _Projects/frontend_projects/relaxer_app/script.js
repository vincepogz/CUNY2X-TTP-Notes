//Creating variables in javascript (Constant Referrence)

//Variable container is referring to div with id='container'
const container = document.getElementById('container');
//Variable text is referring to div with id='text'
const text = document.getElementById('text');
//Variable totalTime is set to 7500
const totalTime = 7500;
//Variable breatheTime is set to the formula below
const breatheTime = (totalTime / 5) * 2;
//Variable holdTime is set to the formula below
const holdTime = totalTime / 5;

//Initialize breathAnimation Function/Method
breathAnimation();


function breathAnimation(){
    //When condition is met, JS will inject the following text
    text.innerHTML = 'Breath In!';
    //When condition is met, JS will inject the className
    container.className = 'container grow';

    setTimeout(() => {
        text.innerText = 'Hold';

        setTimeout(() => {
            text.innerText = 'Breathe Out!';
            container.className = 'container shrink';
        }, holdTime);
    }, breatheTime);
}

setInterval(breathAnimation, totalTime);