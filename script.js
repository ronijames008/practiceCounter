const minus = document.getElementById('decrement');
const plus = document.getElementById('increment');
const reset = document.getElementById('reset');
const display = document.getElementById('count')
let ctr = display.innerText;

minus.addEventListener('click', function(e){
    if(ctr>0){
        ctr--;
        display.innerText = ctr;
    }
});

plus.addEventListener('click', function(e){
    ctr++;
    display.innerText = ctr;
});

reset.addEventListener('click', function(e){
    ctr = 0;
    display.innerText=ctr;
});