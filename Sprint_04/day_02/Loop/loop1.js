//Itérer de 0 à 10 en utilisant la boucle for, while et do while
for (let i = 0; i < 10; i++) {
  console.log("Boucle for de 0 à 10", i);
}
let j = 0;
while (j < 10) {
  console.log("Boucle while de 0 à 10", j);
  j++;
}

let k = 0;
do {
  k++;
  console.log("Boucle Do While de 0 à 10", k);
} while (k < 10);

//Itérez 10 à 0 en utilisant la boucle for, while et do while
for (let l = 10; l > 0; l--) {
  console.log("Boucle for de 10 à 0", l);
}
let m = 10;
while (m > 0) {
  console.log("Boucle while de 10 à 0", m);
  m--;
}

let n = 10;
do {
  console.log("Boucle Do While de 10 à 0", n);
  n--;
} while (n > 0);

//3.Créez et initialisez une variable n avec un entier positif. Itérer de 0 à n en utilisant la boucle for

let text = prompt("Saisie un numero");
let text_vide = "";
let p = 0;

//if (text != text_vide && Number.isInteger(text)) {
if (text != text_vide) {
  text = text * 1;
  if (Number.isInteger(text) == true) {
    for (p = 0; p < text + 1; p++) {
      console.log("Entier positif", p);
    }
  } else {
    alert(text + " n'est pas un nombre entier");
  }
}

//4.Écrivez une boucle qui crée le modèle suivant à l'aide de console.log():
// #
// ##
// ###
// ####
// #####
// ######
// #######
var tab_car = "";
var car = "#";
for (let q = 0; q < 6; q++) {
  tab_car = car + tab_car;
  console.log(tab_car);
}
//console.log(tab_car);

//5.Utilisez une boucle pour affichez le modèle suivant à l'aide de console.log():

// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

for (let d = 0; d <= 10; d++) {
  console.log(d + " x " + d + " = " + d * d);
}

//6. Utilisez la boucle for pour parcourir de 0 à 100 et n'afficher que des nombres pairs
for (let e = 0; e <= 100; e++) {
  if (e % 2 === 0) {
    console.log("Divible par 2", e);
  }
}

// Utilisez la boucle for pour parcourir de 0 à 100 et n'afficher que les nombres impairs
for (let f = 0; f <= 100; f++) {
  if (f % 2 !== 0) {
    console.log("NON Divible par 2", f);
  }
}
// (Facultatif) Utilisez la boucle for pour parcourir de 0 à 100 et n'afficher que les nombres premiers

//Facutatif

// Utilisez la boucle for pour parcourir de 0 à 100 et afficher la somme de tous les nombres.
//La somme de tous les nombres de 0 à 100 est 5050.
let r = 0;

for (let q = 0; q <= 100; q++) {
  console.log(q + " + " + q + " = " + (q = +q));
  r = r + q;
}
console.log("La somme de tous les nombres de 0 à 100 est:", r);
