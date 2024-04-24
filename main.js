"use strict";


//il programma richiede un input all'utente tramite prompt:
//-età, -numero km.--> queste 2 informazioni vanno usate come variabili.

//età
const age = prompt('inserisci la tua età') ;
const userAge= Number(age) ;
console.log(`questa è l'età dell'utente ${userAge}`);

//km - distance
const km = prompt('inserisci i kilometri da percorrere');
const distance =Number(km) ;
console.log(`questa è la distanza ${distance} km`);

//costo iniziale del biglietto
const ticket = 0.21
console.log(`questo è il coso iniziale del biglietto ${ticket}`);

//in base  alle informazioni fornite calcola il prezzo, 0,21euro al km.
console.log(`questo è il prezzo del ticket in base alla distanza percorsa`+ (ticket * distance));

//costo del ticket al kilometro
const ticketCost =  ticket * distance;
console.log(`costo del ticket  al km ${ticketCost}`);

// se sotto i 18 anni sconto del 20%
// se l'età è compresa tra 18 e 65 calcolo normale
// se sopra i 65 va applicato uno sconto del 40%
//l'output del prezzo è rielaborato con massimo 2 decimali.


