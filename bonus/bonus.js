
//chiedere all'utente se vuole pari o dispari
const userChoice= prompt("scegli pari o dispari");
 
//chiedere all'utente un numero compreso tra 1 e 9 
const numberUser = prompt("scegli un numero");
 
//generare un numero tra 1 e 9 che sarà giocato dal pc 
let numberComputer = Math.floor(Math.random() * 9) + 1;
 
//si somma il numero scelto dall'utente e il numero del pc
const sum = numberUser + numberComputer;
 
//si crea una variabile let da riutilizzare all'interno dei condizionali
let result = 0;
  