
// let parent = document.querySelector('.parent');
// let child = document.querySelector('.child');
// let result = document.querySelector('#result');

// parent.addEventListener('mouseenter', function(event) {
//     console.log('mouseenter - ' + this.className);
// });
// parent.addEventListener('mouseleave', function(event) {
//     console.log('mouseleave - ' + this.className);
// });
// child.addEventListener('mouseenter', function(event) {
//     console.log('mouseenter - ' + this.className);
// });
// child.addEventListener('mouseleave', function(event) {
//     console.log('mouseleave - ' + this.className);
// });

// parent.addEventListener('mousemove', function(event) {
//     console.log('mousemove - ' + this.className);
// });

// parent.addEventListener('mouseover', function(event) {
//     console.log('mouseover - ' + this.className);
// });
// parent.addEventListener('mouseout', function(event) {
//     console.log('mouseout - ' + this.className);
// });


// Timer
let timerID;
let button = document.querySelector('button#hello');
let cancel = document.querySelector('button#cancel');
button.addEventListener('click', function() {
   timerID  = setTimeout(sayHello, 5000);
});
cancel.addEventListener('click', function() {
   clearTimeout(timerID);
});

// Iterval
let intervalID;
let number = 10;
let countdown = document.querySelector('#countdown');
let start = document.querySelector('#start');
start.addEventListener('click', function() {
    clearInterval(intervalID);
    number = 10;
    
    intervalID = setInterval(function() {
        countdown.innerText = number;
        number--;
        if (number == -1) {
            clearInterval(intervalID);
        }
    }, 1000);
});