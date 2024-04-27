
//chiedere all'utente se vuole pari o dispari
let userChoice = prompt("scegli pari o dispari");
console.log("hai deciso ha deciso"+" "+userChoice);

// Control per la scelta pari o dispari
if (userChoice !== "pari" && userChoice !== "dispari") {
    alert("La scelta non è valida. Scegli 'pari' o 'dispari'.");
    userChoice = prompt("Scegli pari o dispari:");
    console.log("la nuova scelta effettuata è"+ " " + userChoice)
}
 
//chiedere all'utente un numero compreso tra 1 e 9 
let numberUser = Number(prompt("Scegli un numero tra 1 e 9:"));
console.log("hai deciso" +" "+ numberUser);

//Control per la scelta del numero
if (numberUser > 9){
    alert("La scelta non è valida. non puoi scegliere un numero maggiore di 9. Scegli un numero tra 1 e 9:");
    numberUser = Number(prompt("Scegli un numero tra 1 e 9:"));
    console.log("il nuovo numero scelto è"+ " " + numberUser)
}
 
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

//si determina chi ha vinto 
if ((result === "pari" && userChoice === "pari")||(result === "dispari"&& userChoice === "dispari")){
    console.log("hai vinto! il risultato è"+ " " + result)
}else{
    console.log("midispiace ha vinto il pc, il risultato è"+ " "+ result)
}