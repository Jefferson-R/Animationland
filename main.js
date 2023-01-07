let score = document.querySelector('.score > h4');
let bunny1 = document.getElementById('bunny1');
let bunny2 = document.querySelector('#bunny2');
let bunny3 = document.querySelector('#bunny3');
let bunny4 = document.querySelector('#bunny4');

let total = 0;
score.innerHTML = `Score: ${total}`;

function bunnyClicked (){
    total++;
    score.innerHTML = `Score: ${total}`;
}

bunny1.addEventListener('click', bunnyClicked);
bunny2.addEventListener('click', bunnyClicked);
bunny3.addEventListener('click', bunnyClicked);
bunny4.addEventListener('click', bunnyClicked);