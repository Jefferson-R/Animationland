let score = document.querySelector('.score > h4');
let bunny1 = document.querySelector('#bunny1');
let bunny2 = document.querySelector('#bunny2');
let bunny3 = document.querySelector('#bunny3');
let bunny4 = document.querySelector('#bunny4');

let total = 0;
score.innerHTML = `Score: ${total}`;

function bunnyClicked (){
    total++;
    score.innerHTML = `Score: ${total}`;
}

bunny1.addEventListener('click' || 'touch', bunnyClicked);
bunny2.addEventListener('click' || 'touch', bunnyClicked);
bunny3.addEventListener('click' || 'touch', bunnyClicked);
bunny4.addEventListener('click' || 'touch', bunnyClicked);