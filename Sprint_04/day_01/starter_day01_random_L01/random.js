//Declarez et initialisez les deux variables myAge et yourAge.
// J\'ai 225 ans de plus que toi.
let myAge = 250;
let yourAge = 25;
console.log("J'ai " + (myAge - yourAge) + " ans de plus que toi.");

// En utilisant 'prompt', obtenez l'année de naissance de l'utilisateur et si l'utilisateur a 18 ans ou plus,
//autorisez l'utilisateur à conduire sinon dites à l'utilisateur d'attendre un certain nombre d'années.

// Entrez votre date de naissance: 1994
// Vous avez 26 ans. Vous êtes autorisé de conduire.

// Entrez votre date de naissance: 2005
// Vous avez 16 ans. Vous serez autorisé à conduire après 2 ans.

let age_person = prompt("Année de naissance");
// Calcul de la majorité
var date = new Date();
var m = date.getFullYear();
var majorite = m - 18; // Calcul de la majorité
console.log("Majorite", majorite);
//console.log("TYPEOF", typeof age_person);
var string_vide1 = "";
if (age_person != string_vide1) {
  if (age_person <= majorite) {
    var calk_age = m - age_person; //calcul de l'age de la personne
    console.log(
      "vous avez " + calk_age + " ans. Vous êtes autorisé de conduire."
    );
    //console.log("En voiture Simone ", age_person);
    document.getElementById("demo").innerHTML = "En voiture Simone !!!";
  } else {
    document.getElementById("demo").innerHTML =
      "Attendez encore quelques années avant de conduire";

    var calk_age2 = m - age_person; //calcul de l'age de la personne

    var diff = age_person - majorite; // calcul de la defference avant la majorite

    console.log(
      "Vous avez " +
        calk_age2 +
        " ans. Vous serez autorisé à conduire après " +
        diff +
        " ans."
    );

    console.log("Trop jeune, patiente!!!");
  }
}
