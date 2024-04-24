"use strict";


//il programma richiede un input all'utente tramite prompt:
//-età, -numero km.--> queste 2 informazioni vanno usate come variabili.


const age = prompt('inserisci la tua età') ;
//eseguo il debug per comprendere se il parametro è stato passato correttamente
console.log(`age is ${age}`);
//identifico la variabile come stringa
console.log(typeof age);
//definisco la mia variabile da stringa a numero intero
const userAge= Number(age) ;
//identifico la variabie come num.int
console.log(typeof userAge);

const km = prompt('inserisci i kilometri da percorrere');
console.log(`km is ${km}`) ;
console.log(typeof km) ;
let distance =Number(km) ;
console.log(typeof distance) ;

//in base  alle informazioni fornite calcola il prezzo, 0,21euro al km.
// se sotto i 18 anni sconto del 20%
// se l'età è compresa tra 18 e 65 calcolo normale
// se sopra i 65 va applicato uno sconto del 40%
//l'output del prezzo è rielaborato con massimo 2 decimali.


