let name = prompt("Qual'è il tuo nome ?");

console.log(name);

let lastName = prompt("Qual'è il tuo cognome ?");

console.log(lastName + name);

let color = prompt("Qual'è il tuo colore preferito ?");

console.log(color);

let Result = name + lastName + color + "21";

document.getElementById("text").innerHTML = Result;
