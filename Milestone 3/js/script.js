// CONSEGNA
// Scrivi un programma che stampi i numeri da 1 a 100.


// Milestone 3:
// Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.

let numberOrWord;
let backgroundClass;
let mainRow = document.querySelector('.row');

for(let i = 1; i <= 1000; i++){

    if(i % 3 === 0 && i % 5 === 0){
        numberOrWord = `FizzBuzz`;
        backgroundClass = `fizzbuzz_bg`;
    } else if(i % 3 === 0){
        numberOrWord = `Fizz`;
        backgroundClass = `fizz_bg`;
    } else if(i % 5 === 0){
        numberOrWord = `Buzz`;
        backgroundClass = `buzz_bg`;
    }  else{
        numberOrWord = i;
        backgroundClass = `number_bg`;
    }

    console.log(numberOrWord);

    mainRow.innerHTML += `<div class="col"><div class="d-flex justify-content-center align-items-center p-5 fw-bolder ${backgroundClass}">${numberOrWord}</div></div>`;

}


