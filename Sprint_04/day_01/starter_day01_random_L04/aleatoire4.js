// Exercices Aléatoires --> Level04

//     Si a est supérieur à b, affichez 'a est superieur à b',
// sinon affichez 'a est inferieur à b'.
// Utilisez deux méthodes
//         if else
//         ternary operator.
//      4 est supérieur à 3

let a = 4;
let b = 3;

if (a > b) {
  console.log("a est superieur à b");
} else {
  console.log("a est inférieur à b");
}

// Les nombres pairs sont divisibles par 2 et le reste est zéro.
// Comment vérifier si un nombre est pair ou impair en JavaScript?
let nombres = prompt("Enter un nombre:");
var string_vide2 = "";
if (nombres != string_vide2) {
  Number(nombres);

  if (nombres % 2 === 0) {
    console.log(nombres + " est un nombre pair");
    document.getElementById("demo").innerHTML = nombres + " est un nombre pair";
  } else {
    console.log(nombres + " est un nombre impair");
    document.getElementById("demo").innerHTML =
      nombres + " est un nombre impair";
  }
}
