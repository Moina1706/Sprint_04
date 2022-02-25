//1.Expliquez la différence entre forEach, map, filter, et reduce.
//
//La méthode forEach() appelle une fonction pour chaque élément d'un tableau.
// n'est pas exécutée pour les éléments vides.
//Exemple
//const fruits = ["apple", "orange", "cherry"];
//fruits.forEach(myFunction);
//===========================================================
/*map
 appelle une fonction une fois pour chaque élément d'un tableau.
 n'exécute pas la fonction pour les éléments vides.
map() ne modifie pas le tableau d'origine. */
/* Exemple
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}*/
//==========================================================
/*filter
crée un nouveau tableau rempli d'éléments qui réussissent un test fourni par une fonction.
N'exécute pas la fonction pour les éléments vides.
Ne modifie pas le tableau d'origine. 
*/

/*reduce
exécute une fonction de réduction pour l'élément de tableau.
renvoie une seule valeur : le résultat cumulé de la fonction.
n'exécute pas la fonction pour les éléments de tableau vides.
ne modifie pas le tableau d'origine. 
*/

//2.Définissez une fonction d'appel avant de les utiliser dans forEach, map, filter ou reduce.

let text = "";

//3.Utilisez forEach pour affichez (console.log) chaque pays du tableau des pays.
const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
const names = ["Max", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
function myFunction(item, index) {
  text += +" " + index + " :  " + " " + item + "\n";
}

//3.Utilisez forEach pour affichez (console.log) chaque pays du tableau des pays.
countries.forEach(myFunction);
console.log(text);

//(Facultatitf) Utilisez forEach pour console.log chaque nom dans le tableau names.

names.forEach(myFunction);
console.log(text);
//(Facultatitf) Utilisez forEach pour console.log chaque nombre dans le tableau de nombres.
numbers.forEach(myFunction);
console.log(text);
//==========================================================================

//6.Utilisez map pour créer un nouveau tableau
//où chaque élément est le nom du pays en majuscule dans le tableau des pays.
const newArr = countries.map(myFunctionMaj);

function myFunctionMaj(num) {
  return num.toUpperCase();
  //let result = text.toUpperCase();
}
console.log(newArr);

//========================================================================

/*8.(Facultatitf) Utilisez map pour créer un nouveau tableau en calculant chaque nombre en racine carré Math.sqrt() dans le tableau de nombres.
Utilisez map pour changer chaque nom en majuscules dans le tableau des noms*/
//=======================================================================

/*7.Utilisez map pour créer un nouveau tableau 
où chaque élément est la longueur du pays à partir du tableau de pays.*/

countries.map((countries, index) => {
  console.log(index, countries.length);
});

// (Facultatitf) Utilisez map pour créer un nouveau tableau en calculant chaque
// nombre en racine carré Math.sqrt() dans le tableau de nombres.

const newArrNumber = numbers.map(myFunctionNumber);

function myFunctionNumber(num) {
  //return num * 2;
  return Math.sqrt(num);
}
console.log(newArrNumber);
//==================================================================================
// 9.Utilisez map pour changer chaque nom en majuscules dans le tableau des noms

const newArrName = names.map(myFunctionNames);

function myFunctionNames(num) {
  return num.toUpperCase();
  //let result = text.toUpperCase();
}
console.log(newArrName);

//10. Utilisez filter pour filtrer les pays contenant land.

const result = countries.filter(checkLand);

function checkLand(laland) {
  return laland.match("land");
}
console.log(result);
//==================================================================
/* (Facultatitf) Utilisez filter pour filtrer les pays comportant 
exactement 6 caractères dans le tableau des pays.*/

countries.filter((countries, index) => {
  if ((index, countries.length === 6)) {
    console.log(index, countries);
  }
});

// 12.Utilisez filter pour filtrer les pays contenant 6 lettres et plus dans le tableau des pays.
countries.filter((countries, index) => {
  console.log(countries, countries.length >= 6);
  //console.log(countries);
});

// 13.Utilisez filter pour filtrer les noms qui commence par 'E' dans le tableau names.
const resultat = names.filter(checkNames);

function checkNames(laName) {
  return laName.startsWith("E");
}
console.log(resultat);

/*14.(Facultatitf) Utilisez filter pour filtrer uniquement 
les produits qui ont un prix (une valeur numérique) dans le tableau products.*/
const resultat_price = products.filter(checkPrices);

function checkPrices(thePrice) {
  return thePrice.price >= "0";
}
console.log(resultat_price);

//15.Utilisez reduce pour additionner tous les nombres du tableau de nombres.
const initialValue = 0;
const sumWithInitial = numbers.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);

//console.log(numbers.reduce((a, b) => a + b, 0)); Fonctionne aussi

/*16.(Facultatitf) Utilisez reduce pour concaténer tous les pays et pour produire cette phrase: 
Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries*/

console.log(
  countries.reduce((a, b) => a + b + "  ") + " are north European countries "
); //Fonctionne aussi
