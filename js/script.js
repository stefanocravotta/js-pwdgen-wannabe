
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

const linear = firstName + lastName;
const invers = lastName + firstName;
const random = "22" + firstName + colorePreferito + lastName;

document.getElementById("userlinear").innerHTML = linear
document.getElementById("userinvers").innerHTML = invers
document.getElementById("userrandom").innerHTML = random




