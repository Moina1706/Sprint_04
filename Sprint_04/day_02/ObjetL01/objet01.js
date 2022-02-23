// Définissez les nouvelles propriétés de l'objet chien: race, getDogInfo*/

//Créez un objet vide appelé chien
//const chien = {};
// Affichez l'objet chien sur la console
//console.log(chien);
// Ajoutez le nom, les pattes, la couleur, l'âge et les propriétés d'écorce pour l'objet chien.
//La propriété bark est une méthode qui renvoie woof woof
function bark() {
  var chaine = "woof woof";
  return chaine;
}
const chien = {
  nom: "Rex",
  pattes: 4,
  couleur: "Blanc",
  age: 4,
  proriete: bark(),
};

// Obtenez le nom, les pattes, la couleur, l'âge et la valeur de l'écorce de l'objet chien
console.log(chien.nom, chien.pattes, chien.couleur, chien.age, chien.proriete);

//Définissez les nouvelles propriétés de l'objet chien: race, race_function getDogInfo - valeur qui retourne une race
chien.race = "Chiwawa";

function getDogInfo() {
  var race = "Chiwawa WAWA";
  return race;
}

chien.race_function = getDogInfo();

console.log(
  chien.nom,
  chien.pattes,
  chien.couleur,
  chien.age,
  chien.race,
  chien.proriete,
  chien.race_function
);
