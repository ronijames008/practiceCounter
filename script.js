const input = document.getElementById('increment');
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const reset = document.getElementById('reset');
const display = document.getElementById('number');
let by = 0;
let curr = 0;

add.addEventListener('click', function(e){
    by = +input.value;
    curr = by + parseInt(display.innerText, 10);
    display.innerText = curr;
});
subtract.addEventListener('click', function(e){
    by = +input.value;
    curr = parseInt(display.innerText, 10) - by;
    display.innerText = curr;
});
reset.addEventListener('click', function(e){
    curr = 0;
    display.innerText = 0;
});