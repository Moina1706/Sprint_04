// Exercices Aléatoires --> Level03

//     Créez un format d'heure lisible par l'homme à l'aide de l'objet Date time.
//L'heure et la minute doivent être toujours à deux chiffres
//(7 heures devraient être 07 et 5 minutes devraient être 05)
//         YYYY-MM-DD HH:mm eg. 2020-01-02 07:05

console.log("je suis dans aleatoire");
var date = new Date();

var annee = date.getFullYear();
console.log(annee);
var mois = addZero(date.getMonth() + 1);
var jour = addZero(date.getDay());
var heure = addZero(date.getHours());
var minutes = addZero(date.getMinutes());
var secondes = addZero(date.getSeconds());

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

// YYYY-MM-DD HH:mm
var date_entiere1 =
  annee + "-" + mois + "-" + jour + " " + heure + ":" + minutes;

console.log(date_entiere1);
