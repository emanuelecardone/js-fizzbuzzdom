// CONSEGNA
// Scrivi un programma che stampi i numeri da 1 a 100.


// Milestone 2:
// Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.

let numberOrWord;
let mainRow = document.querySelector('.row');

for(let i = 1; i <= 1000; i++){
    
    if(i % 3 === 0 && i % 5 === 0){
        numberOrWord = `FizzBuzz`;
    } else if(i % 3 === 0){
        numberOrWord = `Fizz`;
    } else if(i % 5 === 0){
        numberOrWord = `Buzz`;
    }  else{
        numberOrWord = i;
    }

    console.log(numberOrWord);

    mainRow.innerHTML += `<div class="col"><div class="d-flex justify-content-center align-items-center p-5 fw-bolder">${numberOrWord}</div></div>`;

}


