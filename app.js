// select the elements
let inputOne = document.querySelector('.passone');
let inputTwo = document.querySelector('.passtwo');
let submitBtn = document.querySelector('#submit');
let form = document.querySelector('.form-input');
let lengthOne = inputOne.value.length;
let lengthTwo = inputTwo.value.length;




let confirmOne = document.querySelector('#confirm-one');
let confirmTwo = document.querySelector('#confirm-two');
let check = document.querySelector('.check');
check.style.display = 'none'; 


inputOne.addEventListener('input', (e) => {
    lengthOne = e.target.value.length;
    
    if(lengthOne >= 7 && lengthOne < 11){
        confirmOne.textContent = "";
        inputOne.style.border = '1px solid black';

    }else {
        confirmOne.textContent = "Password must be 7 and 10 characters"; 
    }
})

function logLengthOne() {
    if (!inputOne.value){
        console.log('nothing');
    }
    return inputOne.value;
}



function logLengthTwo() {
    if (!inputTwo.value){
        console.log('nothing-two');
    }
    return inputTwo.value;
}

function checkLength () {
    if (logLengthOne() === logLengthTwo()){
        inputOne.style.border = 'thin solid green';
        inputTwo.style.border = 'thin solid green';

    }
}


inputTwo.addEventListener('input', function(){
    checkLength();
    if(logLengthOne() === logLengthTwo()) {
        confirmTwo.textContent = '';
        confirmOne.textContent = '';
        check.style.display = 'block';
        check.classList.add('check');
        submitBtn.removeAttribute('disabled');
        submitBtn.style.background = 'green';
        submitBtn.style.outline = 'none';
        submitBtn.style.color = 'white';



    }
   
})


inputOne.addEventListener('blur', function(e){
    if (!(lengthOne >= 7 && lengthOne < 11)){
        inputOne.style.border = 'thin solid red';
        confirmOne.style.fontWeight = 'bold'; 
        confirmOne.style.color = 'red'; 

    }
   
})

inputTwo.addEventListener('blur', function(e){
    if(!(logLengthOne() === logLengthTwo())){
        inputTwo.style.border = 'thin solid red';
        
    }
    
})


submitBtn.addEventListener('click',(e)=> {
    e.preventDefault();
})