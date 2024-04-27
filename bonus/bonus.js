
//chiedere all'utente se vuole pari o dispari
const userChoice = prompt("scegli pari o dispari");
console.log("hai deciso ha deciso"+" "+userChoice);
 
//chiedere all'utente un numero compreso tra 1 e 9 
const numberUser = Number(prompt("Scegli un numero tra 1 e 9:"));
console.log("hai deciso"+" "+numberUser);
 
//generare un numero tra 1 e 9 che sarà giocato dal pc 
let numberComputer = Math.floor(Math.random() * 9) + 1;
console.log("il computer ha generato"+" "+numberComputer);
 
//si somma il numero scelto dall'utente e il numero del pc
const sum = numberUser + numberComputer;
console.log("la somma tra la tua scelta e quella  del computer è di"+" "+sum);
 
//si crea una variabile let da riutilizzare all'interno dei condizionali
let result = 0;

//si determina se la somma è pari o dispari
if (sum % 2 === 0){
    result ="pari";
} else {
    result ="dispari";
};

