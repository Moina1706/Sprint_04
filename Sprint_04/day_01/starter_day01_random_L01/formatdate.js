// 4.Créez un format d'heure lisible par l'homme à l'aide de l'objet Date time

// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm

console.log("je suis dans formatdate");

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
// DD-MM-YYYY HH:mm
var date_entiere2 =
  jour + "-" + mois + "-" + annee + " " + heure + ":" + minutes;
// DD/MM/YYYY HH:mm
var date_entiere3 =
  jour + "/" + mois + "/" + annee + " " + heure + ":" + minutes;

console.log(date_entiere1);
console.log(date_entiere2);
console.log(date_entiere3);
