// 1. Créez un fichier séparé countries.js et stockez le tableau countries dans ce fichier,
//  créez un fichier distinct web_techs.js et stockez le tableau webTechs dans ce fichier.
//   Accédez aux deux variables, countries et webTechs, depuis le fichier main.js. Indice:
//  l'ordre d'inclusion des fichiers javascript dans le fichier html a une influence.
console.log(countries);
console.log(webTechs);

// main.js
var words1 = [];
var words2 = [];
var words = [];
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, VueJs, Laravel.";
//console.log(text);
words1 = text.split(" ");
//console.log(words1);
let result;
let result2;
//Supprimer les ","
for (let i = 0; i < words1.length; i++) {
  result = words1[i].replace(",", "");
  words2[i] = result;
}
//Supprimer les "."
for (let j = 0; j < words1.length; j++) {
  result2 = words2[j].replace(".", "");
  words[j] = result2;
}
console.log(words);
console.log(words.length);

//************************************************** /

//Dans le panier suivant (shoppingCart), ajoutez, supprimez, modifiez des articles

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
// ajoutez 'Meat' au début de votre panier s'il n'a pas déjà été ajouté.
// Verifier si "Meat" fait partie de la liste
let verif = 0;
for (let i = 0; i < shoppingCart.length; i++) {
  if (shoppingCart[i] == "Meat") {
    verif++;
  }
}
if (verif == 0) {
  shoppingCart.push("Meat");
}
console.log(shoppingCart);

// ajoutez 'Sugar' à la fin de votre panier s'il n'a pas déjà été ajouté.
let verif1 = 0;
for (let i = 0; i < shoppingCart.length; i++) {
  if (shoppingCart[i] == "Sugar") {
    verif1++;
  }
}
if (verif1 == 0) {
  shoppingCart.unshift("Sugar");
}
console.log(shoppingCart);
// supprimez 'Honey' si vous êtes allergique au miel
var miel = "Honey";
for (var k = shoppingCart.length - 1; k >= 0; k--) {
  if (shoppingCart[k] === miel) {
    shoppingCart.splice(k, 1);
    break;
  }
}
console.log("Liste sans Honey", shoppingCart);

// modifier le thea en 'Green Tea'
var ancien_the = "Tea";
var nv_the = "Green Tea";

for (let l = 0; l < shoppingCart.length; l++) {
  if (shoppingCart[l] == ancien_the) {
    console.log(shoppingCart[l]);
    shoppingCart[l] = shoppingCart[l].replace("Tea", "Green Tea");
  }
}
console.log(shoppingCart);

//Dans le tableau countries, vérifiez si Morocco existe dans le tableau et s'il existe, affichez "MOROCCO".
// S'il n'existe pas, ajoutez Morocco à la liste des pays.
var maroc = "Morocco";
let test_maroc = 0;
for (let m = 0; m < countries.length; m++) {
  if (countries[m] == maroc) {
    countries[m] = countries[m].toUpperCase();
    break;
  } else {
    test_maroc++;
  }
}
if (countries.length == test_maroc) {
  countries.push(maroc);
}
console.log(countries);

//************************************************* */
// 5. Dans le tableau webTechs, vérifiez si Sass existe dans le tableau et
//  s'il existe, affichez "Sass est un préprocesseur CSS".
//  S'il n'existe pas, ajoutez Sass au tableau et affichez-le.

var saas_verif = "Saas";
let saas_cpt = 0;
for (let n = 0; n < webTechs.length; n++) {
  if (webTechs[n] == saas_verif) {
    console.log(webTechs[i] + "est un prépocesseur CSS");
  } else {
    saas_cpt++;
  }
}
if (webTechs.length == saas_cpt) {
  webTechs.push(saas_verif);
}
console.log(webTechs);

//6.Concaténez les deux variables suivantes et stockez-les dans une variable fullStack.

const frontEnd = ["HTML", "CSS", "JS", "VueJs", "VueX"];
const backEnd = ["Node", "Express", "MongoDB"];
var fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
