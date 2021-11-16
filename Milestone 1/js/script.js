// CONSEGNA
// Scrivi un programma che stampi i numeri da 1 a 100.


// Milestone 1: 
// Per i multipli di 3 stampi in console “Fizz” al posto del numero e per i multipli di 5 stampi in console Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi in console FizzBuzz.


for(let i = 1; i <= 1000; i++){
    
    let numberOrWord;
    
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
}