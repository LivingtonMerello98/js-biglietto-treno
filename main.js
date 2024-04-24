"use strict";


//il programma richiede un input all'utente tramite prompt:
//-età, -numero km.--> queste 2 informazioni vanno usate come variabili.

//età
const age = prompt('inserisci la tua età') ;
const userAge= Number(age) ;
console.log(`l'utente ha ${userAge} anni`);

//km - distance
const km = prompt('inserisci i kilometri da percorrere');
const distance =Number(km) ;
console.log(`distanza che deve percorrere ${distance} km`);

//costo iniziale del biglietto
const ticket = 0.21
console.log(`costo iniziale del biglietto ${ticket}`);

//in base  alle informazioni fornite calcola il prezzo, 0,21euro al km.
const ticketCost =  ticket * distance ;
console.log(`costo del biglietto: ${ticketCost}€ `);


// se sotto i 18 anni sconto del 20%
const under18 = 20/100;
const u18TicketCost = ticketCost - under18 +"€";

//se  oltre ai 65 anni sconti del 40%
const over65 = 40/100;
const o65TicketCost  = ticketCost - over65 +"€";


//debug
console.log(`sconto applicato ${u18TicketCost}`);


// se l'età è compresa tra 18 e 65 calcolo normale
// se sopra i 65 va applicato uno sconto del 40%
//l'output del prezzo è rielaborato con massimo 2 decimali.


