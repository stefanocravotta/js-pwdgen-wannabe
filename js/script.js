
// GENERARE UNA PASSWORD CON NOME, COGNOME E COLORE PREFERITO 

/* 
1.  DICHIARAZIONE VARIABILI
2.  ASSEGNAZIONE VALORI
3.  SOMMA DELLE VARIABILI
4.  STAMPA NEL DOCUMENTO
 */


const firstName = prompt("Inserisci il tuo nome");
const lastName = prompt("Inserisci il tuo cognome");
const colorePreferito = prompt("Inserisci il tuo colore preferito");

const passwordGenerator = firstName + lastName + colorePreferito +"22";

console.log(passwordGenerator);

document.getElementById("password").innerHTML = (passwordGenerator)

