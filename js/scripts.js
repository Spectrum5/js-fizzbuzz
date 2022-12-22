/*
STEP:
1. Sfruttando i cicli for, facciamo un conteggio da 1 a 100
2. Per ogni numero:
- Controllo se è un multiplo di 3 OPPURE
-- Se è un multiplo di 3, stampo in console Fizz

- Controllo se è un multiplo di 5 OPPURE
-- Se è un multiplo di 5, stampo in console Buzz

- Controllo se è un multiplo sia di 3 che di 5
-- Se è un multiplo di 3 e di 5, stampo in console FizzBuzz

- Se non è nè multiplo di 3, nè multiplo di 5
-- Stampo in console il numero che sto analizzando

*/

//creo ciclo for che stampi numeri compresi tra 1 a 100
const tableContainer = document.querySelector('.container');
let calcolate;

for(let i = 1; i <=100; i++){
    const numberTable = document.createElement('div');
    numberTable.classList.add('number-table');

//creo condizione che imponga ai numeri multipli di 15 ( % 15 === 0 ) di stampare FizzBuzz    
    if( i % 3 == 0 && i % 5 == 0){
        calcolate = `FizzBuzz`;
        numberTable.classList.add('bg-green');
    }
//creo condizione che imponga ai numeri multipli di 5 ( % 5 === 0 ) di stampare Buzz
    else if( i % 5 == 0){
        calcolate = `Buzz`;
        numberTable.classList.add('bg-light-b');
    }
//creo condizione che imponga ai numeri multipli di 3( % 3 === 0 ) di stampare Fizz
    else if(i % 3 == 0){
        calcolate = `Fizz`;
        numberTable.classList.add('bg-yellow');      
    }
    else{
        calcolate = i;  
    }

//console.log per vedere il flusso dei numeri
    console.log(calcolate);

    numberTable.innerHTML = calcolate;
    tableContainer.append(numberTable);
}